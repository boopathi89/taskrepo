import path from 'path';
let dotenv = require('dotenv');
dotenv.config();
const entityPath = path.resolve(__dirname + "/models/entities/*.js");
const OrmConfig: any = {
    "type": "mysql",
    "host": process.env.APP_DB_HOST || "localhost",
    "port": Number(process.env.APP_DB_PORT) || 3306,
    "username": process.env.APP_DB_USER || "",
    "password": process.env.APP_DB_PASS || "",
    "database": process.env.APP_DB_NAME || "",
    "entities": [
        entityPath
    ]
}
export default OrmConfig;