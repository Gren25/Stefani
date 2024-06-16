document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelectorAll(".slider-img");
  
    sliderImages.forEach(function (image, index) {
      image.addEventListener("mouseover", function () {
        removeActiveClasses();
        image.classList.add("active");
      });
  
      image.addEventListener("mouseout", function () {
        image.classList.remove("active");
      });
    });
  
    function removeActiveClasses() {
      sliderImages.forEach(function (image) {
        image.classList.remove("active");
      });
    }
  });
  