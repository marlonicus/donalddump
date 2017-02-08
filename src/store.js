const { assign } = Object

export default class Store {  
  constructor({ reducers }) {
    const reducerKeys = Object.keys(reducers)
    assign(this, {
      reducers,
      reducerKeys,
      state: this.getInitialStateObjectFromReducerKeys({ reducerKeys }),
    })
  }
  
  getInitialStateObjectFromReducerKeys({ reducerKeys }) {
    return reducerKeys.map(key => {
      return { [key]: {} }
    })
  } 

  dispatch({ type, value }) {
    const action = { type, value }
    const nextState = this.reducerKeys.reduce((prev, curr) => {
      return this.reducers[curr]({
        state: this.state[curr], 
        action,
      })
    }, {})
    
    console.group(`Action @ ${type}`)
    console.log(`prev state - `, this.state)    
    console.log(`action - `, action)
    console.log(`next state - `, nextState)
    console.groupEnd()
    
    assign(this, {
      state: nextState,
    })
  }
}