const express = require("express");
app = express();

const path = require("path");
const host = 3000;

app.listen(host, () => {
    console.log(`Start Server: localhost:${host}`);
});

app.get("/index", async (req, res) => {
    res.sendFile(path.join(__dirname, `index.html`));
});

