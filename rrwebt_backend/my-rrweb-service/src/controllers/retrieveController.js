// 导入所需的模块和依赖项
const fs = require('fs');

class RetrieveController {
  retrieveData(body) {
    // 从数据库或文件系统中检索rrweb数据的逻辑
    try {
      // 读取存储的文件
      const files = fs.readdirSync('public/stores');
      const { key } = body;
      // 从文件中读取数据,每行存储一个事件,所以需要逐行读取并转化为对象,如果空行则跳过
      const events = fs.readFileSync(`public/stores/${key}.txt`, 'utf-8').split('\n').filter(Boolean).map(JSON.parse);
      // 返回读取的数据
      return events

    
    } catch (error) {
      console.error('无法检索rrweb数据:', error);
      return null;
    }
  }
}

module.exports = RetrieveController;
