
import createStore from 'stockroom'
import StoreWorker from 'worker-loader!./worker'

let store = createStore(new StoreWorker())

let increment = store.action('increment')
store.subscribe(console.log)

export default store;
