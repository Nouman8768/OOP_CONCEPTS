class MobileBalanceInfo {
  information(info: any): any {
    return info;
  }
}

var button1 = new MobileBalanceInfo();
console.log("Press 1 for Current Balance");
console.log("Your curent Blance is : " + button1.information(300));
console.log("Press 2 for Balance Validation");
console.log(
  "Your Blance is validate till : " + button1.information("01 - 09 - 2022")
);
console.log("Press 3 to check if you have any Internet package subscribed");
console.log(
  "Your Current Internet Subscribed Package is: " + button1.information(false)
);
console.log("");
console.log("");
console.log("");
console.log("");
console.log("ANOTHER EXAMPLE");

class Lunch {
  order(
    fastfood?: string | boolean,
    desifood?: string | boolean,
    softdrink?: string | boolean,
    water?: boolean
  ): string | boolean {
    return (
      "FastFood:" +
      `${fastfood}` +
      " DesiFood:" +
      `${desifood}` +
      " SoftDrink:" +
      `${softdrink}` +
      " Water:" +
      `${water}`
    );
  }
}
var nouman = new Lunch();
console.log(
  "Nouman's Order is: " + nouman.order(false, "ChickenTandori", true, false)
);

var khubyb = new Lunch();
console.log(
  "Khubyb's Order is: " + khubyb.order("PizzaLarge", false, false, true)
);
