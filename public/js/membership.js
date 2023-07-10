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

const plansBox = document.getElementById('membership-plans');
const firstPlan = document.getElementById('plan-one-background');
const secondPlan = document.getElementById('plan-two-background');
const thirdPlan = document.getElementById('plan-three-background');

function isInViewport(item) {

  var bounding = item.getBoundingClientRect(),
      myElementHeight = item.offsetHeight,
      myElementWidth = item.offsetWidth;

  if(bounding.top >= -myElementHeight
      && bounding.left >= -myElementWidth
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      return true;
  } else {
      return false;
  }

}

// var height = plansBox.offsetHeight;

window.addEventListener('scroll', () => {
  if (isInViewport(plansBox)) {
    firstPlan.style.animation = 'fadeIn 2s';
    secondPlan.style.animation = 'fadeIn 3s';
    thirdPlan.style.animation = 'fadeIn 3.5s';
  }
})

const membershipPlan = document.getElementsByClassName('membership-plan');
const membershipBox = document.getElementById('membership-form');
const membershipFormBox = document.getElementById('membership-form-box');
const membershipFormBackground = document.getElementById('membership-form-background');
const membershipFormBoxCancel = document.getElementById('membership-form-box-cancel');

Array.from(membershipPlan).forEach((plan) => {
  plan.addEventListener('click', () => {
    membershipBox.style.display = 'flex';
    membershipFormBox.style.animation = 'fadeIn 2s';
  })
})

membershipFormBackground.addEventListener('click', () => {
  membershipBox.style.display = 'none';
})

membershipFormBoxCancel.addEventListener('click', () => {
  membershipBox.style.display = 'none';
})