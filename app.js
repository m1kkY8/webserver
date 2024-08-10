const express = require("express");
const app = express();

const youtubeRoutes = require("./routes/youtube");
const searchRoutes = require("./routes/search");
const healthRoutes = require("./routes/health");

app.use("/youtube", youtubeRoutes);
app.use("/search", searchRoutes);
app.use("/health", healthRoutes);

module.exports = app;
