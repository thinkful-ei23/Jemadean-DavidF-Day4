'use strict';
/* global $ */

function handleToggleClick() {
  $('.shopping-item-toggle').click(function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log('It works');
  });
}

$(handleToggleClick);

function handleDelete() {
  $('.shopping-item-delete').click(function(event) {
    $(this).closest('li').remove();
    console.log('It removed it');
  });
}

$(handleDelete);