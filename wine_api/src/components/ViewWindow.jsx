import React, { Component } from 'react';

import WineList from './WineList';
import Wine from './Wine';

class ViewWindow extends Component {
  render() {
    return (
      <div className='view-window'>
        {this.props.contents === 'all' ? <WineList wineList={this.props.wineList} /> : null }
        {this.props.contents === 'single' ? <Wine wine={this.props.currentWine} /> : null }
      </div>
    )
  }
}

export default ViewWindow;