import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  test: 'ledng'
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + action.count,
        test: action.parmas
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1,
         test: action.parmas
       }
     default:
       return state
  }
}
