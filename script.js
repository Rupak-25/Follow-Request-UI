let a = document.querySelector(".relative");
let b = document.querySelector(".friends");
let c = 0;
a.addEventListener("click",function(){
    if(c === 0){
        a.textContent = "Unfollow";
        b.textContent = "You both follow each other!✨";
        c = 1;
    }else{
        a.textContent = "Follow";
        b.innerHTML = "You may know her!✨<br> New to platform";
        c = 0;
    }  
});
