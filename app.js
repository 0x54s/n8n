const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/output', (req, res) => {
    console.log(req.body);

    res.status(200).json({
        status: true
    });
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
