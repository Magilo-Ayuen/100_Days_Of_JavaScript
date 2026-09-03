//You have an array of student {name and gpa} objects. You want to find students that have passed with 3.5 and above GPA, and get a list of just their names.

const students = [
    {name: "Jon", gpa: 2.5},
    {name: "Agnes", gpa: 3.8},
    {name: "Rhoda", gpa: 4.0},
    {name: "Frank", gpa: 2.9},
    {name: "Steve", gpa: 3.7},
    {name: "Ron", gpa: 3.1},
    {name: "Lee", gpa: 4.2},
];

// Applications of arrow function

const passedStudents = students.filter(item => item.gpa >3.5).map(item => item.name);
console.log(passedStudents);
