import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.mainImageFunction) {
      this.props.mainImageFunction(this.props.id);
      console.log(this)
    }
  }
  render() {
    const source = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={source} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
