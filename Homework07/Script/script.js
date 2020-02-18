// Exercise 1

// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method

// Create a Student constructor function that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects


function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// function Student(academyName, studentId, firstName, lastName, age) {
//     Object.setPrototypeOf(this, new Person(firstName, lastName, age))
//     this.academyName = academyName;
//     this.studentId = studentId;

//     this.study = function() {
//         console.log(` The student ${this.firstName} is studying in the ${this.academyName}`);
//     }
// }

function Student(academyName, studentId, person) {
    Object.setPrototypeOf(this, person)
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function() {
        console.log(` The student ${this.firstName} is studying in the ${this.academyName}`);
    }
}

let studentOne = new Student(`SEDC`, 12345, new Person(`Bojan`, `Dameski`, 32));
studentOne.getFullName();
studentOne.study();
console.log(studentOne);


let studentTwo = new Student(`SEDC`, 333, new Person(`Lautaro`, `Martinez`, 21));
studentTwo.getFullName();
studentTwo.study();
console.log(studentTwo);




// Exercise 2


// Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!
// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy


studentOne.__proto__.getAcademyName = function(student) {
    return student.academyName;

}
// let person1 = new Person(`Bojan`, `Damaeski`, 32);
console.log(studentOne.getAcademyName(studentOne));



function DesignStudent(isStudentOfTheMonth, student) {
Object.setPrototypeOf(this, student)
this.student = isStudentOfTheMonth;

this.attendAdobeExam = function() {
    console.log(` The student ${this.firstName} is doing an adobe exam!`)
}
}

let student1 = new DesignStudent(true, new Student(`SEDC`, 3333, new Person(`Nenad`, `Popovski`, 31)));
student1.attendAdobeExam();


function CodeStudent(hasIndividualProject, hasGroupProject, student) {
Object.setPrototypeOf(this, student)
this.indiviualProject = hasIndividualProject;
this.groupProject = hasGroupProject

this.doProjectType = function() {
        return `${this.indiviualProject ? `hasIndividualProject` : `hasGroupProject` }`;
}
}
let student2 = new CodeStudent(true, false, new Student(`SEDC`, 123, new Person(`Martin`, `Aleksovski`, 31)));
student2.doProjectType();



function NetworkStudent(academyPart, student) {
Object.setPrototypeOf(this, student)
this.academyPart = academyPart;

this.attendCiscoExam = function() {
    console.log(` The student ${this.firstName} is doing an cisco exam!`);
}
}

let student3 = new NetworkStudent(2,new Student( `SEDC`, 23232, new Person(`Darko`, `Nikolic`, 31)));
student3.attendCiscoExam();

