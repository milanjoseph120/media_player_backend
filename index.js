// import json-server library in index.js
const jsonserver = require('json-server')

// create srever using json server library
const mediaPlayerServer = jsonserver.create()

// craete path to db.json file
const router = jsonserver.router('db.json')

// middlewares to convert js to json
const middleware = jsonserver.defaults()

// connect/use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// setup for server(raect and server runs in 3000)

const port = 8000 || process.env.PORT /* used while hosting if there is another port with 6000 */

// to listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at ${port} and ready fetchh request`);
})
