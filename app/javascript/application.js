// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import App from '../components/App';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);