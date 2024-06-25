
document.addEventListener('DOMContentLoaded', function() {
    const firstTabWrap = document.querySelector('.tab__wrap');
    firstTabWrap.querySelector('.tab__content__container p').classList.add('active');
    firstTabWrap.querySelector('.tab__header button').classList.add('active');
});

document.querySelectorAll('.tab__header button').forEach(button => {
    button.addEventListener('click', function() {
        
        document.querySelectorAll('.tab__content__container p').forEach(p => {
            p.classList.remove('active');
        });

        document.querySelectorAll('.tab__header button').forEach(btn => {
            btn.classList.remove('active');
        });

        this.closest('.tab__wrap').querySelector('.tab__content__container p').classList.add('active');
        this.classList.add('active');
    });
});