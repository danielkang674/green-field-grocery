import $ from 'jquery';

const searchItem = (data, cb) => {
  $.ajax({
    method: 'POST',
    url: '/search',
    data: { searchInput: data }
  })
    .then((data) => {
      if (cb) cb(data);
    })
    .catch(err => {
      console.log('err', err);
    });
};

export default searchItem;