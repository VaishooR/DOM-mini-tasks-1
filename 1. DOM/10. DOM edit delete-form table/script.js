function submit(){
    var formData= readData();
}

function readData(){
    let formData={};
    formData["fullname"]=document.getElementById('fullname').value;
    formData["empcode"]=document.getElementById('empcode').value;
    formData["salary"]=document.getElementById('salary').value;
    formData["city"]=document.getElementById('city').value;

    console.log(formData);
}





// let submit=()=>{
//     let fullname=document.getElementById('fullname').value;
//     let empcode=document.getElementById('empcode').value;
//     let salary=document.getElementById('salary').value;
//     let city=document.getElementById('city').value;
//     let tbody=document.getElementById('tbody');
//     let trow='';
//     trow =`<tr>
//     <td>${fullname}</td>
//     <td>${empcode}</td>
//     <td>${salary}</td>
//     <td>${city}</td>
//     </tr>`
//     tbody.innerHTML=trow;
// }