/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-10-31 17:42:48
 * @LastEditTime: 2023-11-05 13:19:32
 */
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.less';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="index">
      <Text>我是首页</Text>
    </View>
  );
}
