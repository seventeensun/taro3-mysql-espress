/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 17:57:07
 * @LastEditTime: 2023-11-05 21:55:45
 */
import { useState } from 'react';
import { View, Swiper } from '@tarojs/components';
import cls from 'classnames';
import './index.less';

interface IProps {
  className: string;
  children: JSX.Element[];
  // eslint-disable-next-line
  onChange: (id: number) => void;
  initTab: number | string;
  tabList: { id: number | string; label: string }[];
}

const Tabs: React.FC<IProps> = ({ className, initTab, tabList, children, onChange }) => {
  const [cId, setCId] = useState(initTab || tabList[0]?.id);

  const innerStyle = {
    width: `${100 / tabList?.length}%`,
    transform: `translateX(${+cId * 100}%)`
  };

  const handleClick = id => {
    setCId(id);
    onChange?.(id);
  };

  return (
    <View className={`tab_container ${className}`}>
      <View className="tab_bar">
        {tabList.map((c, i) => (
          <View
            key={i}
            className={cls('tab_item', {
              active: cId === c.id
            })}
            onClick={() => handleClick(c.id)}
          >
            {c.label}
          </View>
        ))}
        <View className="scroll_bar" style={innerStyle}></View>
      </View>
      <Swiper
        current={cId as number}
        className="tab_content"
        onChange={e => {
          const id = e.detail.current;
          handleClick(id);
        }}
      >
        {children}
      </Swiper>
    </View>
  );
};

Tabs.defaultProps = {
  initTab: 0,
  tabList: [
    {
      label: '单程',
      id: 0
    },
    {
      label: '多程',
      id: 1
    },
    {
      label: '往返',
      id: 2
    }
  ]
};

export default Tabs;
