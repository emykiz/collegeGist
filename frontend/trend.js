let like = document.querySelector('.likes');
let comment = document.querySelector('.comments');
let share = document.querySelector('.shares');
count = 0;
console.log(like);
function likechange(){

    count++;
    like.innerText = count;

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