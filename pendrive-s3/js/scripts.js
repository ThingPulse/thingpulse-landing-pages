

let player;

function setupYT(element) {
  player = new YT.Player(
    element.target
      .shadowRoot.querySelector('iframe'),
    {
      events: {
        onReady: onPlayerReady,
      },
    }
  );
}

function onPlayerReady(event) {
    event.target.playVideo();
}

document.addEventListener('liteYoutubeIframeLoaded', (element) => {
  try {
    setupYT(element);
  } catch(e) {
    setTimeout(setupYT(element), 100);
  }
}, false);