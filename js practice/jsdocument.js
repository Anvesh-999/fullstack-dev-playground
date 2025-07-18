let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Click me!";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");


let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("purple");

let p=document.createElement("p");
h1.innerHTML="our<b> page to </b>Practice";
// document.body.append(p);
document.querySelector("body").append(h1);