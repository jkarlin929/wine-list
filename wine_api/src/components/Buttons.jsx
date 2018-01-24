import React, { Component } from 'react';

class Buttons extends Component {
  renderButtons() {
    return this.props.wineList.map((wine, index) => {
      return (
        <button key={wine.id} onClick={() => this.props.showOne(index)}>
          {wine.name}
        </button>
      )
    })
  }

  render() {
    return (
      <div className='buttons'>
        <button onClick={this.props.showAll}>View All</button>
        {this.props.wineList ? this.renderButtons() : null}
      </div>
    )
  }
}

export default Buttons;