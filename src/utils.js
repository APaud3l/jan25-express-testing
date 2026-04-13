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
    return { id: 1, title: taskData.title };
}

module.exports = { getTasks, addTask };