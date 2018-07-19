'use strict';
/* global $ */

function handleThumbnailClicks() {
  $('.thumbnail img').on('click', function(event) {
    const imgSrc = $(this).attr('src');  
    const imgAlt = $(this).attr('alt');
    
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    
  });
}

$(handleThumbnailClicks());