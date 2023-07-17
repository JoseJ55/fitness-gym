const instructorInfos = document.getElementsByClassName("instructor-info");
const instructorFreeClasses = document.getElementsByClassName("instructor-freeClass");
const instructorImages = document.getElementsByClassName("instructor-image");

for(var i=0; i < instructorInfos.length; i++) {
    instructorInfos[i].addEventListener('mouseover', function() {
        if (this.style.zIndex < 3) {
            this.style.animation = 'sizeIncreaseRight 1s forwards';
            this.classList.add('animating');
        }
    });
    
    instructorInfos[i].addEventListener('mouseout', function() {
        if (this.style.zIndex < 3) {
            this.style.animation = 'sizeDecreaseRight 1s forwards';
        }
    });

    (function(index) {
        instructorInfos[index].addEventListener('click', function() {
            this.style.animation = 'sizeDecreaseRight 1s forwards';
            this.style.zIndex = '3';
            instructorImages[index].style.zIndex = '2';
            instructorFreeClasses[index].style.zIndex = '1';
        });
    })(i);
}

for(var i=0; i < instructorImages.length; i++) {
    instructorImages[i].addEventListener('mouseover', function() {
        if (this.style.zIndex !== 3) {
            this.style.animation = 'sizeIncreaseMiddle';
        }
    });
    
    instructorImages[i].addEventListener('mouseout', function() {
        if (this.style.zIndex !== 3) {
            this.style.animation = 'sizeDecreaseMiddle';
        }
    });

    (function(index) {
        instructorImages[index].addEventListener('click', function() {
          this.style.zIndex = '3';
          instructorInfos[index].style.zIndex = '2';
          instructorFreeClasses[index].style.zIndex = '1';
        });
    })(i);
}

for(var i=0; i < instructorFreeClasses.length; i++) {
    instructorFreeClasses[i].addEventListener('mouseover', function() {
        if (this.style.zIndex < 3) {
            this.style.animation = 'sizeIncreaseLeft 1s forwards';
        }
    });
    
    instructorFreeClasses[i].addEventListener('mouseout', function() {
        if (this.style.zIndex < 3) {
            this.style.animation = 'sizeDecreaseLeft 1s forwards';
        }
    });

    (function(index) {
        instructorFreeClasses[index].addEventListener('click', function() {
            this.style.animation = 'sizeDecreaseLeft 1s forwards';
            this.style.zIndex = '3';
            instructorInfos[index].style.zIndex = '1';
            instructorImages[index].style.zIndex = '2';
        });
    })(i);
}