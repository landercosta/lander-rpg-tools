import { Component } from "react";

class XPTablePlayers extends Component {
  render(){
    return (
      <div className="XPTablePlayers">
        <table>
          <tr>
            <td>Fácil</td>
            <td>Médio</td>
            <td>Difícil</td>
            <td>Mortal</td>
          </tr>
          <tr>
            <td>100</td>
            <td>200</td>
            <td>300</td>
            <td>400</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default XPTablePlayers;