// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.subject = personAttrs.subject;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs)
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`)
    } 
    grade(student, subject) {
        console.log(`${this.student} receives a perfect score on ${this.subject}`)
    }
    changeGrade(student) {
        let newGrade = Math.floor(Math.random() * 50 + student.grade);
        console.log(`${student.name}'s grade is now ${newGrade}`);
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects (array) {
        console.log(`${array}`)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${this.subject}`)
    }
    graduation() {
        if (this.grade >= 70) {
        console.log(`${this.name} graduates with a grade of ${this.grade}!`)
        } else {
            console.log(`Better luck next time ${this.name}!`)
        }
    }
}

class TeamLead extends Instructor {
    constructor(tLAttrs) {
        super(tLAttrs)
        this.gradClassName = tLAttrs.gradClassName;
        this.favInstructor = tLAttrs.favInstructor;
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`)
    }
    debugCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${student.subject}`)
    }
}

const david = new Instructor({
    name: "David",
    age: 27,
    location: "Jacksonville",
    specialty: "Front-end",
    favLanguage: "Javascript",
    catchPhrase: "If it weren't for you meddling kids!"
});

const katherine = new Instructor({
    name: "Katherine",
    age: 32,
    location: "Denver",
    specialty: "Back-end",
    favLanguage: "Java",
    catchPhrase: "To the Batmobile!"
});

const kyle = new Student({
    name: "Kyle",
    age: 23,
    location: "Fort Stockton",
    previousBackground: "HTML/CSS",
    className: "WepPT11",
    favSubjects: ["Javascript!", " React", " HTML", " CSS"],
    grade: 50,
    subject: "javascript"
})

const george = new Student({
    name: "George",
    age: 44,
    location: "Washington",
    previousBackground: "Python",
    className: "WepPT11",
    favSubjects: ["React", "Javascript"],
    grade: 50,
    subject: "javascript"
});

kyle.listsSubjects(kyle.favSubjects);
george.PRAssignment("javascript");
kyle.sprintChallenge("js1")

const james = new TeamLead({
    name: "James",
    age: 30,
    location: "Nashville",
    gradClassName: "Web8",
    favInstructor: "Joseph"
});

const kristen = new TeamLead({
    name: "Kristen",
    age: 25,
    location: "Austin",
    gradClassName: "Web12",
    favInstructor: "Mary"
});

james.standUp("WebPT11")
kristen.debugCode(kyle)
david.changeGrade(kyle);
kyle.graduation();