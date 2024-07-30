let players = [];

function setupYT() {
  const ytElements = document.querySelectorAll('.ytvideo');

  ytElements.forEach((element, index) => {
    const iframe = element.shadowRoot.querySelector('iframe');
    if (iframe) {
      players[index] = new YT.Player(iframe, {
        events: {
          onReady: onPlayerReady(index),
        },
      });
    }
  });
}

function onPlayerReady(index) {
  return function() {
    players[index].playVideo();
  };
}

document.addEventListener('liteYoutubeIframeLoaded', () => {
  try {
    setupYT();
  } catch (e) {
    setTimeout(setupYT, 100);
  }
}, false);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("img-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}