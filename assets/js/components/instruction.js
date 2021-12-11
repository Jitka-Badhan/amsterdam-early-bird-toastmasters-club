const instruction = (elms) => {
    elms.forEach( elm => {
        const itemsToToggle = elm.querySelectorAll('.instruction__body');
        itemsToToggle.forEach( item => {
            const button = elm.querySelector('.instruction__heading');
            const arrow = elm.querySelector('.instruction__arrow');
            button.addEventListener('click', () => {
                item.classList.toggle('instruction__body--hidden');
                arrow.classList.toggle('instruction__arrow--up');
            });
        } )
    });
}

export default instruction;