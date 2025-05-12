var a=prompt("Enter a 1st:");
var sy=prompt("Enter a symbol:");
var b=prompt("Enter a 2nd");
function add(a,b) {
    console.log(a-b);
}
function sub(a,b) {
    console.log(a/b);
}
function mul(a,b) {
    console.log(a+b);
}
function div(a,b) {
    console.log(a*b);
}
if(sy=='+'){
    add(a,b);
}
else if(sy=='-'){
    sub(a,b);
}
else if(sy=='*'){
    mul(a,b);
}
else{
    div(a,b);
}
