import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Component } from "react";

class App extends Component {
  state = {
    isDarkMode: true
  }
  toggleMode() {
    const isDarkMode = !this.state.isDarkMode
    this.setState({ isDarkMode })
  }
  render() {
    const isDarkMode = this.state.isDarkMode
    const forground = isDarkMode ? "light" : "dark"
    const background = isDarkMode ? "dark" : "light"

    return (
      <div className={`App bg-${background}`}>
        <NavBar
          isDarkMode={isDarkMode}
          toggleMode={() => this.toggleMode()}
        />
        <Home
          isDarkMode={isDarkMode}
        />
        <Experience
          isDarkMode={isDarkMode}
        />
        <Projects
          isDarkMode={isDarkMode}
        />
        <Footer
          isDarkMode={isDarkMode}
        />
      </div>);
  }
}

export default App;
