import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home/Home';
import Step2 from '../containers/Step2/Step2';
import Step3 from '../containers/Step3/Step3';
import Step4 from '../containers/Step4/Step4';
import Step5 from '../containers/Step5/Step5';
import NotFound from '../containers/NotFound/NotFound';


const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/step2" component={Step2} />
      <Route exact path="/step3" component={Step3} />
      <Route exact path="/step4" component={Step4} />
      <Route exact path="/step5" component={Step5} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
