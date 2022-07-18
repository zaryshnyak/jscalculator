let a = '';
let b = '';
let sign = null;
function calculation(value) {
    if (sign !== null) {
        if (b === ''){
            sign = value;
            let h = document.getElementById('history').innerHTML;
            h = h.slice(0,h.length-1)+value;
            document.getElementById('history').innerHTML = h;
            return;
        }
        if (sign === '+') {
            a = (Number(a) + Number(b)).toString();
            // a = '' + a
        }
        if (sign === '-') {
            a = (Number(a) - Number(b)).toString();
        }
        if (sign === '*') {
            a = (Number(a) * Number(b)).toString();
        }
        if (sign === '/') {
            a = (Number(a) / Number(b)).toString();
        }
        b = '';
        display(a);
    }
    history(value);
    sign = value;
    // if ((event.srcElement.id == "+"
    //     || event.srcElement.id == "-"
    //     || event.srcElement.id == "*"
    //     || event.srcElement.id == "/"
    //     || event.srcElement.id == ".")
    //     && (n.slice(-1) == "+"
    //     || n.slice(-1) == "-"
    //     || n.slice(-1) == "*"
    //     || n.slice(-1) == "/"
    //     || n.slice(-1) == ".")){
    //     n = n.slice(0,-1) + event.srcElement.id;
    // }
    // else{
    //     n = n + event.srcElement.id;
    // }
    // document.getElementById('result').innerHTML=n;
    // console.log(n.slice(-1));
    // console.log(n);
}

function number(value){
    if (sign !== null){
        b += value;
        display(b);
    }
    else {
        a += value;
        display(a);
    }
    history(value);
}

function removeNumber(){
    if (sign !== null){
        b = b.slice(0,b.length-1);
        display(b);
    }
    else {
        a = a.slice(0,a.length-1);
        display(a);
    }
    let h =document.getElementById('history').innerHTML;
    if (parseInt(h[h.length-1]) || h[h.length-1] === '.' ){
        document.getElementById('history').innerHTML = h.slice(0,h.length-1);
    }
}

function display(value){
    if (value === ''){
        value = '0';
    }
    document.getElementById('result').innerHTML=value;
}

function history(value){
    document.getElementById('history').innerHTML+=value;
}

function result(){


    // for (let i = 0; i == n.length; i++){
    //     if (n[i] == "+"){
    //
    //     }
    //     else if (n[i] == "-"){
    //
    //     }
    //     else if (n[i] == "*"){
    //     }
    //     else if (n[i] == "/"){
    //     }
    // }
    // document.getElementById('result').innerHTML="123";
}
