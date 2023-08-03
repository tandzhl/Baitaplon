window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('black-bg');
    } else {
        header.classList.remove('black-bg');
    }
});
