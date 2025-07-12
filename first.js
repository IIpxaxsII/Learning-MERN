/*console.log("hello");

const PI = 3.14;
let name = paras;
var a = 10;
 

const product = {
     name: "Ball pen",
     rating:4,
     offer:5,
     price:270,
     isDeal: true


};

console.log(product);


 const profile = {
     name: "Shradha Khapra",
     followers: 569,
     following: 5,
     description: "Apna college",
     isfollowing: false


};

console.log(profile);

//          Arthimetic operators
            let a = 5;
            let b = 6;

            console.log("a + b:", a+b)
//stict comparison operator(===)
let a = 5;
let b = "5";
console.log(a===b);
console.log(a!==b);


let age = 12;
if(age > 18 ){
    console.log("eligible")
}else{
    console.log("not eligible")
}
//ternary op
let age = 12;
console.log(age > 18 ? "adult": "Not adult")

alert("Welcome!")


//prompt
let input = prompt("Enter a number: ");
if(input % 5 === 0 ){
    alert("Multiple of 5")
}else{
        alert("Not a Multiple of 5")
}

//for-of loops(strings and arrays)
str = "Paras Bindra"
for(let i of str){
    console.log(i)
}
   //for-in loop
  let student = {
    name : "rahul kumar",
    age: 12,
    cgpa: 7.8
  } 

  for(let key in student){
    console.log(key,":", (student[key]))
  }
    
  
 //practice ques
    let mynum = 0;
    var input = prompt("Guess a number between (1-10) : ");
     let i = 2;

while(input != mynum && i > 0){
    input = prompt("Wrong! Guess again. "+ i +" chance(s) left: ");
    
i--;

 }
if(input == mynum){
    alert("You guessed the number correctly!");
} else {
    alert("Your chances are exhausted.");
}
    

//strings
let str = "hello"
let len = str.length;
console.log(len);

//template literals
let a = 5;
let b = 10;

let output = `The value of a is ${a} and that of b is ${b} and there sum is ${a+b}`;
console.log(output)

//escape characters(\n,\t, )

//practice ques

let name = prompt("Enter your Full name: ");
let length  = name.length;
let username = `@${name}${length}`;
console.log(username);

let arr = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2]
i = 0;
while(i<18){
    console.log(arr[i])
    i++
}
    
   //practice ques
   let arr = [85,97,44,37,76,60]
   let sum = 0;
   let len = arr.length
   for(let i=0;i<len;i++){

        sum += arr[i];

   }
      
     console.log(len)

    console.log(sum)
    console.log(`Average is: ${(sum/len)}`)
    

    //ques
    let arr = [250,645,300,900,50]
    for(i in arr){
        let off = 0.1*(arr[i]);
        let newPrice = arr[i] - off;
        arr[i] = newPrice;
       
    }
   
        console.log(arr)
let arr = ["Bloomberg", "Microsoft", "Uber","Google", "IBM", "Netflix"]
//console.log(arr.splice(1)) //can use shift also
arr.splice(2,1,"Ola")
console.log(arr)
arr.push("Amazon")
console.log(arr)
FUNCTIONS

function myFunction(msg){
    console.log(msg)

}

myFunction("Love");

function mySum( a,b) {
    sum = a + b
    return sum;
 }
val = mySum(2,5)
console.log(val)

Arrow functions

const arrowSum = (a,b)=>{
    console.log(a+b)
}

arrowSum(2,2)

function vowels(msg){
    let count = 0;
    msg1 = msg.toLowerCase()
    for(j of msg1){
        if(j==="a"||j==="e"||j==="i"||j==='o'||j==='u'){
            count++
            
        
        }
    }
return count;
}


val = vowels("PARAS")
console.log(val)
//A callback function is function which is passed as an argument to another function
let arr = [1,2,3,4,5]
arr.forEach((val)=>{
    console.log(val*val)
})
    
let arr = [1,2,3,4,5,6,7,8,9,10,12]
let newArr = arr.filter((val)=>{
    return val%2===0
})

console.log(newArr)


//Dom manipulation
let elements = document.querySelector("h1")
console.dir(elements)

let elementsAll = document.querySelectorAll("h1")
console.dir(elements)

let heading = document.querySelector("h1")
console.dir(heading)

//practice ques
let newBtn = document.createElement("button")
console.log(newBtn)
newBtn.innerText = "Click me!"
newBtn.style.backgroundColor = "red"
newBtn.style.color = "white"
newBtn.style.fontSize = 
document.querySelector("body").prepend(newBtn)

//Events
let btn1 = document.querySelector("#btn1")
btn1.onclick = ()=>{
    console.log("Button was clicked!")

}

let btn2 = document.querySelector("#btn2")
btn2.ondblclick = ()=>{
    console.log("Button was double clicked!")
}
//Event  listeners
let btn1 = document.querySelector("#btn1")
btn1.onclick = ()=>{
    console.log("Button was clicked!")

}
btn1.addEventListener("click", ()=>{
    console.log("Function on click was run!")})

    btn1.addEventListener("click", ()=>{
    console.log("Event handler two was triggered!")})
        
let btn1 = document.querySelector("#screenColor")
    let currMode = "light";

btn1.addEventListener("click",() => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "grey"
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "bisque"
    }

})
    
const object = {
    fullName : "paras",
    marks : 94,
    printMarks: function ()  {
    console.log("marks: ",this.marks)

    }

}
object.printMarks()

class car{
    constructor(){
        console.log("called")
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}

let fortuner = new car()
console.log(fortuner.start())


//inheritance
class person{
    eat(){
        console.log("eating")
    }
     sleep(){
        console.log("sleeping")
     }
     dancing(){
        console.log("dancing")
     }
}
class adi extends person{

}
class riya extends person{}

let a1 =new adi()
let a2 =new adi()

let r1 = new riya()
let r2 = new riya()

a1.dancing()
a2.eat()
r1.sleep()
r2.dancing()

//asynchronous programming
console.log("1")
console.log("2")
console.log("3")

setTimeout(()=>{
    console.log(
        "hello"
    )
},5000)
console.log("4")

console.log("5")



//callback hell
function getData(dataId, getNextData){
    setTimeout(()=>{
    console.log("data: ", dataId)
    if(getNextData){
    getNextData()
    }else{
        console.log("excecution completed")
    }
},2000)

}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,)
        })
    })
})
    

//promises
let promise = getPromise =()=>{
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("I  am a promise")
   },5000)
    resolve("Success")
    //reject("some error")
})}

let promise2 = getPromise()
    promise2.then(()=>{
        console.log("success")})


//promise chaining
function asyncFun1(){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("data1")
        resolve("success") },4000) })
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("data2")
        resolve("success") },4000) })
}

console.log("fetching data1...")
asyncFun1().then((res)=>{
    console.log("fetching data 2...")
    asyncFun2().then((res)=>{})
    
})
        */
//async await
function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data: ",data)
            resolve("success")
        },1000)
    })
}

async function printData(){
    console.log("getting data...")
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
    await getData(6)
    await getData(7)
    await getData(8)

}
printData()