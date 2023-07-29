"use strict";
console.log("hello");
let a = 21;
if (a > 20)
    a += 10;
console.log(a);
//tuple**********************************
let userTuple = [1, "aaushi"];
console.log(userTuple);
//enum************************************
var direction;
(function (direction) {
    direction[direction["north"] = 10] = "north";
    direction[direction["east"] = 11] = "east";
    direction[direction["south"] = 12] = "south";
    direction[direction["west"] = 13] = "west";
})(direction || (direction = {}));
console.log(direction.north);
console.log(direction.west);
function sum(a, b) {
    if (a > 10)
        return a + b;
    return a + b + 2;
}
let employee = { id: 112, name: "aaushi" };
//console.log(employee);
let manager = {
    id: 112,
    name: "aaushi",
    print: () => {
        console.log("hi");
    },
};
manager.print();
//union*************************************
function calculateWeight(weight) {
    if (typeof weight === "number")
        return weight * 10;
    else
        return parseInt(weight) * 10;
}
console.log(calculateWeight(10));
console.log(calculateWeight('20'));
let texBox = {
    drag: () => { console.log("dragging"); },
    resize: () => { console.log("resizing"); }
};
texBox.drag();
texBox.resize();
//# sourceMappingURL=index.js.map