document.addEventListener("DOMContentLoaded",function(){
    fetch("footer.html")
    .then(response => response.text())
    .then(data =>{
        document.body.insertAdjacentHTML("beforeend",data);
    });
});
document.getElementById("contactForm").addEventListener("submit",e=>{
    e.preventDefault();
    alert("Message sent successfully! we will get back to you soon.");
    e.target.reset();
});