import React from "react";

const Form = () => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            placeholder="Entrez le tittre d'un film "
            id="search-input"
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodTOBad">
            Top <span>&#8613;</span>
          </div>
          <div className="btn-sort" id="badTOGood">
            Flop <span>&#8615;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
