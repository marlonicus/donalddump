import ShitParticle from './shit-particle'
import { take } from '../utils'

const { assign } = Object

export default class ShitCannon {
  constructor() {
      assign(this, {
        shitPile: [],
      })
  }
  
  getNewShitParticle({ targetX, targetY }) {
    return new ShitParticle({
      targetX,
      targetY,
      x: 0,
      y: 0,
    })
  }
  
  spurt({ targetX, targetY }) {
    const { shitPile } = this
    
    assign(this, {
      shitPile: shitPile.concat(take(1).map(() => this.getNewShitParticle({ targetX, targetY }))),
    })
  }
  
  updateShitParticle({ particle }) {
    return particle.update()
  }
  
  update({ targetX, targetY, isShitting }) {
    if (isShitting) {
      this.spurt({ targetX, targetY })
    }
    
    assign(this, {
      shitPile: this.shitPile.map(particle => this.updateShitParticle({ particle })),
    })
  }
}