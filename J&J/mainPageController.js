document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

document.querySelector('.menu-btn').addEventListener(() => {
    document.querySelector('.nav-menu').classList.toggle('hide');
});

document.querySelector('.menu-btn').addEventListener(() => {
    document.querySelector('w3-display-left').classList.toggle('hide');
});