"use strict";
let id = 10;
let firstName = "Connor";
let isGinger = true;
let x = "Hello";
// x = true;
let age;
// age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "test", false];
//tuple array
let employee;
employee = [
    [1, "Steve"],
    [2, "Brad"],
    [3, "John"],
];
//Union
let pid;
// pid = 22 || pid = "22"
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right);
// console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right);
// Objects
// type User = {
//   id: number;
//   name: string;
// };
// const user: User = {
//   id: 1,
//   name: "Jill",
// };
// OR
// const user: {
// id: number;
// name: string;
// } = {
// id: 1,
// name: "Jill",
// };
// Type  Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(msg) {
    console.log(msg);
}
const user1 = {
    id: 1,
    name: "Jill",
    secret: 1234,
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered with id: ${this.id}`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
// console.log(brad.register());
//Sub classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //extending from person class
        this.position = position;
    }
}
const emp = new Employee(3, "Sean", "Manager");
console.log(emp.register());
