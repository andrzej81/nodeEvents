// Import events module
var events = require("events");
const { emit } = require("process");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
  console.log("listner1 executed.");
};

// listener #2
var listner2 = function listner2() {
  console.log("listner2 executed.");
};

// Bind the connection event with the listner1 function
eventEmitter.addListener("connection", listner1);

// Bind the connection event with the listner2 function
eventEmitter.on("connection", listner2);

var eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
eventEmitter.emit("connection");

// Remove the binding of listner1 function
eventEmitter.removeListener("connection", listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit("connection");
eventEmitter.emit("connection");

console.log(
  "usuniecie wszystkich listenerow przypisanych do emitera connection"
);
// Bind the connection event with the listner1 function
eventEmitter.removeAllListeners("connection");

eventEmitter.emit("connection");

console.log("Program Ended.");

const myEmitter = new events.EventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

myEmitter.once("eventOnce", () => console.log("eventOnce once fired"));

myEmitter.on("eventOne", c1); // Register for eventOne
myEmitter.on("eventOne", c2); // Register for eventOne

myEmitter.emit("eventOne");
myEmitter.emit("eventOnce");
myEmitter.emit("eventOnce");
console.log("kolejny raz uruchomienie");
myEmitter.emit("eventOne");
myEmitter.emit("eventOnce");

//create another event
eventEmitter.on("event2", function (msg) {
  console.log(msg);
});

// Fire the connection event
eventEmitter.emit("event2", "Wiadomosc do uzytkownika");
