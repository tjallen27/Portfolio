import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Thomas Allen</h1>
        <div className="header-sub">Full Stack Engineer</div>
        <div className="header-current">Currently @Yorlet</div>
        <div className="header-current">
          Previous: Junior Web Developer - WCRS
        </div>
      </div>
    );
  }
}
