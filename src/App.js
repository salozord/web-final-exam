import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import ListaPeliculas from './components/ListaPeliculas';

class App extends Component {

  render() { 
    return ( 
      <div className="main">
        <nav className="navbar navbar-expand-md bg-info navbar-light mb-4">
          <div className="navbar-brand d-flex align-items-center ml-3" href="/" title="Movies">
            <img src="camera.png" className="d-inline-block mr-2" width="45" height="45" alt="Movies logo" />
            <span className="font-weight-bold">
              <FormattedMessage id="Movies" />
            </span>
          </div>
        </nav>
        <ListaPeliculas />
      </div>
    );
  }
}
 
export default App;
