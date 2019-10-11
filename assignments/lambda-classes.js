// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
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
        console.log(`Today we are learning about ${subject}`)
    } 
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(array) {
        console.log(`${array}`)
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
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
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}