// function showMessage(message: string): void;
// function showMessage(message: number): void;
// function showMessage(message: any) {
//   if (typeof message === 'number') {
//     switch (message) {
//       case 1: {
//         console.log('hello world');
//       } break;
//       case 2: {
//         console.log('Привет мир!');
//       } break;
//     }
//   } else if (typeof message === 'string') {
//     console.log('message');
//   }
// }


// showMessage(1);
// showMessage(2);
// showMessage('test');

class Employee {
  public name: string;
  position: string;
  private company: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
    this.company = "UTU";
  }

  printToConsole() {
    console.log(`Employee ${this.name}, position - ${this.position}, company - ${this.company}`);
  }
}

let empl: Employee = new Employee("Ivan", "Developer");
empl.name = "John";
empl.position = "Tester";

empl.printToConsole();