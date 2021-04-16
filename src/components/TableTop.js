import React, { Component } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000/mostVisited";

class TableTop extends Component {
  state = {
    urlList: [],
  };
  getUrls = async () => {
    await axios
      .get(
        baseUrl,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({urlList: response.data});
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  componentDidMount(){
    this.getUrls();
  }

  render() {
    const { urlList } = this.state;
    return (
      <div>
        <h4 className="text-center mb-3">
          Top 20 most frequently accessed shortcodes
        </h4>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">URL</th>
              <th scope="col">Visits</th>
              <th scope="col">Shortcode</th>
            </tr>
          </thead>
          <tbody>
            {urlList.map((url, index) => (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{url.url}</td>
                <td>{url.visits}</td>
                <td>{url.shortcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
              type="button"
              className="btn btn-info mb-3 center"
              onClick={() => this.getUrls()}
            >
              Refresh
            </button>
      </div>
    );
  }
}
export default TableTop;
