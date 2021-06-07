import NavBar from "./components/navBar";
import ProblemSelect from "./components/problemSelect";
import StudentProblem from "./components/studentProblem";
import SignUp from "./components/signup";
import TeacherPage from "./components/teacher";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./styles/globalStyles.css";
import Login from "./components/login";
import HomePage from "./components/homePage";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="app-container">
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route
              path="/problemselect/:id/:type/:title"
              component={StudentProblem}
            ></Route>
            <Route path="/problemselect" component={ProblemSelect}></Route>
            <Route path="/teacher" component={TeacherPage}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Redirect from="/" exact to="/home"></Redirect>
          </Switch>
        </main>
        <ToastContainer progressClassName="toastProgress" bodyClassName="toastBody" />
      </React.Fragment>
    );
  }
}

export default App;
