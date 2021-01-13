import activeClassByClick from './modules/active-class';
import {blogs, boardDescr, modalData} from './modules/data';
import blogCard from './modules/blogs';
import multipleSlider from './modules/slider';
import ModalWindow from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    // Boards section
    
    const board = document.querySelector('.board_main');
    const boardText = document.querySelector('.board_text');

    board.addEventListener('click', (event) => {
        if (event.target.classList.contains('board_box')) {
            activeClassByClick('.board_box', 'board_box_active', event.target, '.board_big', 'board_big_active');
        }

        if (event.target.classList.contains('board_tab')){
            activeClassByClick('.board_tab', 'board_tab_active', event.target);
            const id = event.target.getAttribute('data-id');
            boardText.innerHTML = boardDescr[id];
        }
    });

    // Team
    const rightArrow = document.querySelector('.right_arrow');
    const leftArrow = document.querySelector('.left_arrow');

    rightArrow.addEventListener('click', () => {
        multipleSlider('.team_member', 'active', 4, true);
    });
    leftArrow.addEventListener('click', () => {
        multipleSlider('.team_member', 'active', 4, false);
    });

    // Blogs render

    blogs.forEach(blog => {
        new blogCard(blog.img, blog.text, 'update_post', ".update_box").render();
    });

    // Modal window

    const overlay = document.querySelector('.overlay');

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal_show')) {
            event.preventDefault();
            overlay.classList.add('overlay_show', 'overlay_fade');
            const id = event.target.getAttribute('data-modal');
            modalData.forEach(modal => {
                if (modal.id === id) {
                    new ModalWindow(modal.title, modal.text, modal.buttonText).render();
                }
            });
        }
    });

    overlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal_close')) {
            overlay.classList.remove('overlay_show', 'overlay_fade');
            document.querySelector('.modal').remove();
        }
    });

    // Subscribe

    document.querySelector('.footer_subscribe').addEventListener('submit', (event) => {
        event.preventDefault();
        let a = document.querySelector('.footer_input').value;
        overlay.classList.add('overlay_show', 'overlay_fade');
        new ModalWindow("You have a cool e-mail!", a, "Yep!").render();
    });

    // Mobile Menu

    document.querySelectorAll('.mobile_menu_toggle').forEach(elem => {
        elem.addEventListener('click', () => {
            document.querySelector('.mobile_menu').classList.toggle('mobile_menu_unactive');
        });
    });
});