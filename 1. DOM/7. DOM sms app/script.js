let maxLength=50;
let typelength=()=>{
    let textlength=document.getElementById('textarea').value.length;
    let remainingLength=maxLength-textlength;
    let textcount=document.getElementById('textcount');
    textcount.textContent=remainingLength;
    
}