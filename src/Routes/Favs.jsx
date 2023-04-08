import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const {state} = useContextGlobal();

  return (
    <div className="cartafav" style={{ background:state.theme.backgroundHome }}>
      <h1 style={{color:state.theme.color, background: state.theme.backgroundHome}}>Dentists Favs</h1>
      <div className="card-grid" style={{ background:state.theme.backgroundHome }} >
      {state.favs.map(info => {return <Card key={info.id} id={info.id} name={info.name} username={info.username} />})}
      </div>
    </div>
  );
};

export default Favs;
