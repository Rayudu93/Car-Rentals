
                var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Automatic slideshow
    var slideTimer;
    function autoSlides() {
        slideTimer = setInterval(function() {
            plusSlides(1);
        }, 1500); // Change image every 2 seconds
    }
    autoSlides();

    // Pause automatic slideshow when hovering over images
    var slides = document.querySelectorAll('.main-img-2 img');
    slides.forEach(function(slide) {
        slide.addEventListener('mouseenter', function() {
            clearInterval(slideTimer);
        });
        slide.addEventListener('mouseleave', function() {
            autoSlides();
        });
    });

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("main-img-2");
        var dots = document.getElementsByTagName("button");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].classList.add("active");
    }