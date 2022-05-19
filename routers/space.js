const express = require("express");
const res = require("express/lib/response");

const { Router } = express;
const spaceRoute = new Router();
const Spaces = require("../models").space;

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

module.exports = spaceRoute;
