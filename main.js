// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(first, last) {
    const user = {
        firstName: first,
        lastName: last
    };
    return user;
}

function setAge (user, age) {
    user.age = age;
    return user;
}

function incrementAge (user) {
    user.age += 1;
    return user;
}

function fixCar (car) {
    car.needsMaitenance = false;
    return car;
}

function addGrades (student, newGrades) {
    for (let i = 0; i < newGrades.length; i++) {
        const newGrade = newGrades[i];
        student.grades.push(newGrade);
    }
    return student;
}

function getDataType (object, key) {
    return typeof object[key];
}

function addTodo (todos, newTodo) {
    
}





// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
