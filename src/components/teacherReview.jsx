import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import TeacherPannel from "./teacherPannelView";
import StudentSubmission from "./studentSubmission";

class TeacherReview extends Component {
  state = {
    students: [
      { _id: 1, name: "Emma", email: "emma@school.edu" },
      { _id: 2, name: "Ginna", email: "ginna@school.edu" },
      { _id: 3, name: "Hannah", email: "hannh@school.edu" },
      { _id: 4, name: "Ian", email: "ian@school.edu" },
      { _id: 5, name: "Marco", email: "marco@school.edu" },
      { _id: 6, name: "Nina", email: "nina@school.edu" },
      { _id: 7, name: "Olivia", email: "oliva@school.edu" },
      { _id: 8, name: "Sally", email: "sally@school.edu" },
      { _id: 9, name: "Sam", email: "sam@school.edu" },
    ],
    submissionView: { active: false },
  };

  createData = (numProbs) => {
    let data = [];
    for (let student of this.state.students) {
      let studentClone = { ...student };
      for (let i = 0; i < numProbs; i++) {
        let score = Math.floor(Math.random() * 100);
        let cellColor = score > 70 ? "green" : "red";
        studentClone["p" + (i + 1)] = (
          <div
            key={student.name + "_p" + (i + 1)}
            className="table-cell"
            onClick={() => this.handleSubmissionView(student, score)}
            style={{ color: cellColor }}
          >
            {score > 60 ? score : "__"}
          </div>
        );
      }
      data = [...data, studentClone];
    }
    return data;
  };

  handleStudentSelect = (student) => {
    this.setState({ selectedStudent: student });
  };

  handleSubmissionView = (student, problem) => {
    this.setState({ submissionView: { active: true } });
  };

  handleCloseSubmissionView = () => {
    this.setState({ submissionView: { active: false } });
  };

  render() {
    return (
      <React.Fragment>
        <div className="teacher-review-layout">
          <ListGroup
            title="Students"
            items={this.state.students}
            selectedItem={this.state.selectedStudent}
            onItemSelect={this.handleStudentSelect}
          />
          <TeacherPannel students={this.createData(10)} />
        </div>
        {this.state.submissionView.active ? (
          <StudentSubmission onClose={this.handleCloseSubmissionView} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default TeacherReview;
