function addToList(){
    let input = document.querySelector('.input').value;
    let list= document.createElement('li')
    list.innerHTML = input;
    document.querySelector('.list').append(list);

}