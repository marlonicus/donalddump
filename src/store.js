/*eslint no-console: "off"*/

const { assign } = Object

export default class Store {
	constructor({reducers = {}} = {}) {
		const reducerKeys = Object.keys(reducers)
		assign(this, {
			reducers,
			reducerKeys,
			subscribers: [],
			state: this.getInitialStateObjectFromReducerKeys({reducerKeys, reducers}),
		})

		// setTimeout(() => {
		// 	this.dispatch({
		// 		type: `STORE_INIT`,
		// 	})
		// })
	}

	mapStoreToStateObject({ state, store, reducer }) {
		return {
			...state,
			[store]: reducer(),
		}
	}

	getInitialStateObjectFromReducerKeys({reducerKeys = [], reducers } = {}) {
		return reducerKeys.reduce((state, store) => {
			return this.mapStoreToStateObject({
				state,
				store,
				reducer: reducers[store],
			})
		}, {})
	}

	reduceStateObject({state, store, action, reducer}) {
		return {
			...state,
			[store]: reducer({
				state: state[store],
				action,
			}),
		}
	}

	dispatch({type = ``, value = ``, mute} = {}) {
		const {reducers, reducerKeys, state, reduceStateObject} = this
		const action = {
			type,
			value,
		}
		const nextState = reducerKeys.reduce((state, store) => reduceStateObject({
			state,
			store,
			action,
			reducer: reducers[store],
		}), { ...state })

		!mute && this.logStateChange({type, state, action, nextState})
		this.setState({ state: nextState })
	}

	setState({state}) {
		assign(this, {state})
		this.onStateUpdate({state})
	}

	onStateUpdate() {
		this.subscribers.map(subscriber => subscriber(this))
	}

	subscribe(callback) {
		assign(this, { subscribers: [...this.subscribers, callback]})
		callback(this)
	}

	logStateChange({type, state, action, nextState}) {
		console.group(`Action @ ${type}`)
		console.log(`prev state\t`, state)
		console.log(`action\t\t`, action)
		console.log(`next state\t`, nextState)
		console.groupEnd()
	}
}

export const connect = (Component, name) => {
	return class ConnectedComponent extends Component {
		setState(store) {
			console.log(`ConnectedComponent.setState()`)
			if (store instanceof Store) {
				this.store = store
				super.setState(store.state[name])
			}
			else {

			}
		}
	}
}
