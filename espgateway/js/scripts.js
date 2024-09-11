/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


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
