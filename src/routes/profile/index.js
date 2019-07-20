import { h, Component } from 'preact';
import style from './style';

import store from '../../store';
import { increment } from '../../store';
import { connect } from 'unistore/preact'

const ProfileBase = ({user, count, increment}) => <div class={style.profile}>
    <br />
    <br />
    Hello { user }
    <br />
    count is : { count }
    <br/>
    <br />
    <button onClick={increment}>increment</button>
</div>

const Profile = connect(
    (state, props) => state,
    (state, props) => ({
        increment: () => {
            increment();
        }
    })
)(ProfileBase)

export default Profile;
