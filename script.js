//basic interactions:animated couunters

document.addEventListener('DOMContentLoaded',function(){
    animateCounters();
    initReveal();
    injectMobileToggle();
    smoothAnchors();
});

/*----animated counters(reads number text,animates to it)----*/
function animateCounters(){
    const counters = document.querySelectorAll('.stat span,[data-counter]');
    counters.forEach(e1 =>{
        //determine target number
        let target = e1.dataset.counter || e1.textContent.replace(/[^\d]/g,'');
        target= parseInt(target) || 0;
        e1.textContent = '0';
        const duration = 1400;
        const stepTime = Math.max(Math.floor(duration/(target||1)),8);
        let current = 0;
        const increment = Math.ceil(target/(duration/stepTime));
        const timer = setInnterval(()=>{
            current += increment;
            if(current >= target){
                e1.textContent = (target >= 1000)? formatNumber(target):target;
                clearInterval(timer);
            }else{
                e1.textContent = (current >= 1000)?formatNumber(current):current;
            }
        },stepTime);
    });
}

function formatNumber(n){
    //simple thousands format
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+(n%1===0 ?'':'');
}
/*---mobile nav toggle(adds button if mobile)---*/

function injectMobileToggle(){
    const nav = document.querySelector('nav');
    if(!nav) return;
    //create toggle button(only if not present)
    if(!document.querySelector('.mobile-toggle')){
        const btn = document.createElement('button');
        btn.className = 'mobile-toggle';
        btn.innerHTML = '☰';
        btn.setAttribute('aria-label','Open menu');
        btn.style.cssText = 'display:none; border:0; background:transparent; font-size:20px;padding:8px;cursor:pointer;';
        //place before nav
        document.querySelector('.navbar').insertBefore(btn,nav);
        btn.addEventListener('click',()=> nav,classList.toggle('open'));

        //show button on small screens
        const mq = window.matchMedia('(max-width:720px)');
        const update = ()=> btn.style.display = mq.matches ? 'block':'none';
        update();
        mq.addEventListener(update); 
    }

    //if nav opens ,set styles for small screens(done via JS for fallback)
    const style = document.createElement('style');
    style.textContent = `
    nav.open ul { 
        display: flex !important; 
        flex-direction: column; 
        gap: 8px; 
        background: transparent; 
        margin-top: 8px; 
    }
    @media (max-width: 720px) {
        nav ul { 
            display: none; 
            position: absolute; 
        }
        nav.open ul { 
            display: flex; 
        }
    }
`;
    document.head.appendChild(style);
}

/*---smooth anchor links---*/
function smoothAnchors(){
    document.querySelectorAll('a[href^"#"]').forEach(a=>{
        a.addEventListener('click',function(e){
            e.preventDefault();
            const id = this.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if(target) target.scrollIntoView({behavior:'smooth',block:'start'})
        });
    });
}
