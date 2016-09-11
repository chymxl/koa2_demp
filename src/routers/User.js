import Router from "koa-router";

var User = new Router({
    prefix : '/User'
});

User.get("/info", async(ctx, next) => {
    var name = ctx.query.query;
    console.log(name);
    ctx.body = "111";
    var regex = new RegExp(".*" + name + ".*");
    const Users = global.dbHandle.getModel('useres');
    await Users.find({
        $or : [
            {name : regex},
            {email : regex}
        ]
    }).exec((err, docs) => {
        ctx.body = "it's ok";
    });
})
.post("/register", async(ctx, next) => {
    var name = ctx.request.body.name;
    var passwd = ctx.request.body.passwd;
    const Users = global.dbHandle.getModel("useres");
    var user = new Users({name : name , passwd : passwd});
    var promise = user.save();
    promise.then((err) => {
        ctx.body = '保存成功';
    });
});

export default User;
