import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import getItems from './services/getItems.jsx';
import searchItem from './services/searchItem.jsx';
import SearchedList from './components/SearchedList.jsx';
import addItem from './services/addItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchItems: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToShoppingList = this.addToShoppingList.bind(this);
  }

  handleSubmit(e, searchInput) {
    searchItem(searchInput, (data) => {
      this.setState({ searchItems: JSON.parse(data).items }, () => console.log(this.state.searchItems));
    });
    e.preventDefault();
  }

  componentDidMount() {
    getItems((data) => {
      this.setState({ items: data });
    });
  }

  addToShoppingList(item) {
    addItem(item);
  }

  render() {
    return (<div>
      <h1>Shopping List</h1>
      <Search handleSubmit={this.handleSubmit} />
      <SearchedList searchItems={this.state.searchItems} addToShoppingList={this.addToShoppingList} />
      <List items={this.state.items} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));