# Task Management API

A RESTful API built with Node.js and Express.js for managing tasks. This API provides full CRUD operations for task management with in-memory storage.

## Features

- ✅ Create, read, update, and delete tasks
- ✅ Input validation for required fields
- ✅ Pagination support for listing tasks
- ✅ Proper HTTP status codes
- ✅ Error handling
- ✅ In-memory data storage

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the API

Start the server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000
```

### 1. Get All Tasks
**GET** `/tasks`

Retrieves a list of all tasks with optional pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Number of tasks per page (default: 10)

**Example Request:**
```bash
curl -X GET "http://localhost:3000/tasks?page=1&limit=5"
```

**Example Response:**
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Complete project",
      "description": "Finish the task management API",
      "completed": false,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "totalPages": 1,
    "totalTasks": 1
  }
}
```

### 2. Get Task by ID
**GET** `/tasks/:id`

Retrieves a specific task by its ID.

**Example Request:**
```bash
curl -X GET "http://localhost:3000/tasks/1"
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the task management API",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

### 3. Create New Task
**POST** `/tasks`

Creates a new task.

**Request Body:**
```json
{
  "title": "New Task",
  "description": "Task description",
  "completed": false
}
```

**Required Fields:**
- `title`: String (non-empty, max 100 characters)
- `description`: String (non-empty, max 500 characters)

**Optional Fields:**
- `completed`: Boolean (default: false)

**Example Request:**
```bash
curl -X POST "http://localhost:3000/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Node.js",
    "description": "Study Express.js framework",
    "completed": false
  }'
```

**Example Response:**
```json
{
  "id": 2,
  "title": "Learn Node.js",
  "description": "Study Express.js framework",
  "completed": false,
  "createdAt": "2024-01-15T11:00:00.000Z"
}
```

### 4. Update Task
**PUT** `/tasks/:id`

Updates an existing task by ID.

**Request Body:**
```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
```

**Example Request:**
```bash
curl -X PUT "http://localhost:3000/tasks/1" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true
  }'
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:15:00.000Z"
}
```

### 5. Delete Task
**DELETE** `/tasks/:id`

Deletes a task by ID.

**Example Request:**
```bash
curl -X DELETE "http://localhost:3000/tasks/1"
```

**Example Response:**
```json
{
  "message": "Task deleted",
  "task": {
    "id": 1,
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:15:00.000Z"
  }
}
```

## HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## Error Responses

All error responses follow this format:
```json
{
  "error": "Error message description"
}
```

**Validation Error Example:**
```json
{
  "error": "Validation failed",
  "details": [
    "Title is required and must be a string",
    "Description cannot be empty"
  ]
}
```

## Data Structure

Each task has the following structure:
```json
{
  "id": 1,                    // Unique identifier (auto-generated)
  "title": "Task title",      // Required string (max 100 chars)
  "description": "Task description", // Required string (max 500 chars)
  "completed": false,         // Boolean (default: false)
  "createdAt": "2024-01-15T10:30:00.000Z", // Auto-generated timestamp
  "updatedAt": "2024-01-15T11:15:00.000Z"  // Auto-generated on update
}
```

## Validation Rules

- **Title**: Required, must be a non-empty string, maximum 100 characters
- **Description**: Required, must be a non-empty string, maximum 500 characters
- **Completed**: Optional boolean (defaults to false)
- **ID**: Must be a valid positive integer

## Project Structure

```
Backend/
├── server.js                    # Main server file
├── package.json                 # Project dependencies
├── Controller/
│   └── taskController.js        # Task business logic
└── Route/
    └── taskRouter.js            # Task routes
```

## Testing with Postman

1. **Create Task:**
   - Method: POST
   - URL: `http://localhost:3000/tasks`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "title": "Test Task",
     "description": "This is a test task"
   }
   ```

2. **Get All Tasks:**
   - Method: GET
   - URL: `http://localhost:3000/tasks`

3. **Get Task by ID:**
   - Method: GET
   - URL: `http://localhost:3000/tasks/1`

4. **Update Task:**
   - Method: PUT
   - URL: `http://localhost:3000/tasks/1`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "title": "Updated Test Task",
     "description": "This is an updated test task",
     "completed": true
   }
   ```

5. **Delete Task:**
   - Method: DELETE
   - URL: `http://localhost:3000/tasks/1`

## Notes

- The API uses in-memory storage (JavaScript array) to store tasks
- Data will be lost when the server restarts
- The API automatically generates unique IDs for new tasks
- Timestamps are automatically managed (createdAt, updatedAt)
- Pagination is implemented for the GET /tasks endpoint
- All endpoints include proper error handling
- The server runs on port 3000 by default 