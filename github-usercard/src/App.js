import React from "react";
import UserGitHubCard from "./components/UserGitHubCard";
import FollowersCard from "./components/FollowersCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    console.log("constructor is invoked");
    super();
    this.state = {
      userGitHub: [],
      followers: []
    };
  }

  componentDidMount() {
    console.log("CDM invoked");
    axios
      .get("https://api.github.com/users/Caleno83")
      .then((res) => {
        this.setState({ userGitHub: res.data });
        console.log(" This is the user response:", this.state.userGitHub);
      })
      .catch((err) => console.log("This is the Error:", err));

      axios
      .get("https://api.github.com/users/Caleno83/followers")
      .then((res) => {
        this.setState({ followers: res.data });
        console.log(" This is the followers response:", this.state.followers);
      })
      .catch((err) => console.log("This is the followers Error:", err));
  
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("CDU is invoked")
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
        <FollowersCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
