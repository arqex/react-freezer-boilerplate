import React from 'react';
import {Router} from 'react-router';
import freezer from '../../freezer';

export default class App extends React.Component {
  constructor( props ){
		super( props );
		this.publishRouter( props );
  }

  render(){
    // Render the updated location accessible to all the components
		Router.location = this.props.location;

    return (
      <div id="main">
        { React.cloneElement(this.props.children, {store: freezer.get()}) }
      </div>
    );
  }

  componentDidMount(){
    freezer.on('update', () => this.forceUpdate() );
  }

  /**
   * Makes the current location, history and routes accessible
   * from the Router object.
   */
	publishRouter( props ){
		var routes = {};

		// Render the router accessible without contexts
		Router.history = props.history;
		Router.location = props.location;
    Router.routes = routes;

    // Use route names as constants
    if( props.routes[0].childRoutes ){
  		props.routes[0].childRoutes.forEach( function( r ){
  			var pathName = r.path[0] === '/' ? r.path.slice(1) : r.path;
  			routes[ pathName ] = r.path;
  		});
    }

		routes.home = '/';
		routes.notfound = '*';
	}
}
