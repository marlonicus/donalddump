import { randomRange, take } from '../utils'
import Color from 'color'

const SHIT_AMOUNT_MIN = 30
const SHIT_AMOUNT_MAX = 60
const SHIT_SPREAD = 20
const SHIT_SIZE_RAND_MIN = 1
const SHIT_SIZE_RAND_MAX = 10
const SHIT_COLOUR = Color({ r: 139, g: 69, b: 19 })
const SHIT_COLOUR_RAND_SHADE_MIN = 0.5
const SHIT_COLOUR_RAND_SHADE_MAX = 0.7
const SHIT_ALPHA_RAND_MIN = 0.4
const SHIT_ALPHA_RAND_MAX = 0.6

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
  
  getRandomShitShadeRange() {
    return Math.random() * (SHIT_COLOUR_RAND_SHADE_MAX - SHIT_COLOUR_RAND_SHADE_MIN) + SHIT_COLOUR_RAND_SHADE_MIN
  }
  
  getRandomShitAlphaRange() {
    return Math.random() * (SHIT_ALPHA_RAND_MAX - SHIT_ALPHA_RAND_MIN) + SHIT_ALPHA_RAND_MIN
  }
  
  getRandomShitColour({ colour = SHIT_COLOUR } = {}) {
    return colour.darken(this.getRandomShitShadeRange())
                 .lighten(this.getRandomShitShadeRange())
                 .fade(this.getRandomShitAlphaRange())
  }
  
  setBrushProperties({ context, lineWidth, colour }) {
    context.strokeStyle = colour || this.getRandomShitColour({ colour })
    context.lineWidth = lineWidth || randomRange(SHIT_SIZE_RAND_MIN, SHIT_SIZE_RAND_MAX)
    context.lineJoin = `round`
    context.lineCap = `round`
  }
  
  updateState({ x, y, shouldDraw }) {
    this.previousState = { ...this.state }
    this.state = { x, y, shouldDraw }
  }
  
  drawRandomCircle({ context, x, y }) {
    const randX = x + randomRange(0, SHIT_SPREAD) - SHIT_SPREAD / 2
    const randY = y + randomRange(0, SHIT_SPREAD) - SHIT_SPREAD / 2
    this.setBrushProperties({ context })
    context.beginPath()
    context.moveTo(randX, randY)
    context.lineTo(randX, randY)
    context.stroke()
  }
  
  draw({ context }) {
    const { state, previousState } = this
    const { x, y } = state
    take(randomRange(SHIT_AMOUNT_MIN, SHIT_AMOUNT_MAX)).map(() => this.drawRandomCircle({ context, x, y }))
  }
  
  update({ x, y, shouldDraw }) {
    const { context } = this
    this.updateState({ x, y, shouldDraw})
    
    if (shouldDraw) {  

      this.draw({ context })
    }
  }
}