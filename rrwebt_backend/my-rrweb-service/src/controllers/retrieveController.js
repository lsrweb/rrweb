// 导入所需的模块和依赖项
const fs = require('fs');

class RetrieveController {
  retrieveData(body) {
    // 从数据库或文件系统中检索rrweb数据的逻辑
    try {
      // 读取存储的文件
      const files = fs.readdirSync('public/stores');
      const { key } = body;
      // 从文件中读取数据,每行存储一个事件,所以需要逐行读取流式传输
      const events = [];
      files.forEach((file) => {
        if (file.includes(key)) {
          const data = fs.readFileSync(`public/stores/${file}`, 'utf-8').split('\n').filter(Boolean).map(JSON.parse);
          events.push(...data);
        }
      });
      return events;
      


      // const events = fs.readFileSync(`public/stores/${key}.txt`, 'utf-8').split('\n').filter(Boolean).map(JSON.parse);
     // 获取的是多个二维数组，需要将其合并为一个一维数组,并采用流式传输
      // return events;

    
    } catch (error) {
      console.error('无法检索rrweb数据:', error);
      return null;
    }
  }
}

module.exports = RetrieveController;
