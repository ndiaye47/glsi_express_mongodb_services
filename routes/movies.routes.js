const express = require("express");
const router = express.Router();
const studentController = require("../controllers/movies.controller");

// Routes pour la gestion des films
router.get("/movies", studentController.findAllMovies);
router.post("/movies", studentController.addMovie);
router.put("/movies/:id", studentController.updateMovie);
router.delete("/movies/:id", studentController.deleteMovie);

module.exports = router;
