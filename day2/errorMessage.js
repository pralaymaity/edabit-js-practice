// Error Messages
// Create a function that takes a number as an argument and returns the appropriate error message.
// You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"

let num = 2;
function errorMessage(num) {
  let search = num - 1;

  let store = [
    { e1: "Check the fan: e1" },
    { e2: "Emergency stop: e2" },
    { e3: "Pump Error: e3" },
    { e4: "c: e4" },
    { e5: "Temperature Sensor Error: e5" },
  ];

  return store[search];
}
console.log(errorMessage(num));
