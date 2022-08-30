class NikeProducts {
  customise() {
    console.log("You can Customise All Nike Products Before Purcahsing");
  }
}
class Sneakers extends NikeProducts {
  customise(): void {
    console.log("You can Customise Your Nike Sneakers Here");
  }
}
class SportBags extends NikeProducts {
  customise(): void {
    console.log("You can Customise Your Nike Sneakers Here");
  }
}
class FootBall_Shorts extends NikeProducts {
  customise(): void {
    console.log("You can Customise Your SportBags Sneakers Here");
  }
}
class Shoes extends NikeProducts {
  customise(): void {
    console.log("You can Customise Your Nike Shoes Here");
  }
}
class Shirts extends NikeProducts {
  customise(): void {
    console.log("You can Customise Your Nike Shirts Here");
  }
}
console.log("");
console.log("");
let shirts: NikeProducts = new Shirts();
shirts.customise();
console.log("");
let sport_Bags: NikeProducts = new SportBags();
sport_Bags.customise();
console.log("");
console.log("");
