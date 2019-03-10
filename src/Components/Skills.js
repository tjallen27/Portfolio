import React, { Component } from 'react';

export default class Skills extends Component {
  render(){
    const current = [
      {name: 'Node.js'},
      {name: 'React'},
      {name: 'Next.js'}
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
