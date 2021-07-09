import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, Signin } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home title={'Car Inventory'}/>
          </Route>

          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/signin'>
            <Signin></Signin>
          </Route>

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();