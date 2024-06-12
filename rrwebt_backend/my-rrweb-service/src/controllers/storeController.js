const fs = require("fs");

class StoreController {
  constructor() {
    // Initialize any necessary variables or dependencies
  }

  storeData(data) {
    return new Promise((resolve, reject) => {
      // 获取key
      const { key, event } = data;
      console.log("key:", key);
      console.log("event:", event);

      // 向根目录public/stores/文件中写入数据
      // 判断是否有 key.json 文件，如果有则追加，如果没有则创建
      // json 中基础数据格式为 {key: key, events: event}
      fs.appendFile(
        `public/stores/${key}.json`,
        JSON.stringify(
          {
            key: key,
            events: event,
          },
          null,
          2
        ) + "\n",
        (error) => {
          if (error) {
            console.log("storeData error:", error);
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  }
}

module.exports = StoreController;
