/*
 * @description: 飞机
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 17:49:40
 * @LastEditTime: 2023-11-05 21:45:29
 */
import { View, SwiperItem } from '@tarojs/components';
import Tabs from '@/components/Tabs';
import { HOME_FLIGHT_LIST } from '@/constants/list';
import './index.less';

export default function Flight() {
  const handleTabClick = id => {
    console.log(id);
  };
  return (
    <View className="flight-container">
      <View className="flight-top">
        <Tabs
          tabList={HOME_FLIGHT_LIST}
          initTab={HOME_FLIGHT_LIST[0]['id']}
          className="flight_tab"
          onChange={handleTabClick}
        >
          <SwiperItem>111</SwiperItem>
          <SwiperItem>222</SwiperItem>
          <SwiperItem>333</SwiperItem>
        </Tabs>
      </View>
    </View>
  );
}
