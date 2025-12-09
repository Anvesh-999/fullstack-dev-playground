function genTicket(n) {
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    let total=0;
    for(let i of arr){
        total+=i;
    }
    return total;
}

export { genTicket ,sum};