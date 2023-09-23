class Person {
  _firstName = "";
  _lastName = "";
  _age = 0;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string") {
      this._firstName = newFirstName;
    } else {
      this._firstName = "No valid name";
    }
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(newlastName) {
    if (typeof newlastName === "string") {
      this._lastName = newlastName;
    } else {
      this._lastName = "No valid last name";
    }
  }
  get lastName() {
    return this._lastName;
  }
  set age(newVal) {
    if (newVal < 0) {
      this._age = 1;
    } else if (newVal > 110) {
      this._age = 110;
    } else {
      this._age = newVal;
    }
  }
  get age() {
    return this._age;
  }
  get fullName() {
    return (
      "I am " +
      this.firstName +
      " " +
      this.lastName +
      " and I'm " +
      this.age +
      " years old"
    );
  }
}
const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
