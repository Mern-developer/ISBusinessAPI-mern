const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

dotenv.config()
const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/innerfolder/build')));
app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/innerfolder/build/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})