// import Canvas from './canvas'
// import ShitCannon from './shit-cannon'

import Component from './component'
import { mouseDown, mouseMove, mouseUp, tick } from '../actions/app'
import { connect } from '../store'

export class App extends Component {
  // constructor({ canvasElement }) {
    // Object.assign(this, {
      // store,
      // shitCannon: new ShitCannon(),
      // canvas: new Canvas({
      //   element: canvasElement,
      // }),
    // })
  // }

  // onStoreUpdate({ store }) {
  //
  // }

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
    // this.shitCannon.update({
    //
    // })

    // this.dispatch(tick({
    //   timestamp: Date.now(),
    // }))
		//
    // window.requestAnimationFrame(() => this.onRequestAnimationFrame())
    // const {
    //   shitCannon,
    //   isShitting,
    //   shit,
    // } = this

    // shitCannon.update({
    //   targetX: shit.x,
    //   targetY: shit.y,
    //   isShitting,
    // })



    /*this.canvas.update({
      ...this.shit,
      shouldDraw: this.isShitting,
    })*/
  // }

  // update(state) {
	//
  // }


  // init() {
  //   const { dispatch } = this
	//
  //   window.addEventListener(`mousedown`, event => dispatch(mouseDown(event)))
  //   window.addEventListener(`mouseup`, event => dispatch(mouseUp(event)))
  //   window.addEventListener(`mousemove`, event => dispatch(mouseMove(event)))
  //   window.requestAnimationFrame(() => this.onRequestAnimationFrame())
	//
  //   // window.addEventListener(`resize`, () => this.onWindowResize())
  //   // window.addEventListener(`mousedown`, event => this.onMouseDown(event))
  //   // window.addEventListener(`mouseup`, event => this.onMouseUp(event))
  // }
}

export default connect(App, `app`)
