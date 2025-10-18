document.addEventListener("DOMContentLoaded",function(){
    fetch("navigation.html")
    .then(response => response.text())
    .then(data =>{
        document.body.insertAdjacentHTML("afterbegin",data);
    });
});
function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}