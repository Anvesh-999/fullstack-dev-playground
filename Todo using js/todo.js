let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
 
btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("del");
    item.appendChild(delbtn);
    ul.append(item);
});

ul.addEventListener("click" ,function(event){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");
})