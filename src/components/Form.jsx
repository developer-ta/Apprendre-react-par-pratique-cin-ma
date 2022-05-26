import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=46b854d3e9672ba2c53a33de56bee7e9&query=star&language=en-FR&page=1&include_adult=false"
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Entrez le tittre d'un film " id="search-input" />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top <span>&#8613;</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop <span>&#8615;</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Form;
