/*
 * @description: 飞机
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 17:49:40
 * @LastEditTime: 2023-11-05 22:17:43
 */
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import Tabs from '@/components/Tabs';
import { HOME_FLIGHT_LIST, HOME_BANNER } from '@/constants/list';
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
      <View className="alipay-swiper" style={{ margin: '15px' }}>
        <Swiper className="advs-banner-bd" autoplay circular interval={3000}>
          {HOME_BANNER.map(item => {
            return (
              <SwiperItem key={item.id} className="item">
                <Image className="img" src={item.imgUrl}></Image>
              </SwiperItem>
            );
          })}
        </Swiper>
      </View>
    </View>
  );
}
