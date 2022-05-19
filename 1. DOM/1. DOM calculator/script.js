function add(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let result=parseInt(num1) + parseInt(num2); 
    document.getElementById('span').innerHTML=result;
}

function sub(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let result=parseInt(num1) - parseInt(num2);
    document.getElementById('span').innerHTML=result;
}

let mul=()=>{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let result= parseInt(num1) * parseInt(num2);
    document.getElementById('span').innerHTML=result;
}

let div=()=>{
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let result= parseInt(num1) / parseInt(num2);
    document.getElementById('span').innerHTML=result;
}