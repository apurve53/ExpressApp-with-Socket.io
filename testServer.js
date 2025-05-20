const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const session = require("express-session");

const port = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);

const sessionMiddleware = session({
    secret: "somthingelse",
    resave: true,
    saveUninitialized: true,
    //FRom Server
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,          // Only send over HTTPS
        httpOnly: false,        // access via JavaScript
        maxAge: 1000 * 60 * 60, // 1 hour expiry
        sameSite: 'none',  //change it in "lax" only if using HTTP
        path: '/',             // Valid for all paths
        // signed: true,     //Removed because since you are not using cookieParser() with signing.
        //Note :-: By default, express-session only stores sessions in memory, which resets on server restart.
        // To persist sessions properly, use MongoDB, Redis, or FileStore:
    },
});

app.use(sessionMiddleware);

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

app.post("/incr", (req, res) => {
    const session = req.session;
    console.log("session id on app.post  :", session.id);
    res.status(200).send();
});

const io = new Server(httpServer);
io.engine.use(sessionMiddleware);
io.on('connection', (socket) => {
    const session = socket.request.session;
    console.log("session id on socket.io :", session.id);
    socket.on("urlProcess", async (obj) => {
    })
    socket.on('disconnect', async () => {

    });
});

httpServer.listen(port, () => {
    console.log(`application is running at: http://localhost:${port}`);
});