/*
 * @description: 
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-10-31 17:42:48
 * @LastEditTime: 2023-11-03 20:14:51
 */
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const a = '124';

  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  )
}
