"use strict";
import Koa from "koa";

var app = new Koa();


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
  console.log(34);
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);

console.log("start at port 3000");
