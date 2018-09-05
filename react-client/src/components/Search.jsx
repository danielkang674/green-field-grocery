import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    return (
      <div>
        <h4>Search for groceries</h4>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.searchInput)}>
          <input value={this.state.searchInput} onChange={(e) => this.handleUserInput(e)} type="text" placeholder="write a grocery item" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search;