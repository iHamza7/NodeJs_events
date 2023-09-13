const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const MyEmitter = new Sales();

MyEmitter.on("NewSale", () => {
  console.log("this is new sale");
});
MyEmitter.on("NewSale", () => {
  console.log("Customer Name: hamza khan");
});

MyEmitter.on("NewSale", (Number) => {
  console.log(`there are ${Number} items in the Cart`);
});

MyEmitter.emit("NewSale", 9);

/////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received!");
  console.log(req.url);
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("another reques received 😍");
});

server.on("close", () => {
  console.log("closed ");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting request.......");
});
