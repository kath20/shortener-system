import React, { Component } from "react";
import TblTop from "./TblTop";

class Home extends Component {
  closeSession = () => {
    window.location.href = "./";
  };
  render() {
    return (
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="url" className="visually-hidden">
              Insert a valid URL:
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              name="url"
              placeholder="https://www.google.com"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-info mb-3">
              Generate shortcode
            </button>
          </div>
        </form>
        <TblTop></TblTop>
        <button onClick={() => this.closeSession()}>Cerrar sesion</button>
      </div>
    );
  }
}
export default Home;
