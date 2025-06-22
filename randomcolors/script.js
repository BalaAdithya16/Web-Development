// let elems=document.getElementsByClassName("box")
// elems[1].style.color="red"
let elms=document.querySelectorAll(".box")
elms.forEach(n =>{
    let a=Math.random();
    if(a<0.2){
        n.style.color="blue";
        n.style.backgroundColor="red";
    }
    else if (a>0.2 && a<0.4) {
        n.style.color="yellow";
        n.style.backgroundColor="blue";
    }
    else if(a>0.4 && a<0.6){
    n.style.color="red";
        n.style.backgroundColor="yellow";
    }
    else if(a>0.6 && a<0.8){
        n.style.color="purple";
        n.style.backgroundColor="green";
    } 
    else {
        n.style.color="green";
        n.style.backgroundColor="purple";
    }
    
});