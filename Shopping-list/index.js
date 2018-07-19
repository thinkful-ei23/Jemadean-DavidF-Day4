'use strict';

function handleToggleClick() {
  $('.shopping-item-toggle').click(function(event) {
    event.toggleClass('.shopping-item__checked');
  });
}

handleToggleClick();