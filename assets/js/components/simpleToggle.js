const simpleToggle = (container) => {
    const itClass = container.classList[0];
    const newClass = itClass + '--toggle';
    const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
        
    if (!isMobile) { 
            container.addEventListener('mouseenter', () => {
            container.classList.add(newClass);
        });
    }

    container.addEventListener('click', () => {
        container.classList.toggle(newClass);
    });
}

export default simpleToggle;