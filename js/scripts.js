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
        if (players[index].videoTitle) {
            players[index].playVideo();
        }
  };
}

document.addEventListener('liteYoutubeIframeLoaded', () => {
  try {
    setupYT();
  } catch (e) {
    setTimeout(setupYT, 100);
  }
}, false);
