const express = require("express");
const res = require("express/lib/response");

const { Router } = express;
const spaceRoute = new Router();
const Spaces = require("../models").space;
const Story = require("../models").story;

spaceRoute.get("/", async (req, res, next) => {
  try {
    const allSpaces = await Spaces.findAll();
    res.send(allSpaces);
  } catch (error) {
    next(error);
  }
});

spaceRoute.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneSpace = await Spaces.findByPk(id, {
      include: ["stories"],
    });
    res.send(oneSpace);
  } catch (error) {
    next(error);
  }
});

spaceRoute.delete("/sory/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const storyToDelete = Story.findByPk(id);

    if (!storyToDelete) return res.status(404).send("Not found");
    await storyToDelete.destroy();

    res.send({ message: "story delected" });
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = spaceRoute;
