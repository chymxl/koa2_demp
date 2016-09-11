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

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(ctx => {
    ctx.body = 'Hello Koa';
    ct.body = '123';
});

app.use("/index", (ctx, next) => {
  ctx.body = 'aaaaa';
})

app.listen(3000);
console.log(`app running at port 3000`);

console.log("start at port 3000");
