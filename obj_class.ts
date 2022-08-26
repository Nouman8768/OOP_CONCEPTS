class Person {
  name: string;
  age: number;
  gender: string;
  married: boolean;
  getinfo() {
    console.log("My name is " + this.name);
    console.log("My age is " + this.age);
    console.log("My gender is " + this.gender);
    console.log("Marriage Status is " + this.married);
  }
}
let zeeshan = new Person();
zeeshan.name = "Zeeshan Iqbal";
zeeshan.age = 25;
zeeshan.gender = "Male";
zeeshan.married = false;
zeeshan.getinfo();
