/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-10-31 17:42:48
 * @LastEditTime: 2023-11-05 14:21:54
 */
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import * as sort from '@/utils/sort';
import './index.less';

export default function Index() {
  useLoad(() => {
    const ary = [1, 3, 2, 10, 6, 5, 67];
    console.log(sort.quickSort(ary), '测试路径别名');
  });

  return (
    <View className="index">
      <Text>我是首页</Text>
    </View>
  );
}
