import { Component } from "react";

class AddPlayerForm extends Component {
  render(){
    return(
      <form className="AddPlayerForm">
        <input id="inputLevelChar" type="number" min="0" max="20" />
        <button>Adicionar</button>
      </form>
    );
  }
}

export default AddPlayerForm;