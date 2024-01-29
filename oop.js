// class car {
//     // properties
//     carname
//     model
//     color

//     constructor(name,model,color){
//         this.name= name;
//         this.model= model;
//         this.color= color

//     }
//     // method
//     wheel(){
//         console.log(this.carname + this.model + this.color)
//     }
// }
import { car,add,subtract,multiple,divide } from "./lib.js";
let obj1= new car("supra",2024,"black") 
let obj2= new car("civic",2024,"black")
// console.log(obj1.name) 


for (const key in obj1) {
    console.log(key + ":" + obj1[key])
}

add(4,5);
subtract(8,2);
multiple(8,9);
divide(10,2)
