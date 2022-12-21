import { Component } from "react";
import AddPlayerForm from "./AddPlayerForm";
import PlayerList from "./PlayerList";
import XPTablePlayers from "./XPTablePlayers";

class PlayerSection extends Component {
  render(){
    return (
      <div className="PlayerSection">
        {/* Add players select and button add */}
        <AddPlayerForm />
        {/* Lista com os jogadores adicionados */}
        <PlayerList />
        {/* Tabela com xp do time */}
        <XPTablePlayers />
      </div>
    );
  }
}

export default PlayerSection;