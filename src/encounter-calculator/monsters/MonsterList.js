import { Component } from "react";

class MonsterList extends Component {
  render(){
    return (
      <div className="MonsterList">
        <table>
          <tr>
            <td>Nível</td>
            <td>Deletar</td>
          </tr>
          <tr>
            <td>CR 1</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>CR 1/4</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>CR 1/4</td>
            <td>Delete</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MonsterList;