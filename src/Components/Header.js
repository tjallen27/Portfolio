import React, {Component} from 'react';

export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <h1 className="header-title">Thomas Allen</h1>
        <div className="header-sub">Junior Web Developer</div>
        <div className="header-current">Currently @WCRS</div>
      </div>
    )
  }
}