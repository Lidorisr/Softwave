const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
//k_cwfzdb8b - alex
//k_6zs3dw2f - lidor
API_KEY = "k_6zs3dw2f";
app.use(cors());
app.use(express.static("./"));

app.get("/pop", (req, res) => {
  mostPopularMovies_url = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`;
  axios
    .get(mostPopularMovies_url)
    .then(function (response) {
      // handle success

      //   console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

app.use("/pop", (req, res) => {
  res.send(res.data);
});

app.get("/search/:title", (req, res) => {
  const title = req.params.title;
  console.log(title);
  search_url = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${title}`;
  axios
    .get(search_url)
    .then(function (response) {
      // handle success

      //   console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

app.use("/search", (req, res) => {
  res.send(res.data);
});

const port = process.env.PORT || 8000;

app.listen(port, "localhost", () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;
