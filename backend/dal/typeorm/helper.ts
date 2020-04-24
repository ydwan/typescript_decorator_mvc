import "reflect-metadata";
import { createConnection } from 'typeorm';

createConnection().then(async connection => {
    console.log("Connection has been established successfully.");

}).catch(error => {
    console.error("Unable to connect to the database:", error);
});

// export default typeorm;