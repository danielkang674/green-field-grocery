import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import getItems from './services/getItems.jsx';
import searchItem from './services/searchItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, searchInput) {
    searchItem(searchInput, (data) => {
      console.log(JSON.parse(data));
    });
    e.preventDefault();
  }

  componentDidMount() {
    getItems((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    return (<div>
      <h1>Shopping List</h1>
      <Search handleSubmit={this.handleSubmit} />
      <List items={this.state.items} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));