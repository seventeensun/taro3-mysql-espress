/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-26 07:37:19
 * @LastEditTime: 2023-11-27 12:57:28
 */
module.exports = app => {
  app.use('/home', require('./home.js'));
};
