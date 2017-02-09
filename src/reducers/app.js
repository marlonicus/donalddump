import {
  MOUSE_DOWN,
  MOUSE_UP,
  MOUSE_MOVE,
} from '../actions/app'
//
// import {
//   ADD_AIRBOURNE_SHIT,
// } from '../actions/shit-cannon'

const initialState = {
  isMouseDown: undefined,
  mousePosition: {
    x: undefined,
    y: undefined,
  },
}

export default ({ state = initialState, action = {} } = {}) => {
	console.log(`no state set`, state)
  switch (action.type) {
    case MOUSE_DOWN:
      return {
        ...state,
        isMouseDown: true,
        mousePosition: {
          ...action.value,
        },
      }

    case MOUSE_UP:
      return {
        ...state,
        isMouseDown: false,
        mousePosition: {
          ...action.value,
        },
      }

    case MOUSE_MOVE:
      return {
        ...state,
        mousePosition: {
          ...action.value,
        },
      }
  }

  return { ...state }
}
