const express = require('express');
const router = express.Router();
const RetrieveController = require('../controllers/retrieveController');

// 创建 RetrieveController 实例
const retrieveController = new RetrieveController();

// 处理获取数据的路由
router.post('/', (req, res) => {
  try {
    // 调用 retrieveData 方法从数据库或文件系统中检索数据
    const data = retrieveController.retrieveData(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

module.exports = router;
