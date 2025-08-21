function smoothScrollEffect (){
    
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

smoothScrollEffect();


