import { Component } from "react";
import Button from "./Button";

class Identity extends Component {
  render() {
    return (
      <>
        <div>
          <strong>Identity Section</strong>
        </div>
        <div>
          <tbody>
            <tr>
              <td>Name</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{this.props.user.name}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{this.props.user.address}</td>
            </tr>
          </tbody>
        </div>
        <div>
          <Button text={"submit"} />
        </div>
      </>
    );
  }
}

export default Identity;
