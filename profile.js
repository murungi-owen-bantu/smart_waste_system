document.addEventListener("DOMContentLoaded",()=>{
    const editBtn = document.getElementById("editProfileBtn");
    editBtn.addEventListener("click",()=>{

        const name = prompt("Enter your new name: ");
        const email = prompt("Enter your new email address: ");
        if(name) document.querySelector("h2").textContent = name;
        if(email) document.querySelector(".profile-card p").textContent = email;
        alert("Profile updated successfully!");
    });
    /*const greenPoints = document.getElementById("geenPoints");

if(greenPoints && !isNaN(parseInt(greenPoints.textContent))){
    let points = parseInt(greenPoints.textContent);
    greenPoints.textContent = points + Math.floor(Math.random() * 10);
}*/
const redeemBtn = document.querySelector(".card button");
const pointsDisplay =document.querySelector(".card strong");

redeemBtn.addEventListener("click",()=>{
    let points = parseInt(pointsDisplay.textContent);
    if(points>=100){
        points-=100;
        pointsDisplay.textContent = points;
        alert("you have redeemed 100 points for a 10% service discount!");
    }else{
        alert("not enough points to redeem!Keep recycling");
    }
});

const reportsBtn = document.querySelectorAll(".card button")[1];
reportsBtn.addEventListener("click",()=>{
    alert(`
     waste reports:
     plastic waste scheduled - 17 oct 2025   
        `);
});

const notif = document.querySelector(".notifications");
notif.addEventListener("click",()=>{
    alert("reminder");
});
});
function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}