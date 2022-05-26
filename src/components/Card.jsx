import React from "react";

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [yy, mm, dd].join("/");
  };
  return (
    <div className="card">
      <img
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
            : "https://image.tmdb.org/t/p/w500/hqzIuGbwAYMKljhoXwtFFfOrg1J.jpg"
        }
        alt="affiche film"
      />
      <h2>{movie.original_title}</h2>
      {movie.release_date ? <h5>Sortie le :{dateFormater(movie.release_date)} </h5> : ""}
    </div>
  );
};

export default Card;
