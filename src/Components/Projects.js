import React, {Component} from 'react';
import barzurkImg from '../assets/barzurk.png';
import stripeImg from '../assets/stripe.png';
import klickImg from '../assets/klick.png';



export default class Projects extends Component {
  render(){
    const items = [
      {
        name: 'React Stripe Store',
        url: 'https://github.com/tjallen27/Music-Shop-Template',
        background: klickImg,
        langs: 'ReactJS, ExpressJS, Stripe API'
      },
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
            <li key={index}>

              <a href={item.url} target="_blank">
                <div style={{backgroundImage: "url(" + item.background + ")"}}></div>
              </a>
            </li>)

         })}
        </ul>

      </div>
    )
  }
}
