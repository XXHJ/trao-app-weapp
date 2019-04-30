import { bindActionCreators } from 'redux'
import {
  ADD,
  MINUS
} from '../constants/counter'
import Api from '../../service/api'
import store from '../index'

// 发送请求
export const addGet = (count = 1) => {
  return (dispatch) => {
    Api.get('https://www.baidu.com', { name: 'xx', age: 26, count }).then(res => {
      console.log(res)
      dispatch(add(count))
    })
  }
}

const add = (count = 1) => {
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
      dispatch(addGet(count))
    }, 2000)
  }
}

export default bindActionCreators({
  minus,
  asyncAdd,
  addGet
}, store.dispatch)
