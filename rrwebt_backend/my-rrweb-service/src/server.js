const express = require('express');
const app = express();
const storeRouter = require('./routes/store');
const retrieveRouter = require('./routes/retrieve');

// 跨域
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// 设置静态资源目录
app.use(express.static('public'));
// Middleware
app.use(express.json());


// Routes
app.use('/store', storeRouter);
app.use('/retrieve', retrieveRouter);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
