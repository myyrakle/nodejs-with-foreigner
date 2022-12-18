const ffi = require("ffi");
const Struct = require("ref-struct");

const GoString = Struct({
  p: "string",
  n: "longlong",
});

const goffi = ffi.Library("./libgoffi.so", {
  Add: ["longlong", ["longlong", "longlong"]],
  Sub: ["longlong", ["longlong", "longlong"]],
  Mul: ["longlong", ["longlong", "longlong"]],
  Div: ["longlong", ["longlong", "longlong"]],
  PrintToConsole: ["void", [GoString]],
});

console.log("Add(12, 99) = ", goffi.Add(12, 99));
console.log("Sub(1, 555) = ", goffi.Sub(1, 555));

str = new GoString();
str["p"] = "Hello Node!";
str["n"] = 11;
goffi.PrintToConsole(str);
