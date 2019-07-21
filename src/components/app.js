import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Counter from '../routes/counter';
import Vl from '../routes/vl';

import { Provider } from 'unistore/preact';

import store from '../store';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
        return (
            <Provider store={store}>
                <div id="app">
                    <Header />
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        <Counter path="/counter/"/>
                        <Vl path="/vlist" />
                    </Router>
                </div>
            </Provider>
		);
	}
}
