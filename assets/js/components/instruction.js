const instruction = (elms) => {
    elms.forEach( elm => {
        const itemsToToggle = elm.querySelectorAll('.instruction__body');
        itemsToToggle.forEach( item => {
            const button = elm.querySelector('.instruction__heading');
            const arrow = elm.querySelector('.instruction__arrow');
            const height = item.offsetHeight;

            item.style.height = '0';            
            button.addEventListener('click', () => {
                item.classList.toggle('instruction__body--hidden');
                arrow.classList.toggle('instruction__arrow--up');

                if (item.style.height == '0px' ) {
                    item.style.height = height + 'px';
                } else {
                    item.style.height = '0';
                }
            });
        } )
    });
}

export default instruction;