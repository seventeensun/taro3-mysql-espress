/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-24 22:50:11
 * @LastEditTime: 2023-11-27 12:25:33
 */
const mysql = require('mysql2');

const options = {
  host: '127.0.0.1', // 主机名
  port: '3306', // 端口号
  user: 'root', // 数据库用户名
  password: '5456732189sjx',
  database: 'teacher' // 数据库名称
};

// 创建数据库链接
const connection = mysql.createConnection(options);
connection.connect(err => {
  if (err) {
    console.log(err);
  }
});

// 查询方法
const sqlQuery = strSQL => {
  return new Promise((resolve, rejected) => {
    connection.query(strSQL, (err, res) => {
      if (err) {
        rejected(err);
      } else {
        resolve(res);
      }
    });
  });
};

// 请求包装
const resCallback = {
  200: result => ({
    code: 200,
    message: '请求成功',
    result
  }),
  '-100': err => ({
    code: -100,
    message: '请求失败',
    result: err
  })
};

// /** 查询方法测试 */
// sqlQuery('SELECT * FROM teacher_table')
//   .then(res => {
//     console.log(res, 'res');
//   })
//   .catch(err => {
//     console.log(err, 'err');
//   });

module.exports = {
  sqlQuery, // SQL 查询
  resCallback // 请求包装
};
