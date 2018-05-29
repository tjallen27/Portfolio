import React, {Component} from 'react';
import barzurkImg from '../assets/barzurk.png';
import stripeImg from '../assets/stripe.png';



export default class Projects extends Component {
  render(){
    const items = [
      {
        name: 'Stripe Subscription Template',
        url: 'https://arcane-lowlands-69670.herokuapp.com',
        background: stripeImg,
        langs: 'NodeJS, Stripe API'
      },
      {
        name: 'Barzurk: Job Search App',
        url: 'https://intense-fortress-27919.herokuapp.com/',
        background: barzurkImg,
        langs: 'NodeJS, ExpressJS'
      }
    ];

    return (
      <div className="projects">
        <ul>
        <h3>Personal projects</h3>
        {items.map(function(item, index){
           return (
            <li style={{backgroundImage: "url(" + item.background + ")"}} key={index}>
              <p>{item.langs}</p>
              <a href={item.url} target="_blank">visit site</a>
            </li>)
         })}
        </ul>

      </div>
    )
  }
}
