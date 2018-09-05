import React from 'react';

const ListItem = (props) => (
  <div>
    {props.item.description} {props.item.quantity}
  </div>
)

export default ListItem;