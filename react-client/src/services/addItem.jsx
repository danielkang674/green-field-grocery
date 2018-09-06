import $ from 'jquery';

const addItem = (data) => {
  $.ajax({
    method: "POST",
    url: "/addItem",
    data: { data: data }
  })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default addItem;