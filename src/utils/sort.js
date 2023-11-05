/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 14:12:26
 * @LastEditTime: 2023-11-05 14:27:33
 */
export function quickSort(ary) {
  if (ary.length < 2) return ary;

  const left = [],
    right = [];
  const midI = ary?.length >> 1;
  const minVal = ary.splice(midI, 1)[0];

  for (let i = 0; i < ary.length; i++) {
    const v = ary[i];
    (v < minVal ? left : right).push(v);
  }

  return quickSort(left).concat(minVal, quickSort(right));
}
