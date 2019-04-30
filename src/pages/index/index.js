import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtAvatar } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../store/actions/counter'

import './index.less'

@connect(({ counter }) => ({ counter }), (dispatch) => ({
  add (count) {
    dispatch(add(count))
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd (count) {
    dispatch(asyncAdd(count))
  }
}))

class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props.counter, nextProps.counter)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    let { num, test, } = this.props.counter
    let { add, asyncAdd, dec } = this.props
    return (
      <View className='index'>
        <AtAvatar circle size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
        <View><Text className='num-text'>{num}</Text></View>
        <View><Text className='num-text'>Hello, World,{test}</Text></View>
        <View>
          <AtButton type='secondary' className='add_btn' onClick={() => add(2)}>+</AtButton>
          <AtButton type='secondary' className='add_btn' onClick={dec}>-</AtButton>
        </View>
        <AtButton type='primary' className='dec_btn' onClick={() => asyncAdd(2)}>async</AtButton>
      </View>
    )
  }
}

export default Index
