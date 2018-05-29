import React, { Component } from 'react';

export default class Links extends Component {
  render(){
    const links = [
      {name: 'Github',
      url: 'https://www.github.com/tjallen27',
      icon: <i className="fab fa-github fa-4x"></i>
      },
      {name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tjallen27/',
      icon: <i className="fab fa-linkedin-in fa-4x"></i>
      }
    ];

    return (
      <div className="socialLinks">
        <ul>
          {links.map(function(item, index){
            return (<li key={index}><a href={item.url} target="_blank">{item.icon}</a></li>)
          })}
        </ul>
      </div>
    )
  }
}
