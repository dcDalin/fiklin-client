import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../Routes';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Tours from '../pages/Tours';
import TicketResale from '../pages/TicketResale';
import SetToken from '../components/Auth/SetToken';
import LogOut from '../components/Auth/LogOut';
import styles from './Routes.module.scss';
import Dashboard from '../pages/Dashboard';
import ScrollToTop from './ScrollToTop';

const Routes: React.FC = () => {
  return (
    <div className={styles.rootBody}>
      <ScrollToTop />
      <Switch>
        <Route path={routes.AUTH} component={SetToken} />
        <Route path={routes.EVENTS}>
          <Events />
        </Route>
        <Route path={routes.TOURS}>
          <Tours />
        </Route>
        <Route path={routes.TICKE_RESALE}>
          <TicketResale />
        </Route>
        <Route path={routes.LOGOUT}>
          <LogOut />
        </Route>
        <Route path={routes.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
