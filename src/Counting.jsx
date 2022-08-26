import { Component } from "react";

class Counting extends Component {
  state = {
    count: 0,
    merdeka: true,
  };

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <div>Counting</div>
        <div>{this.state.count}</div>
        <div>{this.state.merdeka.toString()}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              merdeka: !this.state.merdeka,
            });
          }}
        >
          Tambah
        </button>
        <button
          onClick={() => {
            if (this.state.count > 0) {
            this.setState({
              count: this.state.count - 1,
              merdeka: !this.state.merdeka,
            });
          }}}
        >
          Kurang
        </button>
      </div>
    );
  }
}

export default Counting;
