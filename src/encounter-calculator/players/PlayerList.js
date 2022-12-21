import { Component } from "react";

class PlayerList extends Component {
  render(){
    return (
      <div className="PlayerList">
        <table>
          <tr>
            <td>Nível</td>
            <td>Deletar</td>
          </tr>
          <tr>
            <td>Nível 4</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Nível 3</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Nível 4</td>
            <td>Delete</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default PlayerList;