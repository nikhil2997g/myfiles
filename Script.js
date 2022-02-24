//"use strict"
function message(){
    alert('Hello World, Nikhil here');
}

var x=10;
console.log('x data type is: ' + typeof(x));

//variables are dynamic
x='hello';
console.log('x data type is: ' + typeof(x));
x=true;
console.log('x data type is: ' + typeof(x));

var name1 ="hello nikhil";
// console.log(name1);
// var name1;

//scope of variables
//1.Global scope variable
function fun1(){
    console.log("accessing with function: " + name1);
}
fun1();
console.log("accessing globally: " + name1);

//2.local or private scope
function fun2(){
    console.log("accessing globally: " + x);
    var z = 100;
}
fun2();
//console.log(z);

//use strict
function fun3(){
    a = 10;
    console.log("access local variable without var: " + a);
}
fun3();
console.log("access local varable outside as we have not assigned var: " + a);

//while loop
// var counter = 0;
// while(counter<10){
//     console.log('number: ' + counter);
//     counter++;
// }

//do while loop
// var i=0;
// do{
//     console.log(i + " ");
//     i++;
// }while(i<5);

//for loop
// for(var i=0;i<5;i++){
//     for(var j=0;j<=i;j++){
//         document.write(i);
//     }
//     document.write("<br>");
// }

//for in loop
// var str = "welcome"
// for(var w in str){
//     console.log(str[w]);
// }

// var arr = [10,20,30,40,50];
// for(var a in arr){
//     console.log(arr[a]);
// }

//prompt("please enter your name");

//function with return value
function add1(x,y){
    z=x+y;
    return z;
}

var r = add1(10,20);
document.write(r);

//Invoking function before its declaration (with hoisting)
dog('bark');
function dog(sound){
  console.log(sound);
}

//Recursive function
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return factorial(n - 1) * n;            
}   
console.log(factorial(5));

//popup boxes
//confirmation box
// var a = confirm("want to proceed?");
// document.write("you have clicked on: " + a);

//prompt box
// var b = prompt("Enter your Name: ");

//array methods
console.log("Array Methods");
let arr = ["harry",10,20,"hello"];
console.log(arr.indexOf(10));
console.log(arr.length);
console.log(arr.push("Great"));
console.log(arr);
console.log(arr.pop());
console.log(arr.shift());


//String methods
console.log("String Methods");
let mystr = "Harry is a good boy good good";
console.log(mystr.length);
console.log(mystr.indexOf("good"));
console.log(mystr.lastIndexOf("good"));
console.log(mystr.slice(0,3));
d = mystr.replace("Harry", "Rahul");
console.log(d = d.replace("good","bad"));
console.log(d,mystr);

//Date methods
console.log("Date Methods");
let mydate = new Date();
console.log(mydate);
console.log(mydate.getDate());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getTimezoneOffset());

//DOM Manipulation
//for adding text to html tag with id
document.getElementById("02").innerHTML = "Hello world";

//for setting the attribute value=click for input button with id and tag name
let elem = document.getElementById("01").getElementsByTagName("input")[0].setAttribute("value","Click");

//for creating element
let elem1 = document.getElementsByTagName("div")[1];
console.log(elem1);
createdelement = document.createElement("h1");
createdelement.innerHTML = "Created New Element";
createdelement.id = "heading";
elem1.appendChild(createdelement);

//for adding eventlistener instead of using events
var but = document.getElementById("btn1");
//console.log(but);
but.addEventListener("click", () => {
    //alert("hello event listener");
    var list1 = document.getElementsByClassName("litem");
    console.log(list1);

})

//for selecting input elements
var inp = document.querySelector('input[type="email"]');
inp.setAttribute("placeholder","Enter your Email");
console.log(inp);