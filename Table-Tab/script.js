const firstTabWrap = document.querySelector('.tab__wrap');

const content = document.querySelectorAll('.tab__content__container p');

const tabBtn = document.querySelectorAll('.tab__header button');

document.addEventListener('DOMContentLoaded', function() {
    firstTabWrap.querySelector('.tab__content__container p').classList.add('active');
    firstTabWrap.querySelector('.tab__header button').classList.add('active');
});

document.querySelectorAll('.tab__header button').forEach(button => {
    button.addEventListener('click', function() {
        
        content.forEach(p => {
            p.classList.remove('active');
        });

        tabBtn.forEach(btn => {
            btn.classList.remove('active');
        });

        this.closest('.tab__wrap').querySelector('.tab__content__container p').classList.add('active');
        this.classList.add('active');
    });
});