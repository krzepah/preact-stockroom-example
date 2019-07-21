import VirtualList from 'preact-virtual-list/src';

import style from './style';

// Generate 100,000 rows of data
const DATA = [];
for (let x=1e5; x--; ) DATA[x] = `Item #${x+1}`;

// renders a single row
const Row = row => (
    <div class={style.row}>{row}</div>
);

console.log(DATA.length);

const Demo = () => <VirtualList class={style.list} data={DATA} rowHeight={30} renderRow={Row} />

const Page = () => <div style="margin-top:50px; padding:20px;">
    <h1>Preact-virtual-list</h1>
    <div style="position:relative; height:100vh;">
        <Demo />
    </div>
</div>;

export default Page;
