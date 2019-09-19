class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user1 = new User( 'Ivan' );

// let message1: number = 777;

const array: Array<User> = [];

array.push(user1);

console.log(array);