import React from 'react';

function WineList(props){
  return(
    <ul className='wine-list'>
      {props.wineList.map((wine) => {
        return <li> {wine.name} </li>
      })}
    </ul>
  )
}





export default WineList;