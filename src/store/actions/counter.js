import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = (count = 1) => {
  return {
    type: ADD,
    parmas: 'hello ledng',
    count
  }
}
export const minus = () => {
  return {
    type: MINUS,
    parmas: 'hello ledng-xx'
  }
}

// 异步的action
export function asyncAdd (count) {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(count))
    }, 2000)
  }
}
