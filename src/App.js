import React from 'react';
import About from './About';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Switch>
          <Route path="/" component={<Home/>}></Route>
          <Route path="about" component={<About/>}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
