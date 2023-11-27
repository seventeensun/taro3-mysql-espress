/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-05 22:14:44
 * @LastEditTime: 2023-11-27 12:46:40
 */
const express = require('express');
const model = require('./model');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* 注册接口 **/
model(app);

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
