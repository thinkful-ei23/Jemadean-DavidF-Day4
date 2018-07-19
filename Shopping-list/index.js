'use strict';
/* global $ */

function handleToggleClick() {
  $('.shopping-item-toggle').click(function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log('It works');
  });
}

$(handleToggleClick);