import React from "react";
import PlayingCardList from "./PlayingCardList";
import PokeDex from "./PokeDex";
import "./CardTable.css";

/* Main component. Renders card lists for
 * playing cards and pokemon. */
function CardTable() {
  return (
    <div className="CardTable">
      <header>
        <h1 className="CardTable-heading">
          {" "}
          Check out all my cards. 
        </h1>
        <h2 className="playingCards">Playing Cards </h2>
        <h2 className="pokemonCards">PokeDex </h2>
      </header>
      <main>
        <PlayingCardList />
        <PokeDex />
      </main>
    </div>
  );
}

export default CardTable;
