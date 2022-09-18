const express = require('express');
const path = require('path');



const app = express();
const port = 5555

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/innerfolder/build')));
app.use('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/innerfolder/build/index.html'))
});

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})