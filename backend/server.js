const express = require('express');
const path = require('path');



const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/innerfolder/build')));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/innerfolder/build/index.html'))
});

const port = 5432
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})