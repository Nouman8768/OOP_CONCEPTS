interface A {
  name: string;
}
interface B {
  age: number;
}
class C implements A, B {
  age: number;
  name: string;
}
class GrandFather {}
class Father {}
class Derived extends GrandFather {}
class Child implements GrandFather, Father {}

class X {}
class y extends X {}
class z extends X {}
