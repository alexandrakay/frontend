import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";

import "./App.css";
import Login from "./components/Forms/Login.js";
import SignUp from "./components/Forms/SignUp.js";
import { UserProvider } from "./components/contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Comments from "./components/Comments";
import UserProfile from "./components/UserProfile";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
// import Container from "./components/LandingPage"
function App() {
  return (
    <UserProvider>
      <div className="App">
         <NavBar />
        <Route path="/login">
          <Login />
        </Route>
       
        <Route path="/signup">
          <SignUp />
        </Route>
       
        {/* <Route path="/landingpage">
          <Container />
        </Route> */}
    

        <Switch>
          
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/comments" component={Comments} />
          <PrivateRoute exact path="/user/:id" component={UserProfile} />
          <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>
        
      </div>
    </UserProvider>
  );
}

export default App;