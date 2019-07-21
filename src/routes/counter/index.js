import { h, Component } from 'preact';
import style from './style';

import store from '../../store';
import { increment } from '../../store';
import { connect } from 'unistore/preact'

const CounterBase = ({count, increment}) => <div class={style.profile}>
    <br />
    <br />
    Hello
    <br />
    count is : { count }
    <br/>
    <br />
    <button onClick={increment}>increment</button>
</div>

const Counter = connect(
    (state, props) => state,
    (state, props) => ({
        increment: 'increment'
    })
)(CounterBase)

export default Counter;
