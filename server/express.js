const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const assetsRouter = require('./assets-router');
const userRouter = require("./routes/User");

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/src', assetsRouter);

app.get('/api/v1', (req,res) => {
    res.json({
        project: "React Project",
        from: "COMP229"
    })
})

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.use('/',userRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

module.exports = app;