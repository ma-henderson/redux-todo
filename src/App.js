import './App.css';
import Todo from './Pages/Todo';
import {Route, BrowserRouter, Switch, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Todo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
