import Canvas from './canvas'

export default class App {
  constructor({ canvasElement }) {
    Object.assign(this, {
      isShitting: false,
      shit: {
        x: undefined,
        y: undefined,  
      },
      canvas: new Canvas({
        element: canvasElement
      }),
    })
    
    return this
  }
  
  setShitPosition({ x, y }) {
    this.shit = { x, y }
  }
  
  onWindowResize({ innerWidth: width, innerHeight: height } = window) {
    this.canvas.resize({ width, height })
  }
  
  onMouseDown({ x, y }) {
    this.isShitting = true
    this.setShitPosition({ x, y })
  }
  
  onMouseMove({ x, y }) {
    this.setShitPosition({ x, y })
  }
  
  onMouseUp({ x, y }) {
    this.isShitting = false
    this.setShitPosition({ x, y })
  }
  
  onRequestAnimationFrame() {
    this.canvas.update({
      ...this.shit,
      shouldDraw: this.isShitting,
    })
    
    window.requestAnimationFrame(() => this.onRequestAnimationFrame())
  }
  
  init() {
    this.onWindowResize()
    
    window.addEventListener(`resize`, () => this.onWindowResize())
    window.addEventListener(`mousedown`, event => this.onMouseDown(event))
    window.addEventListener(`mousemove`, event => this.onMouseMove(event))
    window.addEventListener(`mouseup`, event => this.onMouseUp(event))
    window.requestAnimationFrame(() => this.onRequestAnimationFrame())
  }
}