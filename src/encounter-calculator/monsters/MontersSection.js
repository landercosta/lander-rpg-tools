import { Component } from "react";
import AddMonsterForm from "./AddMonsterForm";
import MonsterList from "./MonsterList";
import XPTableMonsters from "./XPtableMonsters";

class MonstersSection extends Component {
  render(){
    return (
      <div className="MonstersSection">
        <AddMonsterForm />
        <MonsterList />
        <XPTableMonsters />
      </div>
    );
  }
}

export default MonstersSection;