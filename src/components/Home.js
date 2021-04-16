import React, { Component } from "react";
import TableTop from "./TableTop";
import axios from "axios";
import swal from "sweetalert";

const baseUrl = "http://localhost:3000/newShortcut";

class Home extends Component {
  state = {
    from: {
      url: "",
    },
  };
  showAlert(title, text, icon) {
    swal({title, text, icon,button:false, timer:3000});
  }

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
          //alert(response.data);
          this.showAlert("Url saved",response.data,"success");
        }
      })
      .catch((error) => {
        //alert(error.response.data);
        this.showAlert("Ups, error",error.response.data,"error");
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
            <button
              type="button"
              className="btn btn-info mb-3"
              onClick={() => this.saveUrl()}
            >
              Generate shortcode
            </button>
          </div>
        </form>

        <TableTop></TableTop>
        <button className="btn btn-danger mb-3" onClick={() => this.closeSession()}>Sign off</button>
      </div>
    );
  }
}
export default Home;
