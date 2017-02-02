export default class Canvas {
  constructor({ element }) {
    Object.assign(this, {
      element,
      context: element.getContext(`2d`),
      previousState: {
        shouldDraw: undefined,
        x: undefined,
        y: undefined,
      }
    })
  }
  
  resize({ width, height }) {
    this.element.width = width
    this.element.height = height
  }
  
  setBrushProperties({ context }) {
    context.strokeStyle = `#fff`
    context.lineJoin = `round`
    context.lineWidth = 20
    context.lineCap = `round`
  }
  
  updateState({ x, y, shouldDraw }) {
    this.previousState = { ...this.state }
    this.state = { x, y, shouldDraw }
  }
  
  draw({ context }) {
    const { state, previousState } = this
    const { shouldDraw, x, y } = state
    
    // Start new path
    if (shouldDraw && !previousState.shouldDraw) {
      context.beginPath()
      context.moveTo(x, y)
    }
    
    // Move pen to latest position
    if (shouldDraw) {
      context.lineTo(x, y)
    }
    
    // Draw
    context.stroke()
  }
  
  update({ x, y, shouldDraw }) {
    const { context } = this
    this.updateState({ x, y, shouldDraw})
    this.setBrushProperties({ context })
    this.draw({ context })
  }
}