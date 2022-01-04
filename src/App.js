import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Switch, Route, Router, useRouteMatch } from "react-router-dom";
import Aboutus from './components/webpage/Aboutus/about-us';
import Contacts from './components/webpage/Contacts/contacts';
import RegisterForm from './components/MainPage/registerForm';
import LoginForm from './components/MainPage/loginForm';
import tradePadmin from './components/TradingPlatform/Admin/TradeingPlatformInterface';
import tradePusers from './components/TradingPlatform/Users/TradeingPlatformInterface';


const MakeRouter = () => {
  return (
    <Switch>
      <Route exact path="/eplatform/:users" component={tradePusers}/>
      <Route exact path="/eplatform/:admin" component={tradePadmin}/>
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/home" component={MainPage} />
      <Route exact path="" component={MainPage} />
      <Route exact path="/aboutus" component={Aboutus}/>
      <Route exact path="/contactus" component={Contacts}/>    
      {/*<Route exact path="/profile" component={ProfilePage} />*/}
      {/*<Route exact path="/" component={MainPage} />*/}
    </Switch>
  );
};




function App() {
  return (
    <div>
        {MakeRouter()}
    </div>

  );
}

export default App;
