import createStore from 'stockroom/worker'

let store = createStore({
    count: 0,
    another: "baz"
})

store.registerActions( store => ({
  increment: ({ count }) => ({ count: count+1 })
}) )
