import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons';
import ViewWindow from './components/ViewWindow';

class App extends Component {
  constructor () {
    super();
    this.state = {
      wineList: null,
      name: null,
      year: null,
      country: null,
      description: null,
      currentWine: null,
      viewWindowContents: null,
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
      this.setState({
        wineList: data
      })
    })
  }

  showAll() {
    this.setState({
      viewWindowContents: 'all',
      currentWine: null
    })
  }

  showOne(index) {
    console.log(this.state.wineList[index]);
    let wineList = [...this.state.wineList];
    this.setState({
      viewWindowContents: 'single',
      currentWine: wineList[index]
    })
  }

  pickAWine(wine){
    this.setState({
      wine: wine
    })
  }

  render() {
    const { wineList, viewWindowContents, currentWine } = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <h1>The Little Wine App</h1>
        <Buttons wineList={wineList} showAll={this.showAll} showOne={this.showOne} />
        <ViewWindow contents={viewWindowContents} wineList={wineList} currentWine={currentWine} />
      </div>
    );
  }
}


export default App;