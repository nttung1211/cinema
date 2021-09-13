import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from './constants/routes';
import Browse from './pages/Browse';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

interface Props {}

const App: FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.browse} component={Browse} />
        <Route exact path={ROUTES.signIn} component={SignIn} />
        <Route exact path={ROUTES.signUp} component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
