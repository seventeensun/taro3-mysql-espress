/*
 * @description: 数据库初始化 banner_table 表
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-11-26 07:27:29
 * @LastEditTime: 2023-11-27 12:54:27
 */
const express = require('express');
const { sqlQuery, resCallback } = require('../mysql');
const router = express.Router();

const SQL = {
  create_table: () => `
        create table if not exists banner_table (
            id int auto_increment,
            img_url char(255) not null,
            primary key (id)
        ) engine=innodb
    `, // auto_increment: 自动增量插入数据

  insert: img_url => `
        INSERT INTO banner_table(
            id,
            img_url
        ) VALUES(
            NULL,
            '${img_url}'
        )
    `,

  query: () => 'SELECT * FROM banner_table'
};

/** 创建表并初始化数据 */
// const createTable = async () => {
//     const imgList = [
//         { id: '1', imgUrl: "https://img1.baidu.com/it/u=2313706955,2080733208&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800" },
//         { id: '2', imgUrl: "https://img2.baidu.com/it/u=3310700601,1669494415&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" }
//     ]

//     try {
//         await sqlQuery(SQL.create_table());

//         for (let i = 0; i < imgList.length; i++) {
//             console.log(SQL.insert(imgList[i].imgUrl))
//             await sqlQuery(SQL.insert(imgList[i].imgUrl));
//         }
//     } catch (error) {
//         console.log(error)
//     }
// };

// createTable();

// sqlQuery(SQL.query()).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e, 'e')
// })
/** 查询表返回 bannerList */
router.get('/banner', async (req, res) => {
  try {
    const data = await sqlQuery(SQL.query());
    const result = resCallback[200](data);

    res.send(result);
  } catch (error) {
    const data = resCallback[-100](error);
    console.log(data, 'data');
  }
});

module.exports = router;
