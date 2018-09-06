import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    <p>You have {props.items.length} grocery items.</p>
    <ul>
      {props.items.map(item => <ListItem item={item} key={item._id} removeFromShoppingList={props.removeFromShoppingList} />)}
    </ul>
  </div>
)

export default List;