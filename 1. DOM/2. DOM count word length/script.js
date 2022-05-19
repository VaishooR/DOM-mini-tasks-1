let button=document.getElementById('btn');
button.addEventListener('click',function(){
    let word=document.getElementById('input').value;
    console.log(word.length);
    document.getElementById('output').innerHTML= 'Length of the Word is ' + word.length +'.';
})