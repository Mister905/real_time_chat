const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json({ extended: false }));
var cors_options = {
  origin: "http://localhost:3000",
};
app.use(cors(cors_options));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
