const { assign } = Object

export default class Store {  
  constructor({ reducers = {} } = {}) {
    const reducerKeys = Object.keys(reducers)
    assign(this, {
      reducers,
      reducerKeys,
      state: this.getInitialStateObjectFromReducerKeys({ reducerKeys }),
    })
  }
  
  mapStoreToStateObject(state, store) {
    return {
      ...state,
      [store]: {},
    }
  }

  getInitialStateObjectFromReducerKeys({ reducerKeys = [] } = {}) {
    return reducerKeys.reduce(this.mapStoreToStateObject, {})
  }
  
  reduceStateObject({ state, store, action, reducer }) {
    return {
      ...state,
      [store]: reducer({ 
        state: state[store], 
        action ,
      }),
    }
  }

  dispatch({ type, value } = {}) {
    const { reducers, reducerKeys, state, reduceStateObject } = this
    const action = { type, value }
    const nextState = reducerKeys.reduce((state, store) => reduceStateObject({ 
      state, 
      store, 
      action,
      reducer: reducers[store], 
    }), { ...state })
    
    this.logStateChange({ type, state, action, nextState })
    
    assign(this, {
      state: nextState,
    })
  }
  
  logStateChange({ type, state, action, nextState }) {
    console.group(`Action @ ${type}`)
    console.log(`prev state - `, state)    
    console.log(`action - `, action)
    console.log(`next state - `, nextState)
    console.groupEnd()
  }
}