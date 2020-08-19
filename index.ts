// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Playground</h1>`;

const enum Shape {
  Circle,
  Square
}

// //console.log(Shape[0]);
// function add(num1:number, num2:number):number{
//   return num1 + num2;
// }

// let mySum = function(a:number,b:number):number{
//   if(typeof a == 'string')
//     a= parseInt(a);
//   if(typeof b == 'string')
//     b= parseInt(b);
//   return a+b;
// }
// console.log(mySum(1,'6'));
let func = <T>(arr : T[])=>{
  console.log(arr);
}

func([1,3,5,6,'a']);

