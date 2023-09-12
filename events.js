const EventEmitter = require("events");

const MyEmitter = new EventEmitter();

MyEmitter.on("NewSale", () => {
  console.log("this is new sale");
});
MyEmitter.on("NewSale", () => {
  console.log("Customer Name: ha khan");
});

MyEmitter.emit("NewSale");
