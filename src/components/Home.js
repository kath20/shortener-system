import React, { Component } from "react";
import TableTop from "./TableTop";
import axios from "axios";

const baseUrl = "http://localhost:3000/newShortcut";

class Home extends Component {
  state = {
    from: {
      url: "",
    },
    
  };
  handleChange = async (event) => {
    await this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  saveUrl = async () => {
    
    await axios
      .post(
        baseUrl,
        {
          data: {
            url: this.state.form.url,
          },
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        if (response.data.length > 0) {
          alert(response.data);
        }
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error);
      });
  };
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
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-info mb-3" onClick={() => this.saveUrl()}>
              Generate shortcode
            </button>
          </div>
        </form>
        <TableTop></TableTop>
        <button onClick={() => this.closeSession()}>Cerrar sesion</button>
      </div>
    );
  }
}
export default Home;
