import App from './components/app'
import Store from './store'
import appReducer from './reducers/app'

new App({
  canvasElement: document.getElementById('canvas'),
  store: new Store({
    reducers: {
      app: appReducer,
    },
  }),
}).init()