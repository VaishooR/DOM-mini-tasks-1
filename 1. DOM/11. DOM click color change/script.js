// let changeColor = () => {
//     let para = document.getElementsByTagName('p');
//     para[0].setAttribute("style","color:blue;")
//     para[1].setAttribute("style","color:blue;")
//     para[2].setAttribute("style","color:blue;")
// }

//Loop
// let changeColor = () => {
//     let para= document.getElementsByTagName('p');
//     para[0].style.color = "red"
// }


let changeColor = () => {
    let para= document.getElementsByTagName('p');
    for(i=0;i<para.length;i++){
        para[i].style.color = "orangered"
        para[i].style.backgroundColor = 'yellow'
        para[i].style.fontSize= "30px"
    }   
}