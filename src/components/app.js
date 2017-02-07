// import Canvas from './canvas'
// import ShitCannon from './shit-cannon'

import { mouseDown, mouseMove, mouseUp } from '../actions/app'

export default class App {
  constructor({ canvasElement, store }) {
    Object.assign(this, {
      store,
      isMouseDown: false,
      mousePosition: {
        x: undefined,
        y: undefined,
      },
      // shitCannon: new ShitCannon(),
      // canvas: new Canvas({
      //   element: canvasElement,
      // }),
    })
    
    return this
  }
  
  // // // setShitPosition({ x, y }) {
  // // //   this.shit = { x, y }
  // // // }
  // // // 
  // // onWindowResize({ innerWidth: width, innerHeight: height } = window) {
  // //   this.canvas.resize({ width, height })
  // // }
  // 
  // onMouseDown({ x, y }) {
  //   this.isShitting = true
  //   this.setShitPosition({ x, y })
  // }
  // 
  // onMouseMove({ x, y }) {
  //   this.setShitPosition({ x, y })
  // }
  // 
  // onMouseUp({ x, y }) {
  //   this.isShitting = false
  //   this.setShitPosition({ x, y })
  // }
  
  // onRequestAnimationFrame() {
  //   const {
  //     shitCannon,
  //     isShitting,
  //     shit,
  //   } = this
  //   
  //   shitCannon.update({ 
  //     targetX: shit.x, 
  //     targetY: shit.y, 
  //     isShitting,
  //   })
  //   
  //   /*this.canvas.update({
  //     ...this.shit,
  //     shouldDraw: this.isShitting,
  //   })*/
  //   
  //   window.requestAnimationFrame(() => this.onRequestAnimationFrame())
  // }
  // 
  
  
  init() {
    const {
      dispatch
    } = this.store
    
    window.addEventListener(`mousedown`, event => dispatch(mouseDown(event)))
    window.addEventListener(`mouseup`, event => dispatch(mouseUp(event)))
    // this.onWindowResize()
    // window.addEventListener(`resize`, () => this.onWindowResize())
    // window.addEventListener(`mousedown`, event => this.onMouseDown(event))
    // window.addEventListener(`mousemove`, event => this.onMouseMove(event))
    // window.addEventListener(`mouseup`, event => this.onMouseUp(event))
    // window.requestAnimationFrame(() => this.onRequestAnimationFrame())
  }
}