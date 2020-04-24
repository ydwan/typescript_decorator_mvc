import * as path from 'path';

// 本地调试时，使用的ts-node,不会生成.js文件，所以使用.ts
let entitiesSuffix = process.env.NODE_ENV == 'production' ? 'js' : 'ts';
let entitiesPath = path.join(__dirname, `./entity/*.${entitiesSuffix}`);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('entities path:  ', entitiesPath);

const config = {
    type: "mysql",
    host: "",
    username: "",
    port: 3306,
    password: "",
    database: "",
    extra: {
        charset: "utf8mb4_general_ci"
    },
    synchronize: true,
    entities: [
        entitiesPath
    ]
};

module.exports = config;