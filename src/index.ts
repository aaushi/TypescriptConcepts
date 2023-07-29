console.log("hello");

let a: number = 21;
if (a > 20) a += 10;

console.log(a);
//tuple**********************************
let userTuple: [number, string] = [1, "aaushi"];
console.log(userTuple);
//enum************************************
enum direction {
  north = 10,
  east,
  south,
  west,
}
console.log(direction.north);
console.log(direction.west);

function sum(a: number, b: number): number {
  if (a > 10) return a + b;
  return a + b + 2;
}
//type *****object*************************************
type Employee = {
  readonly id: number;
  name: string;
  lastname?: string;
};
let employee: Employee = { id: 112, name: "aaushi" };
//console.log(employee);

let manager: { readonly id: number; name: string; print: () => void } = {
  id: 112,
  name: "aaushi",
  print: () => {
    console.log("hi");
  },
};
manager.print();

//union*************************************

function calculateWeight(weight:number|string){
    if(typeof weight==="number")
        return weight*10;
    else
        return parseInt(weight)*10;
}

console.log(calculateWeight(10))
console.log(calculateWeight('20'))

//intersection type*************************

type draggable={
    drag:()=>void
}

type resizable = {
  resize: () => void;
};

type uiWidget=draggable & resizable;

let texBox:uiWidget={
    drag:()=>{console.log("dragging")},
    resize:()=>{console.log("resizing")}
}
texBox.drag();
texBox.resize();