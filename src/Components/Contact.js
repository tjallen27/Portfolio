import React, {Component} from 'react';
import Links from './Links';

export default class Contact extends Component{
  render(){
    return(
      <div className="contact">
        <ul>
        <h3>Get in touch</h3>
          <li>Drop me a message: <a href="mailto:tjallen91@hotmail.co.uk">tjallen91@homail.co.uk</a></li>
          <Links />
        </ul>
      </div>
    )
  }
}
