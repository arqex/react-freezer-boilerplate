import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/app/App';
import Home from './modules/app/Home';

var routes = (
	<Route path="/" component={ App } >
		<IndexRoute component={ Home } />
  </Route>
);

export default routes;
