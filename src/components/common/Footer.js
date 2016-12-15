'use strict';
import React from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends React.Component {
  render(){
    return (
      <div>
        <h4>Footer</h4>
        <nav>
          <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/single-page" activeClassName="active">Page</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Footer;