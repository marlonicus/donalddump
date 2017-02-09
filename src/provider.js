export default class Provider {
  constructor({ component, store }) {
    component.dispatch = action => store.dispatch(action)    
  }
  
  
}