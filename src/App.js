import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Laboratory  from './pages/Laboratory'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Laboratory></Laboratory>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
