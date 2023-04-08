import { useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

const initialState = { theme: "", element: [], favs: setFavsLocalData() };
const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ELEMENT":
      return { ...state, element: action.payload };
    case "THEME":
      return { ...state, theme: action.payload };
    case "FAVS":
      return { ...state, element: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => dispatch({ type: "ELEMENT", payload: res }));
  }, []);

  const handleThemeChange = () => {
    const dark = {
      backgroundNavbar: "black",
      backgroundHome: "grey",
      color: "beige",
    };

    if (state.theme === "") {
      dispatch({ type: "THEME", payload: dark });
    } else {
      dispatch({ type: "THEME", payload: "" });
    }
  };

  return (
    <ContextGlobal.Provider value={{ state, handleThemeChange }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);

function setFavsLocalData() {
  let favs = JSON.parse(localStorage.getItem("favs"));
  return favs != null ? favs : [];
}
