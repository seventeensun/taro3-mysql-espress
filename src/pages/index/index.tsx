/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-10-31 17:42:48
 * @LastEditTime: 2023-11-05 18:46:59
 */
import { useState } from 'react';
import { View } from '@tarojs/components';
import cls from 'classnames';
import Flight from './components/flight';
import * as LIST from '@/constants/list';
import './index.less';

export default function Index() {
  const [tabI, setTabI] = useState<number>(0);

  const innerStyle = {
    width: `${100 / LIST.HOME_TAB_LIST.length}%`,
    transform: `translateX(${tabI * 100}%)`
  };

  const chidrenMap = () => {
    const map = {
      0: () => <Flight />,
      1: () => <View>火车票</View>,
      2: () => <View>酒店</View>,
      3: () => <View>汽车票</View>
    };
    return map[tabI]();
  };

  console.log(tabI, 'tabI');
  return (
    <View className="index">
      <View className="index_tab">
        {LIST.HOME_TAB_LIST.map((c, i) => (
          <view
            key={i}
            className={cls('index_tab_item', c.tab, { current: tabI === c.index })}
            onClick={() => setTabI(c.index)}
          >
            {c.title}
          </view>
        ))}
        <View className="scrollbar" style={innerStyle}></View>
      </View>
      {chidrenMap()}
    </View>
  );
}
