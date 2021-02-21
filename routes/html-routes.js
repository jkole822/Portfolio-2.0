const express = require("express");
const mongoose = require("mongoose");
const router = new express.Router();
const Project = mongoose.model("projects");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/portfolio", async (req, res) => {
	try {
		const projects = await Project.find({}).lean();

		res.render("portfolio", { projects });
	} catch (e) {
		res.status(500).send(`Error: ${e}`);
	}
});

module.exports = router;
