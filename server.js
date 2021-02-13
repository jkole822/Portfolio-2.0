require("./models/Project");
const express = require("express");
const mongoose = require("mongoose");

const htmlRoutes = require("./routes/html-routes");
const keys = require("./config/keys");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(htmlRoutes);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
