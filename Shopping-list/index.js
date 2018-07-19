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

function handleSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    createListItem ($('.js-shopping-list-entry').val()); 
  });
}

function createListItem (submittedItem) {
  console.log(submittedItem);
  $('.shopping-list').append(`<li> <span class="shopping-item">${submittedItem}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>`);
}

$(handleSubmit);

