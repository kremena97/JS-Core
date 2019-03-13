function getPerson() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let firstPerson = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let secondPerson = new Person('SoftUni');
    let thirdPerson = new Person('Stephan', 'Nikolov', 25);
    let fourthPerson = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    return [firstPerson, secondPerson, thirdPerson, fourthPerson];
}