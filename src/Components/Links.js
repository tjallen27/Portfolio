import React, { Component } from 'react';

export default class Links extends Component {
  render(){
    const links = [
      {name: 'Github',
      url: 'https://www.github.com/tjallen27'},
      {name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tjallen27/'}
    ];

    return (
      <div className="socialLinks">
        <ul>
          {links.map(function(item, index){
            return (<li key={index}><a href={item.url} target="_blank">{item.name}</a></li>)
          })}
        </ul>
      </div>
    )
  }
}
