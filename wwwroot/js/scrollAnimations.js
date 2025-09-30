window.initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // anima só 1x
            }
        });
    }, { threshold: 0.2 }); // 20% do elemento visível já dispara

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};