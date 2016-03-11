import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the app container.</h1>
        {this.props.children}
      </div>);
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <p>This is the homepage.</p>
        <Link to="/about">Go to About</Link>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <p>About Page</p>
        <Link to="/">Go Back Home</Link>
      </div>);
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById("body")
);
