
const express = require("express");
const dotenv = require ("dotenv");
const cors = require ("cors");
const cookieParser = require ("cookie-parser");
const mongoose = require ("mongoose");
const setupSocket = require ("./socket.js");


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseUrl = process.env.DATABASE_URL

app.use(cors({
    origin:[process.env.ORIGIN, "http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}));

app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"));

app.use(cookieParser());
app.use(express.json());

const authRoutes = require('./routes/AuthRoutes');
const contactsRoutes = require('./routes/ContactsRoutes');
const messagesRoutes = require('./routes/MessagesRoutes');
const channelRoutes = require('./routes/ChannelRoutes');

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/channel", channelRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

setupSocket(server)

mongoose.connect(databaseUrl).then(()=> console.log("DB Connection Successful!")).catch((err) => console.log(err.message))