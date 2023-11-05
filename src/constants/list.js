/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 15:30:09
 * @LastEditTime: 2023-11-05 18:44:00
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

export {
  /** home */
  HOME_TAB_LIST, // home tabBar
  HOME_FLIGHT_LIST // hone 机票
};
