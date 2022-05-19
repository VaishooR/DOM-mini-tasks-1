function changeContent(){
    let content=document.getElementById('heading');
    content.innerHTML="Content changed"
    content.style.fontSize="50px"
    content.style.backgroundColor="orange"
}

function invisible(){
    let hideContent= document.getElementById('heading');
    hideContent.innerHTML="";
}

function showContent(){
    let showContent= document.getElementById('heading');
    showContent.innerHTML="I am heading";
}

function addrow(){
    let tbody= document.getElementById('tbody');
    tbody.innerHTML +=`<tr>
    <td>Cell-1</td>
    <td>Cell-2</td>
    <tr>`;
}

function hide(){
    document.getElementById('hidecontent').style.display = 'none';
}

function comeback(){
    document.getElementById('hidecontent').style.display = 'block';
}

function newrows(){
    let newrows = document.getElementById('tablebody').insertRow();     //inserting a row in the table
    let cell1=newrows.insertCell(0);
    let cell2=newrows.insertCell(1);                                    //inserting cells to each row

    cell1.innerHTML="New Row";
    cell2.innerHTML="New Row";

}