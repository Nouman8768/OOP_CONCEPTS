class BookAirlineTickets {
  ticketBooking() {
    console.log("You can Book Seats Here");
  }
  ticketStatus() {
    console.log("You have 7 seats in you reservation");
  }
}
class Qatar_Airways extends BookAirlineTickets {
  ticketBooking(): void {
    console.log("You can Book QatarAirLines Seats Here");
  }
}
class Etihad_Airways extends BookAirlineTickets {
  ticketBooking(): void {
    console.log("You can Book Etihad Airways Seats Here");
  }
}
class Emirates extends BookAirlineTickets {
  ticketBooking(): void {
    console.log("You can Book Emirates Seats Here");
  }
  ticketStatus() {
    console.log(
      "You have 2 First Class Emirates Airline seats in you reservation"
    );
  }
}
class Qantas extends BookAirlineTickets {
  ticketBooking(): void {
    console.log("You can Book Qantas Airline Seats Here");
  }
}
console.log("");
console.log("");

let qantas_ticket: BookAirlineTickets = new Qantas();
qantas_ticket.ticketBooking();
console.log("");

let emirates_ticket: BookAirlineTickets = new Emirates();
emirates_ticket.ticketStatus();

console.log("");
console.log("");
