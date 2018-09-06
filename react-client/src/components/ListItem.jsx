import React from 'react';

const ListItem = (props) => (
  <li>
    {props.item.quantity} {props.item.name}
    <button onClick={() => { props.removeFromShoppingList(props.item.itemId) }}>Remove</button>
  </li>
)

export default ListItem;