import React, { Component } from 'react'
import './App.css';
import CardList from './components/cardlist/CardList';
import Searchbox from './components/searchbox/Searchbox.js';

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
    //every time state changes it will render component. destructure state
    const { monsters, searchField } = this.state;
    //filter through monsters array. check every monster that contains searchField text. 
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (//pass to searchbox searchHanlder function. and setState of searchField to whatever is typed into input
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox placeholder='Search monsters' searchHandler={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }

}

export default App;
