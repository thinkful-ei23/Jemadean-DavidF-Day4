'use strict';
/* global $ */

//let's make it where the check button crosses out the item on the list
function handleToggleClick() {
  $('.shopping-list').on('click', ('.shopping-item-toggle'), function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log('It works');
  });
}
$(handleToggleClick);

//let's make it where we can remove items from the list
function handleDelete() {
  $('.shopping-list').on('click', ('.shopping-item-delete'), (function(event) {
    $(this).closest('li').remove();
    console.log('It removed it');
  }));
}
$(handleDelete);

//let's make it where when the Add item is clicked it creates our new list item
function handleSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    createListItem ($('.js-shopping-list-entry').val()); 
  });
}
$(handleSubmit);

//let's tell it what an item on the list should be
function createListItem (submittedItem) {
  console.log(submittedItem);
  $('.shopping-list').append(`<li> <span class="shopping-item">${submittedItem}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>`);
}