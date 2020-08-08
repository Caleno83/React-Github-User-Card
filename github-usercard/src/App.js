import React from "react";
import UserGitHubCard from "./components/UserGitHubCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    console.log("constructor is invoked");
    super();
    this.state = {
      userGitHub: [],
    };
  }

  componentDidMount() {
    console.log("CDM invoked");
    axios
      .get("https://api.github.com/users/Caleno83")
      .then((res) => {
        this.setState({ userGitHub: res.data });
        console.log(" This is the response:", this.state);
      })
      .catch((err) => console.log("This is the Error:", err));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.UserGitHub !== this.state.userGitHub) {
      console.log("User GitHub have changed!");
    }
  }

  render() {
    console.log("render is invoked");
    return (
      <div className="App">
        <h1>My GitHub Profile</h1>
        <UserGitHubCard users={this.state.userGitHub} />
      </div>
    );
  }
}

export default App;
