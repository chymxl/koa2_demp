"use strict";
import Koa from "koa";
import bodyParser from 'koa-bodyparser';
import router from 'koa-router';
import routers from "./routers";
import * as dbHandle from './database/dbHandle';
import mongoose from 'mongoose';

var app = new Koa();
mongoose.Promise = Promise;

// app.use((ctx, next) => {
//   const start = new Date();
//   return next().then(() => {
//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//   });
// });


//middleware
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodyParser());

global.dbHandle = dbHandle;
global.db = mongoose.connect("mongodb://localhost/test");

for(let item of routers){
    app.use(item.routes(), item.allowedMethods());
}

app.listen(3000);

console.log("start at port 3000");
