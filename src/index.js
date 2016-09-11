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

console.log(123);
console.log(1);
console.log(2);
console.log(3);

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
    ct.body = '123';
});

<<<<<<< Updated upstream
app.use("/index", (ctx, next) => {
  ctx.body = 'aaaaa';
})

app.listen(3000);
=======
app.listen(3000, function(err){
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("success");
});
>>>>>>> Stashed changes
console.log(`app running at port 3000`);

console.log("start at port 3000");
