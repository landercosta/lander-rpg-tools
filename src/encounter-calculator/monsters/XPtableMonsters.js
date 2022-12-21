import { Component } from "react";

class XPTableMonsters extends Component {
  render(){
    return (
      <div className="XPTableMonsters">
        <table>
          <tr>
            <td>XP Total</td>
            <td>Multiplicador</td>
            <td>XP Calculado</td>
          </tr>
          <tr>
            <td>100</td>
            <td>2</td>
            <td>200</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default XPTableMonsters;