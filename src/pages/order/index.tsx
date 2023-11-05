/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 00:39:24
 * @LastEditTime: 2023-11-05 14:06:42
 */
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.less';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="order">
      <Text>我是订单页</Text>
    </View>
  );
}
