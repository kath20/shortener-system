import React, { Component } from "react";

class TblTop extends Component {
  render() {
    return (
      <div>
          <h4 className="text-center mb-3">Top 20 most frequently accessed shortcodes</h4>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default TblTop;
