const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);

const PORT = 8080;
app.listen(PORT, () => console.log(`TLBeauty Server is running on http://localhost:${PORT}`));
