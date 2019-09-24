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

// class Human {
//   public name: string;
//   public age: number;

//   constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//   }

//   public say(): void {
//       console.log(`My name ${this.name}`);
//   }
// }

// class Computer {
//   constructor(public model: string) {}

//   public game(): void {
//     console.log('game on');
//   }
// }

// class User extends Human {
//   public computer: Computer;

//   constructor(
//     name: string, 
//     age: number, 
//     computer: Computer
//     ) {
//     super(name, age);
//     this.computer = computer;
//   }

//   public say(): void {
//     super.say();
//     console.log('my method');
//   }

//   public play(): void {
//     console.log('Im play right now');
//     this.computer.game();
//   }
// }

// const comp1 = new Computer('pent');
// const user1 = new User('Oleg', 25, comp1);
// user1.say();
// console.log(user1);



/* PROMISES */

// let promise = new Promise();