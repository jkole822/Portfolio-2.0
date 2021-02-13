const express = require("express");
const mongoose = require("mongoose");
const router = new express.Router();
const Project = mongoose.model("projects");

router.get("/", async (req, res) => {
	try {
		const projects = await Project.find({}).lean();

		res.render("index", { projects });
	} catch (e) {
		res.status(500).send(`Error: ${e}`);
	}
});

module.exports = router;
