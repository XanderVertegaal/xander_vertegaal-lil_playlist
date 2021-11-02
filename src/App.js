import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
