/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 15:30:09
 * @LastEditTime: 2023-11-24 22:43:49
 */
const HOME_TAB_LIST = [
  { title: '机票', tab: 'flight', index: 0 },
  { title: '火车票', tab: 'train', index: 1 },
  { title: '酒店', tab: 'hotel', index: 2 },
  { title: '汽车票', tab: 'bus', index: 3 }
];

const HOME_FLIGHT_LIST = [
  { label: '单程', id: 0 },
  { label: '多程', id: 1 },
  { label: '往返', id: 2 }
];

const HOME_BANNER = [
  { id: '1', imgUrl: 'https://img1.baidu.com/it/u=2313706955,2080733208&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800' },
  { id: '2', imgUrl: 'https://img2.baidu.com/it/u=3310700601,1669494415&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' }
];

export {
  /** home */
  HOME_TAB_LIST, // home tabBar
  HOME_FLIGHT_LIST, // hone 机票
  HOME_BANNER // home Banner
};
