import React from 'react';
import './App.css';

import Signup from './components/signup/Signup';
import Main from './components/thebasics/Main';
import StepOne from './components/thebasics/StepOne';
import Elligibility from './components/thebasics/Elligibility';
import StepTwo from './components/thebasics/StepTwo';
import StepThree from './components/thebasics/StepThree';
import Coverage from './components/thebasics/Coverage';
import MoreDetail from './components/thebasics/MoreDetail';
import Verification from './components/thebasics/Verification';
import Covered from './components/thebasics/Covered';
import Health from './components/thebasics/Health';
import HealthPay from './components/thebasics/HealthPay';
import Shipping from './components/thebasics/Shipping';
import Billing from './components/thebasics/Billing';
import Visit from './components/thebasics/Visit';
import Confirmation from './components/thebasics/Confirmation';


import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path='/' component={Signup}></Route>
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/main' component={Main}></Route>
              <Route exact path='/stepOne' component={StepOne}></Route>
              <Route exact path='/elligibility' component={Elligibility}></Route>
              <Route exact path='/stepTwo' component={StepTwo}></Route>
              <Route exact path='/stepThree' component={StepThree}></Route>
              <Route exact path='/coverage' component={Coverage}></Route>
              <Route exact path='/moredetail' component={MoreDetail}></Route>
              <Route exact path='/verification' component={Verification}></Route>
              <Route exact path='/covered' component={Covered}></Route>
              <Route exact path='/health' component={Health}></Route>
              <Route exact path='/healthpay' component={HealthPay}></Route>
              <Route exact path='/Shipping' component={Shipping}></Route>
              <Route exact path='/billing' component={Billing}></Route>
              <Route exact path='/visit' component={Visit}></Route>
              <Route exact path='/confirmation' component={Confirmation}></Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
