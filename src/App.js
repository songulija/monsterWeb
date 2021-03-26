import React, { Component } from 'react'
import './App.css';
import CardList from './components/cardlist/CardList';

class App extends Component {

  constructor() {
    super()
    this.state = {//adding state monsters to this component
      monsters: [],
      searchField: ''
    }
  }
  //Called immediately after a component is mounted. 
  //Setting state here will trigger re-rendering.
  componentDidMount() {
    //make fetch request to get data from api
    //fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
    //To extract the JSON body content from the response, we use the json() method
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    return (
      <div className="App">
        <input type='search' placeholder='Search monsters' value={this.state.searchField} onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

}

export default App;
