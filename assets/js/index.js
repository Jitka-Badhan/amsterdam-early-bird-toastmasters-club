import menu from './components/menu.js';
import instruction from './components/instruction.js';
import checkViewport from './components/checkViewport.js';
import simpleToggle from './components/simpleToggle.js';

if (checkViewport()) {
    menu(document.querySelector('.menu'));
} else {
    document.querySelectorAll('.menu__arrow').forEach( item => {
        simpleToggle(item);
     });
}

instruction(document.querySelectorAll('.instruction'));