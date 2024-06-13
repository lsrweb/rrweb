const fs = require("fs");

class StoreController {
  constructor() {
    // Initialize any necessary variables or dependencies
  }

  storeData(data) {
    return new Promise((resolve, reject) => {
      // 获取key
      const { key, event } = data;
      console.log("key:", key); // 存储的 key
      console.log("event:", event); // 存储的 event,前端每次传递一个事件

      // 每次存储之前,都清空之前的数据
      fs.writeFile(`public/stores/${key}.txt`, "", (err) => {
        if (err) {
          console.error("无法清空rrweb数据:", err);
          reject(err);
        } else {
          console.log("成功清空rrweb数据");
        }
      }
      // 向根目录public/stores/文件中写入数据
      // 判断是否有 key.txt 文件，如果有则追加，如果没有则创建
      // 每行存储一个事件
      fs.appendFile(`public/stores/${key}.txt`, `${JSON.stringify(event)}\n`, (err) => {
        if (err) {
          console.error("无法存储rrweb数据:", err);
          reject(err);
        } else {
          console.log("成功存储rrweb数据");
          resolve();
        }
      });

     
    });
  }
}

module.exports = StoreController;
