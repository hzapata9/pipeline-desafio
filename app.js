/* eslint-disable no-undef */
const express = require('express');

const app = express();

app.use(express.json());

let tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API is running on port ${PORT}`));

// eslint-disable-next-line no-undef
module.exports = app;