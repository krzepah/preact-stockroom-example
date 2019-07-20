import createStore from 'stockroom/src'
import StoreWorker from 'worker-loader!./worker'

let store = createStore(new StoreWorker())

const increment = store.action('increment')

console.log('Initinialise')

store.subscribe( (p) => console.log(p) )

export default store;

export {
    increment
}
