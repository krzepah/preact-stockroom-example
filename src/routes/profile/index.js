import { h, Component } from 'preact';
import style from './style';

import { connect } from 'unistore/preact'

const ProfileBase = ({ user, count, increment }) => (
    <div class={style.profile}>
        <h1>Hello { user }</h1>
        Count : { count }
        <br />
        <br />
        <button onClick={increment}>Increment</button>
    </div>
)

const Profile = connect(
    (state, props) => state,
    (state, props) => ({
        increment: (state) => ({ count: state.count + 1 })
    })
)(ProfileBase)

export default Profile;
