document.addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
        changeImage(-1)
    } else if (e.keyCode === 39) {
        changeImage(1);
    }
});

function changeImage(direction) {                                         // change Slides from Arrows
    var image = document.getElementById('image')
    var imageSource = image.src;
    var splitter = imageSource.split('/');
    var imgNumber = splitter[splitter.length - 1]
    var splitJpg = imgNumber.split('.')
    var getImageNumber = Number(splitJpg[0])
    if (direction === 1) {
        getImageNumber++;
    } else {
        getImageNumber--;
    }
    if (getImageNumber > 5) {
        getImageNumber = 1;
    } else if (getImageNumber < 1) {
        getImageNumber = 5
    }
    image.src = "images/" + getImageNumber + ".jpg";
    console.log(getImageNumber);
}

function currentSlide(slideNumber) {                                      // change Slides from Dots
    var image = document.getElementById('image')
    image.src = "images/" + slideNumber + ".jpg";
}


var i = 0;
var slides = [1, 2, 3, 4, 5];

function changingSlides() {                                              // change Slides from Auto             
    var image = document.getElementById('image')
    image.src = "images/" + slides[i] + ".jpg";
    // console.log(image.src)
    // console.log(image)
    // console.log(slides.length)
    if (i < slides.length - 1) {
        i++
    }
    else {
        i = 0;
    }

    setTimeout('changingSlides()', 3000)
}

changingSlides()

