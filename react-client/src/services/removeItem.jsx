import React from 'react';
import $ from 'jquery';

const removeItem = (itemId, cb) => {
  $.ajax({
    method: "DELETE",
    url: "/deleteItem",
    data: { itemId: JSON.stringify(itemId) }
  })
    .then(data => {
      console.log(data);
      cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export default removeItem;