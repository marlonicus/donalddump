import App from './components/app'
import Store from './store'
import appReducer from './reducers/app'

const store = new Store({
	reducers: {
		app: appReducer,
	},
})

const app = new App({
	canvasElement: document.getElementById('canvas'),
})

store.subscribe(state => {
	app.setState(state)
})
