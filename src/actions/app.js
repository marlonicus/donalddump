export const TICK = `App.TICK`
export const MOUSE_DOWN = `App.MOUSE_DOWN`
export const MOUSE_UP = `App.MOUSE_UP`
export const MOUSE_MOVE = `App.MOUSE_MOVE`

export const tick = ({ timestamp }) => {
  return {
    type: TICK,
    value: { timestamp },
    mute: true,
  }
}

export const mouseDown = ({ x, y }) => {
  return {
    type: MOUSE_DOWN,
    value: { x, y },
  }
}

export const mouseUp = ({ x, y }) => {
  return {
    type: MOUSE_UP,
    value: { x, y },
  }
}

export const mouseMove = ({ x, y }) => {
  return {
    type: MOUSE_MOVE,
    value: { x, y },
    mute: true,
  }
}