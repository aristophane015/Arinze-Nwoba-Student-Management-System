// Class for person details
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    // Method to show basic details
    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
    }
}

// Class for student, extends Person class
class Student extends Person {
    constructor(name, id, grades) {
        super(name, id); // Inherit name and id from Person class
        this.grades = grades;
    }

    // Method to show student details
    showStudentDetails() {
        this.showDetails();
        console.log(`Grades: ${this.grades.join(", ")}`);
    }

    // Method to calculate average grade
    calculateAverage() {
        if (this.grades.length === 0) {
            console.log("No grades to calculate.");
            return 0;
        }

        let total = this.grades.reduce((acc, grade) => acc + grade, 0);
        let average = total / this.grades.length;
        console.log(`Average Grade: ${average.toFixed(2)}`);
        return average;
    }

    // Overriding showDetails to include average grade
    showDetails() {
        super.showDetails();
        this.calculateAverage(); // Show average grade too
    }
}

// Class to manage the student records
class StudentManagement {
    constructor() {
        this.students = [];
    }

    // Method to add a new student
    addStudent(name, id, grades) {
        const student = new Student(name, id, grades);
        this.students.push(student);
        console.log(`Added student: ${name}`);
    }

    // Method to show all students
    showAllStudents() {
        if (this.students.length === 0) {
            console.log("No students to show.");
            return;
        }

        this.students.forEach((student, index) => {
            console.log(`Student ${index + 1}:`);
            student.showDetails();
            console.log("---");
        });
    }

    // Method to find a student by ID
    findStudent(id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            student.showDetails();
        } else {
            console.log(`No student found with ID: ${id}`);
        }
    }
}

// Example usage of the system
const system = new StudentManagement();

// Adding students
system.addStudent("arinze nwoba", "S101", [85, 90, 88]);
system.addStudent("chinenye nwoba", "S102", [92, 94, 89]);

// Show all students
system.showAllStudents();

// Find a student by ID
system.findStudent("S101");
system.findStudent("S999"); // Try finding a student that doesn't exist