const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, '../dist/portfolio-two')));

app.use(express.static(path.join(__dirname, '../dist/portfolio-two')));
app.use(/^((?!(api|uploads)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname,'../dist/portfolio-two/index.html'));
});

app.use('/api', usersRouter);


module.exports = app;


