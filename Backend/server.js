const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import task routes
const taskRouter = require('./Route/taskRouter');

// Use task routes
app.use('/', taskRouter);

// Handle 404
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
