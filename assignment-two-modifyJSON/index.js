// import student array 
const students = require('./arrayStudents');

console.log(students);

// add new age property to index 0 Luciana Odling
students[0].age = 23;

// check age property across students array 
for (let i=0; i<students.length; i++) {
    console.log(`Object ${i} has an age property : ${Object.hasOwn(students[i], 'age')}`)
}