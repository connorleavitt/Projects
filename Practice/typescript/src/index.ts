let id: number = 10;
let firstName: string = "Connor";
let isGinger: Boolean = true;

let x: any = "Hello";
// x = true;

let age: number;
// age = 30;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "test", false];

//tuple array
let employee: [number, string][];

employee = [
  [1, "Steve"],
  [2, "Brad"],
  [3, "John"],
];

//Union
let pid: string | number;
// pid = 22 || pid = "22"

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

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
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(msg: string | number): void {
  console.log(msg);
}

// log("hello");
// log(12);
// log(true);

// Interface (should use for objects)
interface UserInterface {
  id: number;
  name: string;
  age?: number; //optional with "?"
  readonly secret: number; //read only, can't assign new value
}
const user1: UserInterface = {
  id: 1,
  name: "Jill",
  secret: 1234,
};

// user1.secret = 12345; would error out

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// console.log(add(3, 4), sub(5, 2));
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); //extending from person class
    this.position = position;
  }
}

const emp = new Employee(3, "Sean", "Manager");

// console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["bob", "sally", "dan"]);

// numArray.push("Hello");
// strArray.push(1);

console.log(numArray, strArray);
