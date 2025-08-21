function initSmoothScrollEffect (){
    
    const linksInternos = document.querySelectorAll('a[href^="#"');

    if(linksInternos.length) {
        function smoothScroll(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
        
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        
        linksInternos.forEach((link) => {
            link.addEventListener('click' , smoothScroll)
        })
    }
    
}

function initScrollElementVisibleEffect() {
    function scrollElementVisible() {
        const sections = document.querySelectorAll('.js-animation-scroll')
    
        sections.forEach((section) => {
    
            const sectionScroll = section.getBoundingClientRect().top -700;
            
            if(sectionScroll < 0) {
                section.classList.add('active')
            } else {
                section.classList.remove('active')
            }   
        })
    }

    window.addEventListener('scroll' , scrollElementVisible)
    
}

initSmoothScrollEffect();
initScrollElementVisibleEffect()

