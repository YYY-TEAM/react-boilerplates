/**
 * @file 维护路由规则
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Fri, 2018-01-12 16:59:41
 *
 * Last Modified: Sun, 2018-10-07 16:34:18
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */

import React, { PureComponent } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import Home from '../../containers/HomePage';
import Clock from '../../containers/ClockPage';
import NotFound from '../../containers/NotFound';

@withRouter
class Main extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clock" component={Clock} />
          {/* 兜底的路由 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
