import React, { Component } from 'react';

import Books from './screens/Books';

class Router extends Component {
  render() {
    const path = window.location.href;

    if (path.endsWith('/books')) return (<Books />);
    // Other paths

    return <span>404</span>;
  }
}

export default Router;
