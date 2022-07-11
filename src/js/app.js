import * as flsFunctions from "./modules/webpChecker.js";
flsFunctions.isWebp()
/* код выше не удалять */

let burger = document.querySelector('.menu__burger')
let body = document.querySelector('.menu__body')


burger.addEventListener('click', () => {
    body.classList.toggle('menu__body_active');
    burger.classList.toggle('button-burger_active');
    document.body.classList.toggle('lock')
})
