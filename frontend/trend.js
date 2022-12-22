let like = document.querySelectorAll('.likes');
let likeclick = document.querySelectorAll('.likeclick');
let comment = document.querySelector('.comments');
let share = document.querySelector('.shares');
count = 0;
console.log(likeclick);
function likechange(e){
   count++;
    like.innerText  = count;

    if(count >="10"){
        like.innerText =count.slice(0,1)+"k"
    }
}
county = 0;
function sharechange(){

    county++;
    share.innerText = county;

    if(count >="10"){
        share.innerText =count.slice(0,1)+"k"
    }
}

likeclick.forEach(item => 
    item.onclick = (e)=>{
    like.forEach(i => e.target.previousElementSibling.innerText = count)

        console.log("get");
        count++;
        // e.target.previousElementSibling.innerText = count
    }
   
)