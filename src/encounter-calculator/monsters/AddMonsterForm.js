import { Component } from "react";

class AddMonsterForm extends Component {
  render(){
    return(
      <form className="AddMonsterForm">
        <select>
          <option value="0">0</option>
          <option value="1/8">1/8</option>
          <option value="1/4">1/4</option>
          <option value="1/2">1/2</option>
          <option value="1">1</option>
        </select>
        <button>Adicionar</button>
      </form>
    );
  }
}

export default AddMonsterForm;