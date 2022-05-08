import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button, Box, Container, Typography } from "@mui/material";
import MovieCard from "./Components/MovieCard";
import Pages from "./Components/Pages";

const POPULAR_MOVIES = "http://localhost:8000/pop";
const SEARCH_MOVIES = "http://localhost:8000/search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  useEffect(() => {
    if (searchedMovies != null) {
      searchMovies(searchTerm);
    }
    popularMovies();
  }, []);

  // Current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const onPageChange = (e, v) => {
    setCurrentPage(v);
    // console.log(v);
  };

  const popularMovies = async () => {
    await axios.get(POPULAR_MOVIES).then((res) => {
      setMovies(res?.data?.items);
    });
  };

  const searchMovies = async (title) => {
    await axios.get(`${SEARCH_MOVIES}/${title}`).then((res) => {
      setSearchedMovies(res?.data?.results);
    });
  };

  return (
    <Container
      sx={{ display: "flex", flexFlow: "column", alignItems: "center" }}
    >
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        mt={2}
        sx={{ color: "#2d3436", border: "2px solid", borderRadius: "22px" }}
      >
        {" "}
        Movies
      </Typography>

      <Box Container sx={{ display: "flex", marginBottom: 5, maxWidth: 500 }}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <Button variant="contained" onClick={() => searchMovies(searchTerm)}>
          Search
        </Button>
      </Box>

      {searchedMovies?.length > 0 ? (
        <MovieCard movies={searchedMovies} />
      ) : (
        <MovieCard movies={currentMovies} />
      )}

      {searchedMovies?.length <= 10 ? (
        <Box mt={4}></Box>
      ) : (
        <Pages
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          onChange={onPageChange}
        />
      )}
    </Container>
  );
};

export default App;
