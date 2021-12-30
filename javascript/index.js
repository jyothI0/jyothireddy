" use Strict"
// var nam= null;
//  console.log(nam)
//   var age=26;
//   console.log(typeof(nam))
//   if(age>18) {
//       var nam= "sai";
//       console.log(nam)
//   }
//   console.log(nam)
// let student= {
//     name:"jyoo",
//     id:"20121a1220",
//     branch:"IT",
//     phno:9785647
// }
// console.log(student.name)
// alert("completed") 
// let num1=prompt("enter num")
// confirm("are u want to exi ?") 

//console

// console.log(" welcome")
// console.info("to java script")
// console.warn("check once")
// console.error("there is an")

//spread operator

// let marks=[1,11,21,31,41,51]
// let marks1=[5,6,7,9,45]
// let results=[23,45,marks]
// let final=[...marks,...marks1]
// console.log(results)
// console.log(final)

//Rest parameter

// function addition (x,y,...reData) {
//     console.log(x,y)
//     console.log(reData)
// }
// console.log(addition(23,78,786,4532,89765,8765))

// Destructing of arrays

let em =["jyothi"," harshi ","chamu"]
let n1=em[0]
 n2=em[1]
console.log(n1)
console.log(n2)
let [ shyam,sai,...data]=em

console.log(shyam)
console.log(data)

// objects

// let student= {
//         name:"jyoo",
//         id:"20121a1220",
//         branch:"IT",
//        phno:9785647
//     }

//     let {name,...remData}=student
//     console.log(name)
//     console.log(remData)