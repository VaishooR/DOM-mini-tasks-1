let likesCount=0;
let dislikesCount=0;
let totalCount=0;
let liked=()=>{
    likesCount++;
    totalCount++;
    document.getElementById('likes').innerText=likesCount;
    document.getElementById('totallikes').innerText=totalCount;

}
let disliked=()=>{
    dislikesCount++;
    totalCount++;
    document.getElementById('dislikes').innerText=dislikesCount;
    document.getElementById('totallikes').innerText=totalCount;

}