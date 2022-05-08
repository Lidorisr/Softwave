import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Button, CardActions } from "@mui/material";
import BasicModal from "./BasicModal";

const MovieCard = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4}>
          <Box sx={{ flexGrow: 1 }}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: 500,
                bgcolor: "#dfe6e9",
                border: "0.1rem solid #2d3436",
                borderRadius: "10px",
                boxShadow: "2px 2px #b2bec3",
              }}
              className="movie"
            >
              <CardMedia
                component="img"
                height="250"
                image={
                  movie.image !== "N/A"
                    ? movie.image
                    : "https://via.placeholder.com/400"
                }
                alt={movie.title}
              />
              <CardContent>
                {movie.rank ? (
                  <Typography variant="body2" color="text.secondary">
                    <span>{movie.rank})</span>
                  </Typography>
                ) : (
                  <Typography variant="body3" color="text.secondary">
                    No rank
                  </Typography>
                )}

                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.year}
                </Typography>

                {movie.imDbRating ? (
                  <Typography variant="body3" color="text.secondary">
                    <span>Rating: {movie.imDbRating}</span>
                  </Typography>
                ) : (
                  <Typography variant="body3" color="text.secondary">
                    {movie.description}
                  </Typography>
                )}
              </CardContent>

              <CardActions>
                <BasicModal movie={movie} />
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieCard;
