class Laptop {
  accessories(price) {
    console.log(
      "DELL 4 GB RAM 500 GB HARD 720P SCREEN RESOLUTION AND THE PRICE IS:" +
        price +
        " RS Only"
    );
    return price;
  }
}
class Business extends Laptop {
  accessories(price) {
    console.log(
      "HP PAVILION 8 GB RAM 500 GB HARD 2565GB SSD AND THE PRICE IS:" +
        price +
        " RS Only"
    );
    return price;
  }
}
class Gaming extends Laptop {
  accessories(price) {
    console.log(
      "AlienWare 32 GB RAM 2TB HARD 512 GB SSD NVIDIA RTX 3090 24GB AND THE PRICE IS:" +
        price +
        " RS Only"
    );
    return price;
  }
}
console.log("SIMPLE LAPTOP");
let dell = new Laptop();
dell.accessories(20000);
console.log("BUSINESS LAPTOP");
let hp = new Business();
hp.accessories(60000);
console.log("GAMING LAPTOP");
let alien = new Gaming();
alien.accessories(3200000);
