'use strict';
import React, {PropTypes} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <hr />
        {this.props.children}
        <hr />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;