import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Components/Login/Login/Login';
import Home from './Components/Home/Home/Home';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Orders from './Components/Dashboard/Orders/Orders';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import AdminServiceList from './Components/Dashboard/AdminServiceList/AdminServiceList';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const userGlobalStates = {
    user: [loggedInUser, setLoggedInUser],
  };

  return (
    <UserContext.Provider value={userGlobalStates}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/portfolio">
            <ComingSoon></ComingSoon>
          </Route>
          <Route path="/ourTeam">
            <ComingSoon></ComingSoon>
          </Route>
          <Route path="/contact">
            <ComingSoon></ComingSoon>
          </Route>
          <PrivateRoute exact path="/my-orders">
						<MyOrders></MyOrders>
					</PrivateRoute>
					<PrivateRoute exact path="/orders/:_id">
						<Orders></Orders>
					</PrivateRoute>
					<PrivateRoute exact path="/serviceList">
						<ServiceList></ServiceList>
					</PrivateRoute>
					<PrivateRoute exact path="/review">
						<Feedback></Feedback>
					</PrivateRoute>
					<PrivateRoute exact path="/serviceList-admin">
						<AdminServiceList></AdminServiceList>
					</PrivateRoute>
          <PrivateRoute exact path="/feedback">
						<Feedback></Feedback>
					</PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
