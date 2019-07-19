import { h, Component } from 'preact';
import style from './style';

import store from '../../store';
import { connect } from 'unistore/preact'

class ProfileBase extends Component {
	state = {
		time: Date.now(),
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
    render({ user, count, increment }, { time }) {
        console.log('here');
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
			</div>
		);
	}
}

const Profile = connect(
    (state, props) => state,
    (state, props) => ({
        count: store.action('increment')
    })
)

export default Profile;
