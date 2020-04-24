# koa+typescript+ MVC设计实现
> 不需要使用koa中的app.use去定义，完全实现面向对象方式继承Controller，并且在Controller中使用装饰器（以下全文称为注解）定义请求方法。
> 早期想法：我想获取我所有的后台API，怎么办？所以这套设计思想，就是为了在项目，启动的时候我们就能拿到所有的API。
> 扩展方面：可以在 <code>routes/decorator.ts</code>中，实现类是Java swagger自动生成API文档的能力

# 安装

**npm**

```bash
cd backend npm install
```

# 运行
**建议使用vscode**
在项目根目录创建.vscode/launch.json
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动后端程序",
            "cwd": "${workspaceRoot}/backend",
            "args": ["bin/www"],
            "runtimeArgs": [
                "--nolazy",
                "-r",
                "ts-node/register"
            ],
            "sourceMaps": true,
            "internalConsoleOptions": "neverOpen",
            "protocol": "inspector"
        }
    ]
}
```
创建完使用vscode F5或者fn + F5即可运行

# 查看结果
```bash
http://localhost:3000/api/hello
```