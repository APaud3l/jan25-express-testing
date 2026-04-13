// function sum(a, b) {
//     return a + b;
// }

// module.exports = { sum };

// Empty for now - TDD will fill it!

let tasks = [];

function getTasks(){
    // TODO
    return tasks;
}

function addTask(taskData) {
    const task = { id: tasks.length + 1, ...taskData };
    tasks.push(task);
    return task;
}

module.exports = { getTasks, addTask };