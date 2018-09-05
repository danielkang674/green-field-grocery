import $ from 'jquery';

const getItems = (cb) => {
  $.ajax({
    method: 'GET',
    url: '/items'
  })
    .then(data => {
      if (cb) cb(data);
    })
    .catch(err => {
      console.log('err', err);
    });
};

export default getItems;