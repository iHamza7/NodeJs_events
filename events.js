const EventEmitter = require("events");

const MyEmitter = new EventEmitter();

MyEmitter.on("NewSale", () => {
  console.log("this is new sale");
});
MyEmitter.on("NewSale", () => {
  console.log("Customer Name: ham khan");
});

MyEmitter.emit("NewSale");
