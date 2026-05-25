const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/hello', (req, res) => {
  res.json({ message: '🚀 SaaS Starter API Running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 SaaS Starter server started`);
  console.log(`📡 Frontend page: http://localhost:${PORT}`);
  console.log(`🔌 API endpoint: http://localhost:${PORT}/api/hello`);
});
