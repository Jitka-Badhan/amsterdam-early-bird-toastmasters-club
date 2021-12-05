const menu = (container) => {
    const wrappers = container.querySelectorAll('.menu__link--wrapper');

    wrappers.forEach( wrapper => {
        if (wrapper.classList.value.indexOf('active') === -1) {
            const button = wrapper.querySelector('.menu__link');
            const side = wrapper.querySelector('.menu__anchors');
            const mouseOver = () => {
                    side.classList.remove('hidden');
                }
            const mouseOut = () => {
                    side.classList.add('hidden');
                }

            button.addEventListener('mouseover', mouseOver);
            side.addEventListener('mouseover', mouseOver);
            wrapper.addEventListener('mouseout', mouseOut);
        }
    } );
}

export default menu;