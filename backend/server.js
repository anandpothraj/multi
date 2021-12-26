const dotenv = require('dotenv');
const express = require('express');
const userRoutes = require("./routers/userRoutes");
const connectDB = require('./db');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use('/api/',userRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
