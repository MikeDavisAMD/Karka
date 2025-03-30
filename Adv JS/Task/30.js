const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' }
];
const findOverdueTask = ((data,date) => data.find(data => data > date))
console.log(findOverdueTask(tasks,'2023-08-08'))