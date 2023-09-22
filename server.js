const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");
async function startServer(){
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Database was connected successfully!");
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT + '.');
        });
    } catch (error){
        console.log("Failed connecting to database!", error);
        process.exit();
    }
}
startServer();