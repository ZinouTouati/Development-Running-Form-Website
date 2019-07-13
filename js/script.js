const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');

    // togle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // burger animation
        burger.classList.toggle('x-icone');
    })
}

navSlide();