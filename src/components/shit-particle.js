const { assign } = Object

export default class ShitParticle {
  constructor({ targetX, targetY, startX: x, startY: y }) {
    assign(this, {
      targetX,
      targetY,
      x,
      y,
    })
  }
  
  update() {
    const { x, y, targetX, targetY } = this
    assign(this, {
      x: x + ((targetX - x) * 0.9),
      y: y + ((targetY - y) * 0.9),
    })
    
    return this
  }
}