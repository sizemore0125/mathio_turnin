import React from "react";
import { Helmet } from "react-helmet";
import Form from "../common/form";
import Joi from "joi-browser";
import TCInput from "./teacherCreateInput";
import TCButton from "./teacherCreateButton";
import axios from "axios";
import PopUp from "../common/popup";
import ProblemPreview from "./problemPreview";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TypeSelect from "./teacherCreateTypeSelect";

class TeacherCreate extends Form {
  backgroundStyle = `background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%233185fc'/%3E%3Cstop offset='1' stop-color='%230aa286'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23e05263'/%3E%3Cstop offset='1' stop-color='%23eeb868'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;`;

  state = {
    qtype: 1,
    data: { qname: "", qtext: "" },
    errors: {},
    preview: false,
    submit: false,
  };

  schema = {
    qname: Joi.string().required().label("Question Name"),
    qtext: Joi.string().required().label("Question Text"),
  };

  doSubmit = () => {
    if (this.state.qtype === 1) {
      this.setState({ preview: true });
    } else {
      this.onConfirm();
    }
  };

  onConfirm = () => {
    console.log("submitting");
    const newProblem = {
      ...this.state.data,
      qtype: this.state.qtype,
      complete: false,
      answer: "",
    };
    axios.post("http://localhost:3001/create", newProblem);
    this.onPreviewClose();
    this.teacherCreateForm.reset();
    this.state.data = { qname: "", qtext: "" };
    toast("Problem Published!");
  };

  onPreviewClose = () => {
    this.setState({ preview: false });
  };

  renderProblemText = () => {
    return (
      <React.Fragment>
        <label htmlFor="qtext" className="teacher-input-label">
          Question Text*
        </label>
        <div className="teacher-input-area full-input-area">
          <textarea
            className="teacher-input"
            placeholder="Enter your math problem."
            onChange={this.handleChange}
            name="qtext"
            id="qtext"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { errors } = this.state;
    return (
      <section className="teacher-form-page">
        <Helmet bodyAttributes={{ style: this.backgroundStyle }} />
        <div className="teacher-form-format">
          <form
            onSubmit={this.handleSubmit}
            className="teacher-create-form"
            ref={(el) => (this.teacherCreateForm = el)}
          >
            <span className="teacher-create-heading">
              Create Your Math Problem
            </span>
            <label className="teacher-input-label">Question Type*</label>
            <TypeSelect
              selected={this.state.qtype}
              onSelect={(type) => this.setState({ qtype: type })}
            />
            <TCInput
              name="qname"
              label="Question Name*"
              error={errors["qname"]}
              onChange={this.handleChange}
            />
            {this.renderProblemText()}
            <TCButton onValidate={this.validate()} />
            {this.state.preview ? (
              <ProblemPreview
                qname={"Preview: " + this.state.data.qname}
                qtext={this.state.data.qtext}
                onClose={this.onPreviewClose}
                showConfirm={true}
                onConfirm={this.onConfirm}
              ></ProblemPreview>
            ) : null}
          </form>
        </div>
      </section>
    );
  }
}

export default TeacherCreate;
