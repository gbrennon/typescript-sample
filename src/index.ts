import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Intentionally using a wrong path to demonstrate incorrect setup
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
