"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser"); // body로 데이터 주고 받을 때 써야 됨
const dotenv = require("dotenv"); // 어떤 운영체제든 동일한 환경 변수 사용 가능


const app = express();
dotenv.config(); 

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); 
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
