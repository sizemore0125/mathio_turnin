import React, { Component } from "react";
import Table from "./common/table";

class TeacherPannel extends Component {
  state = { sortColumn: { path: "", order: "asc" } };
  columns = [
    { path: "name", label: "Student Name" },
    { path: "email", label: "Student Email" },
    { path: "p1", label: "Problem 1" },
    { path: "p2", label: "Problem 2" },
    { path: "p3", label: "Problem 3" },
    { path: "p4", label: "Problem 4" },
    { path: "p5", label: "Problem 5" },
    { path: "p6", label: "Problem 6" },
    { path: "p7", label: "Problem 7" },
    { path: "p8", label: "Problem 8" },
    { path: "p9", label: "Problem 9" },
  ];

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { students } = this.props;
    console.log(students);
    return (
      <React.Fragment>
        <div>
          <h1 className="teacher-review-heading">Student Problem Details</h1>
          <div className="table-container">
              <Table
                columns={this.columns}
                onSort={this.handleSort}
                sortColumn={this.state.sortColumn}
                data={students}
              />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherPannel;
