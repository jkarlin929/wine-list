import React from 'react';

function Wine(props) {
  return (
    <li>
    {props.wine.name}
    <br />
    {props.wine.year}
    <br />
    {props.wine.country}
    <br />
    {props.wine.description}
    </li>
    )
}




export default Wine;