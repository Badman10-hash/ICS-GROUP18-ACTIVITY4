
    // Slideshow for featured posters
    const slides = document.querySelectorAll('.featured-image-slideshow img');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000);

    // Slideshow for Top Picks movie posters
    const slideshowFigures = document.querySelectorAll('.movie-slideshow figure');
    let currentFigure = 0;

    function showFigure(index) {
      slideshowFigures.forEach((fig, i) => {
        fig.classList.toggle('active', i === index);
      });
    }

    function nextFigure() {
      currentFigure = (currentFigure + 1) % slideshowFigures.length;
      showFigure(currentFigure);
    }

    showFigure(currentFigure);
    setInterval(nextFigure, 5000);
    