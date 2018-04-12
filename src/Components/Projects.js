import React, {Component} from 'react';



export default class Projects extends Component {
  render(){
    const items = [
      {
        name: 'Stripe Subscription Template',
        url: 'https://arcane-lowlands-69670.herokuapp.com'},
      {
        name: 'Barzurk: Job Search App',
        url: 'https://intense-fortress-27919.herokuapp.com/'}
    ];

    return (
      <div className="projects">

        <ul>
        <h3>Personal Projects</h3>
        {items.map(function(item, index){
           return (<li key={index}><a href={item.url} target="_blank">{item.name}</a></li>)
         })}
        </ul>
      </div>
    )
  }
}
