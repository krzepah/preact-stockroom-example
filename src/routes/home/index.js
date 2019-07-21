import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Hello !</h1>
        <p>Here is a list of component demoed in that sandbox</p>
        <ul>
            <li><a href="/vlist">preact-virtual-list</a></li>
        </ul>
	</div>
);

export default Home;
