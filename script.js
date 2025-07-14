$(function () {
  var texts = [
    "FULL STACK DEVELOPER",
    "FRONT END DEVELOPER",
    "BACKEND DEVELOPER"
  ];

  var count = 0;
  var index = 0;
  var currentText = '';
  var isDeleting = false;
  var typingSpeed = 120;
  var erasingSpeed = 50;
  var delayBetweenWords = 2000;

  function typeEffect() {
    currentText = texts[count];
    var displayed = isDeleting
      ? currentText.substring(0, index--)
      : currentText.substring(0, index++);

    $('#animated-text').html((displayed || '&nbsp;') + '<span class="cursor">|</span>');

    if (!isDeleting && index === currentText.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      count = (count + 1) % texts.length;
      setTimeout(typeEffect, typingSpeed);
    } else {
      setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }
  }

  typeEffect();
});

$(document).ready(function () {
    $(".card").mouseenter(function () {
        $(this).addClass("glow");
    });

    $(".card").mouseleave(function () {
        $(this).removeClass("glow");
    });
});

$(document).ready(function() {
    var images = $('.fade-image');
    var currentIndex = 0;

    function fadeInOut() {
      var currentImage = images.eq(currentIndex);

      currentImage.fadeIn(200).delay(3000).fadeOut(200, function() {
        currentIndex = (currentIndex + 1) % images.length;
        fadeInOut();
      });
    }

  fadeInOut(); 
});