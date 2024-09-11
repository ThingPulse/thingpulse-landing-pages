

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


// Function to append all query parameters from the current page to all outgoing links
function appendCurrentQueryParamsToLinks() {
  // Get the current page's query parameters
  let currentUrl = new URL(window.location.href);
  let queryParams = currentUrl.search;

  // If there are no query parameters, no need to proceed
  if (!queryParams) return;

  // Select all the anchor links you want to modify
  const links = document.querySelectorAll('a');

  links.forEach(link => {
      // Create a URL object from the link's href
      let linkUrl = new URL(link.href);

      // Preserve existing query parameters in the link
      let linkSearchParams = new URLSearchParams(linkUrl.search);

      // Append the current page's query parameters
      let currentSearchParams = new URLSearchParams(queryParams);
      currentSearchParams.forEach((value, key) => {
          // Don't overwrite existing parameters in the link
          if (!linkSearchParams.has(key)) {
              linkSearchParams.set(key, value);
          }
      });

      // Update the link's href with the modified query parameters
      linkUrl.search = linkSearchParams.toString();
      link.href = linkUrl.toString();
  });
}

// Call the function to automatically add query params to outgoing links
appendCurrentQueryParamsToLinks();