import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      wineList: null,
      name: null,
      year: null,
      wine: null,
      wineButtons: null,
    };
    this.showAll = this.showAll.bind(this);
    this.showOne = this.showOne.bind(this);
    this.pickAWine = this.pickAWine.bind(this);
  }

  componentDidMount() {
    fetch('http://myapi-profstream.herokuapp.com/api/d47e9c/wines')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      const wineButton = data.map((wine) => {
        return (
          <button key={wine.id} onClick={this.showOne}>
          {wine.name}
          </button>
        )
      })
      this.setState({
        wineButtons: wineButton
      })
    })
  }

  showAll() {
    fetch('http://myapi-profstream.herokuapp.com/api/d47e9c/wines')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const wineName = data.map((wine) => {
        return (
          <li key={wine.id}>
          {wine.name}
          </li>
        )
      })
      this.setState({
        wineList: wineName,
      })
    })
  }

  showOne() {
    fetch('http://myapi-profstream.herokuapp.com/api/d47e9c/wines')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        name: res[0].name,
        year: res[0].year
      })
    })
    // console.log(this.state)
  }

  pickAWine(wine){
    this.setState({
      wine: wine
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>The Little Wine App</h1>
        <button onClick={this.showAll}>Show All Wines</button>
        {(this.state.wineList) ? this.state.wineList : ''}
        <button onClick={this.showOne}>Show One Wine</button>
        <div>
          <h3>{this.state.name}</h3>
          <p>{this.state.year}</p>
        <button onClick={() => {this.pickAWine()}}> click for wine </button>
        </div>
      </div>
    );
  }
}


export default App;