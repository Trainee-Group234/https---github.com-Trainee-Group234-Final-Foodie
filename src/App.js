import React from 'react';
import LoginPage from './pages/LoginPage'
import Hotels from './pages/Hotels'
import Orders from './pages/Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import { Provider } from 'react-redux';
import store from './store';
import Main from './pages/Main'
import jwtDecode from 'jwt-decode';
import { CURRENT_USER } from './actions/types';
import { logout } from './actions/FoodieAction';
import setJwtToken from './security/setJwtToken';
import { adminLogout } from './actions/AdminAction';
import Table from './pages/Table';
import RemoveCategory from './pages/CustomPages/RemoveCategory';
import AddCategory from './pages/CustomPages/AddCategory';
import AddItem from './pages/CustomPages/AddItem';
import RemoveItem from './pages/CustomPages/RemoveItem';
import ComponentToPrint from './components/checkout';

const jwtToken = localStorage.jwtToken;
if(jwtToken){
  setJwtToken(jwtToken);
  const decoded = jwtDecode(jwtToken);
  store.dispatch({
    type: CURRENT_USER,
    payload: decoded
  })
  const cuurentTime = Date.now()/1000
  if(decoded.exp<cuurentTime){
    store.dispatch(logout())
    window.location.href = "/login"
  }
}
const admin = localStorage.admin
if(admin)
{const cuurentTime = Date.now()/1000
if(admin.exp<cuurentTime){
  store.dispatch(adminLogout())
  window.location.href = "/"
}}

function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/" component={Main}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/hotels" component={Hotels}></Route>
            <Route exact path="/order/:id" component={Orders}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/dashboard" component={AdminDashboard}></Route>
            <Route exact path="/table" component={Table}></Route>
            <Route exact path="/addcategory" component={AddCategory}></Route>
            <Route exact path="/removecategory" component={RemoveCategory}></Route>
            <Route exact path="/additem" component={AddItem}></Route>
            <Route exact path="/removeitem" component={RemoveItem}></Route>
            <Route exact path="/bill" component={ComponentToPrint}></Route>

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}



export default App;
