import React, { Component } from 'react';

export default class Skills extends Component {
  render(){
    const current = [
      {name: 'ReactJS'},
      {name: 'NodeJS'},
      {name: 'SCSS'}
    ];

    return (
      <div className="skillsList">

        <ul>
        <h3>Currently learning</h3>
        {current.map(function(item, index){
           return (<li key={index}>{item.name}</li>)
         })}
        </ul>
      </div>
    )
  }
}
