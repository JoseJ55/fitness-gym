const imageHeader = document.getElementById("image-container");

const imageUrls = [
    './../assets/membership/geert-pieters-3RnkZpDqsEI-unsplash.jpg',
    './../assets/membership/bruce-mars-fiEG-Pk6ZyA-unsplash.jpg',
    './../assets/membership/bruce-mars-y0SMHt74yqc-unsplash.jpg',
  ];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * 3);

    const imageUrl = imageUrls[randomIndex];

    // imageHeader.style.transition = "opacity 0, transform 0.5s";

  setTimeout(function () {
    imageHeader.style.backgroundImage = `url(${imageUrl})`;
    // imageHeader.style.transition = "opacity 1, transform 0.5s";
  }, 3000); 
}

// changeBackground();

// setInterval(changeBackground, 5000);

const firstPlan = document.getElementById('plan-one-background');
const secondPlan = document.getElementById('plan-two-background');
const thirdPlan = document.getElementById('plan-three-background');

function slideUp(element) {
  var height = element.offsetHeight;

  element.style.position = 'relative';
  element.style.top = '0';

  var animation = setInterval(frame, 10);

  function frame() {
    height -= 10;

    if (height <= 0) {
      clearInterval(animation);
      element.style.display = 'none';
    } else {
      element.style.top = -height + 'px';
    }
  }
}

// slideUp(firstPlan);