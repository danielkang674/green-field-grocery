import React from 'react';
import SearchedListItem from './SearchedListItem.jsx'

const SearchedList = (props) => {
  return (
    <ul>
      {props.searchItems.map(item => {
        return (
          <SearchedListItem data={item} addToShoppingList={props.addToShoppingList} key={item.itemId} />
        )
      })}
    </ul>
  )
};

export default SearchedList;