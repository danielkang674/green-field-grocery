import React from 'react';

const SearchedListItem = (props) => (
  <li>
    <img src={props.data.thumbnailImage}></img>
    ${props.data.salePrice} {props.data.name}
    <button onClick={() => props.addToShoppingList(props.data)}>Add me</button>
  </li>
);

export default SearchedListItem;