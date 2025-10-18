document.addEventListener("DOMContentLoaded",()=> {
   const counters = document.querySelectorAll(".fact strong");
   counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText.replace(/\D/g,"");
        let count = 0;
        const speed = target / 50;
        const interval = setInterval( ()=>{
            count += speed;
            if(count >= target){
                count = target;
                clearInterval(interval);
            }
            counter.innerText = Math.floor(count);
        },30);
    };
    updateCount();
   });

   const uploadButton = document.querySelector(".btn-primary");
   const pointsDisplay = document.querySelector(".points strong");

   let userPoints = 250;

   uploadButton.addEventListener("click",()=>{

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange =()=>{
        const file = fileInput.files[0];
        if(file){

            const reward = Math.floor(Math.random()*50)+20;
            userPoints += reward;
            pointsDisplay.textContent = `${userPoints} Green Points`;

            alert(`✅ $(file.name) uploaded successfully! You earned ${reward} Green Points 🌱`);
        }
    };
    fileInput.click();
   });

   const notifIcon = document.querySelector(".notification");
   notifIcon.addEventListener("click",()=>{
    alert("No new notifications yet. Keep recycling ♻️");
   });
});
function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}