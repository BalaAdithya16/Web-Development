function Adj(aj1,aj2,aj3) {
    let ran=Math.random();
    if(ran>0.7){
        return aj1;
    }
    else if(ran<0.7 && ran>0.4){
        return aj2;
    }
    else{
        return aj3;
    }
}

function shop_name(sn1,sn2,sn3) {
    let ran=Math.random();
    if(ran>0.7){
        return sn1;
    }
    else if(ran<0.7 && ran>0.4){
        return sn2;
    }
    else{
        return sn3;
    }
}

function Another_name(an1,an2,an3) {
    let ran=Math.random();
    if(ran>0.7){
        return an1;
    }
    else if(ran<0.7 && ran>0.4){
        return an2;
    }
    else{
        return an3;
    }
}
let a=Adj("Crazy","Amazing","fire");
let b=shop_name("Engine","Foods","Garments");
let c=Another_name("Bros","Limited","Hub");
console.log(`${a} ${b} ${c}`);
console.log(a+" "+b+" "+c);
