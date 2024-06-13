const express = require("express");
const router = express.Router();
const StoreController = require("../controllers/storeController");

// 创建 StoreController 实例
const storeController = new StoreController();

// 处理存储数据的路由
router.post('/', (req, res) => {
  const rrwebData = req.body; // 从请求中获取 rrweb 数据
  //

  // 调用 StoreController 的 storeData 方法处理数据存储
  storeController.storeData(rrwebData)
    .then(() => {
      res.status(200).json({ message: 'Data stored successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to store data' });
    });
});

// 由于前端可能单次传输的数据量过大，导致后端无法处理，所以采用流式传输

module.exports = router;
