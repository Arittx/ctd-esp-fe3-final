import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextProvider, useContextGlobal } from "./utils/global.context";
import { useState } from "react";
import confetti from "canvas-confetti";

const Card = ({ name, username, id }) => {
  const [favs, setFavs] = useState([]);
  const { state } = useContextGlobal();

  useEffect(() => {
    setFavs(state.favs);
  }, []);

  const addFav = () => {
    let existe = false;
    let Favoritos = state.favs;
    Favoritos.forEach((e) => {
      if (e.id === id) {
        existe = true;
        let index = Favoritos.indexOf(e);
        Favoritos.splice(index, 1);
      }
    });
    if (existe === false) {
      Favoritos.push({
        name: name,
        username: username,
        id: id,
      });
      localStorage.setItem("favs", JSON.stringify(Favoritos));
      alert("El odontologo se ha agregado correctamente");

      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    } else {
      localStorage.setItem("favs", JSON.stringify(Favoritos));
      alert("Odontologo eliminado de favoritos");
    }

    setFavs((state) => [...state, ...Favoritos]);
  };

  return (
    <div className="card" style={{ color: state.theme.color }}>
      <img src="/images/doctor.jpg" alt="Doctor" />
      <h2>
        <Link to={`/${id}`} style={{ color: state.theme.color }}>
          {" "}
          {name}{" "}
        </Link>
      </h2>
      <h3>{username}</h3>
      <button onClick={addFav} className="favButton">
        {favs.find((fav) => fav.id === id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
