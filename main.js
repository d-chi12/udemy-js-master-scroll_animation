document.addEventListener('DOMContentLoaded', function () {
    // const ta = new TweenTextAnimation('.animate-title');
    // ta.animate();

    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observe.unobserve(entry.target);            
            } else {
                console.log('out view');
            }
        });
    }

    const options ={
        root: null,
        rootMargin: "300px 0px",
        threshold: [0, 0.5, 1]
    };

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el))
    io.observe(child);

});
