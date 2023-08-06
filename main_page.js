window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var toTop = document.getElementById('to-top');
    var to_top_button = document.querySelector('to-top')
    if (scrollPosition > 0) {
        header.classList.add('black-bg');
        toTop.style.visibility = "visible";
    } else {
        header.classList.remove('black-bg');
        toTop.style.visibility = "hidden";
    }
});





