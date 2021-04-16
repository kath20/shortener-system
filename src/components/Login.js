import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

const baseUrl = "http://localhost:3000/login";

class Login extends Component {
  state = {
    form: {
      user: "",
      password: "",
    }
  };
  showAlert(title, text, icon) {
    swal({ title, text, icon, button: false, timer: 2000 });
  }
  handleChange = async (event) => {
    await this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  validateUser = async () => {
    const { user,password } = this.state.form;
    if (user !== "" && password !== "") {
      await axios
        .post(
          baseUrl,
          {
            data: {
              user,
              password,
            },
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          if (response.data) {
            console.log("Login successful");
            window.location.href = "./home";
          } else {
            this.showAlert("Something went wrong", "Invalid data", "warning");
          }
        })
        .catch((error) => {
          alert("Invalid data");
          console.log(error);
        });
    } else {
        this.showAlert("Something went wrong", "You must fill all the spaces", "warning");
    }
  };

  render() {
    return (
      <div className="container mt-5 border border-info rounded w-50">
        <h4 className="text-center mt-3">Shortener System</h4>

        <form className="m-5">
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput1"
              className="col-sm-2 col-form-label"
            >
              User
            </label>
            <input
              type="text"
              className="form-control"
              name="user"
              onChange={this.handleChange}
            />
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3 row">
            <button
              type="button"
              className="btn btn-info mb-3 center"
              onClick={() => this.validateUser()}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
