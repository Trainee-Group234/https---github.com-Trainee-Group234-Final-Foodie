import React from 'react';
import LoginPage from './pages/LoginPage'
import Hotels from './pages/Hotels'
import Orders from './pages/Orders'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './pages/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/hotels" component={Hotels}></Route>
        <Route exact path="/order/:id" component={Orders}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/dashboard" component={AdminDashboard}></Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
