'use strict'

const card = document.querySelectorAll('.solutions__slider-card'),
      tabs = document.querySelectorAll('.solutions__link'),
      arrowLeft = document.querySelector('.arrow-left'),
      arrowRight = document.querySelector('.arrow-right');

function hideCard() {
    card.forEach((item) => {
        item.classList.add('solutions__slider-card_hide');
        item.classList.remove('solutions__slider-card_show');
    });
    tabs.forEach(item => {
        item.classList.remove('solutions__link_active');
    })
}

function showCard(i = 0) {
    card[i].classList.add('solutions__slider-card_show', 'fade');
    card[i].classList.remove('solutions__slider-card_hide');
    tabs[i].classList.add('solutions__link_active');
}


hideCard();
showCard();

tabs.forEach((item, i) => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        if(target == item) {
            hideCard();
            showCard(i);
        }
    })
})

arrowLeft.addEventListener('click', e => {
    tabs.forEach((item, i) => {
        if(item.classList.contains('solutions__link_active') && i > 0) {
            hideCard();
            showCard(i - 1);
        }
    })
})

arrowRight.addEventListener('click', e => {
    for(let i = 0; i < tabs.length - 1; i++) {
        if (tabs[i].classList.contains('solutions__link_active') && i >= 0) {
            hideCard();
            showCard(i + 1);
            return
        }
    }
})

// hamburger menu

window.addEventListener('DOMContentLoaded', () => {
    const hamburgerMmenu = document.querySelector('.hamburger-menu'),
    hamburger = document.querySelector('.hamburger'),
    hamburgerWrap = document.querySelector('.hamburger-wrap');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        hamburgerMmenu.classList.toggle('hamburger-menu_active');
        hamburgerWrap.classList.toggle('hamburger-wrap_active');
    });

    hamburgerWrap.addEventListener('click', (e) => {
        if (e.target === hamburgerWrap) {
            hamburger.classList.toggle('hamburger_active');
            hamburgerMmenu.classList.toggle('hamburger-menu_active');
            hamburgerWrap.classList.toggle('hamburger-wrap_active');
        }
    });
})