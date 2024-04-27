const movies = require("../movies.json");

// Récupérer tous les films depuis la base de données.
exports.findAllMovies = (req, res) => {
  res.status(200).json(movies);
};

// Ajouter un nouveau film à la base de données.
exports.addMovie = (req, res) => {
  const newMovie = req.body;
  // Ajoutez ici la logique pour enregistrer le nouveau film dans la base de données
};

// Mettre à jour un film en fonction de l'ID dans la requête.
exports.updateMovie = (req, res) => {
  const id_movie = parseInt(req.params.id);
  let movie = movies.find(m => m.id === id_movie);
  movie.title = req.body.title;
  movie.release = req.body.release;
  // Ajoutez ici la logique pour mettre à jour les autres champs du film
  res.status(200).json(movie);
};

// Supprimer un film avec l'ID spécifié dans la requête.
exports.deleteMovie = (req, res) => {
  const id_movie = parseInt(req.params.id);
  const index = movies.findIndex(m => m.id === id_movie);
  if (index !== -1) {
    movies.splice(index, 1);
    res.status(200).json({ message: "Movie deleted successfully" });
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};
