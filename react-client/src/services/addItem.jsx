import $ from 'jquery';

const addItem = (data, cb) => {
  $.ajax({
    method: "POST",
    url: "/addItem",
    data: data
  })
    .then(data => {
      console.log(data);
      cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export default addItem;