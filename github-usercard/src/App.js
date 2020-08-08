import React from "react";
import UserGitHubCard from "./components/UserGitHubCard";
import FollowersCard from "./components/FollowersCard";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-bottom: 40px;
    text-shadow: 3px 3px 2px gray;
    font-size: 40px;
  }

  button {
    border: 1px solid black;
    border-radius: 4px;
    background-color: black;
    color: white;
    padding: 3px 5px 3px 5px;
    cursor: pointer;

    font-size: 18px;
    &: hover {
      color: #fff8dc;
    }
  }
`;

class App extends React.Component {
  constructor() {
    console.log("constructor is invoked");
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    console.log("CDM invoked");
    axios
      .get("https://api.github.com/users/Caleno83")
      .then((res) => {
        this.setState({ user: res.data });
        console.log(" This is the user response:", this.state.user);
      })
      .catch((err) => console.log("This is the Error:", err));
  }

  handleFollowers = (e) => {
    console.log("this is my handleChange invoked");
    e.preventDefault();
    axios
      .get("https://api.github.com/users/Caleno83/followers")
      .then((res) => {
        this.setState({ followers: res.data });
        console.log(" This is the followers response:", this.state.followers);
      })
      .catch((err) => console.log("This is the followers Error:", err));
  };


  componentDidUpdate(prevState, prevProps) {
    console.log("CDU is invoked");
    if (prevState.user !== this.state.userGitHub) {
      console.log("User GitHub have changed!");
    }
  }

  render() {
    console.log("render is invoked");
    return (
      <Container>
        <h1>My GitHub Profile</h1>
        <UserGitHubCard users={this.state.user} />
        <button onClick={this.handleFollowers} >Click For Followers</button>
        <FollowersCard followers={this.state.followers} />
      </Container>
    );
  }
}

export default App;
