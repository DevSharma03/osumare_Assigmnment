// Store tasks in memory
let tasks = [];
let id = 1;

// Validation function for the error management and correct User input
function validateTask(data) {
    const errors = [];
    
    if (!data.title || typeof data.title !== 'string') {
        errors.push('Title is required and must be a string');
    } else if (data.title.trim().length === 0) {
        errors.push('Title cannot be empty');
    } else if (data.title.length > 100) {
        errors.push('Title must be less than 100 characters');
    }
    
    if (!data.description || typeof data.description !== 'string') {
        errors.push('Description is required and must be a string');
    } else if (data.description.trim().length === 0) {
        errors.push('Description cannot be empty');
    } else if (data.description.length > 500) {
        errors.push('Description must be less than 500 characters');
    }
    
    if (data.completed !== undefined && typeof data.completed !== 'boolean') {
        errors.push('Completed must be a boolean');
    }
    
    return errors;
}

// Get all tasks API
const gTasks = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const start = (page - 1) * limit;
    const end = page * limit;
    
    const result = tasks.slice(start, end);
    const total = tasks.length;
    const pages = Math.ceil(total / limit);
    
    res.json({
        tasks: result,
        pagination: {
            page: page,
            totalPages: pages,
            totalTasks: total
        }
    });
};

// Get task by id API
const gTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);  
    if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({ error: 'Invalid task ID' });
    }
    
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
};

// Create new task API
const cTask = (req, res) => {
    const errors = validateTask(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ 
            error: 'Validation failed', 
            details: errors 
        });
    }
    
    const newTask = {
        id: id++,
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        completed: req.body.completed || false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update task API
const uTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({ error: 'Invalid task ID' });
    }
    
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    const errors = validateTask(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ 
            error: 'Validation failed', 
            details: errors 
        });
    }
    
    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        completed: req.body.completed !== undefined ? req.body.completed : tasks[taskIndex].completed,
        updatedAt: new Date().toISOString()
    };
    
    res.json(tasks[taskIndex]);
};

// Delete task API 
const dTask = (req, res) => {
    const taskId = parseInt(req.params.id);  
    if (isNaN(taskId) || taskId <= 0) {
        return res.status(400).json({ error: 'Invalid task ID' });
    }
    
    const taskIndex = tasks.findIndex(t => t.id === taskId);   
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
   
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.json({ message: 'Task deleted', task: deletedTask });
};

module.exports = { gTasks, gTaskById, cTask, uTask, dTask };
