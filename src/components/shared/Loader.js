import React, { Component } from "react";
import loading from "../../images/myLoader.gif";
export default class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="50" />
      </div>
    );
  }
}
 