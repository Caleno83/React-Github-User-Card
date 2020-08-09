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
    margin: 5px 0 15px 0;
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
      search: ""
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
      .get(`https://api.github.com/users/${this.state.search}/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
        console.log(" This is the followers response:", this.state.followers);
      })
      .catch((err) => console.log("This is the followers Error:", err));
  };

  fetchFollowers = (e) => {
    e.preventDefault()
    console.log("this is my fetchFollowers been invoked")
    axios
      .get(`https://api.github.com/users/${this.state.search}`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleChanges = (e) => {
    console.log("handleChanges called");
    this.setState({
      // take the previous state, and just change the dogBreed text
      ...this.state,
      search: e.target.value
    });
  };


  componentDidUpdate(prevState, prevProps) {
    console.log("CDU is invoked");
    if (prevState.user !== this.state.userGitHub) {
      console.log("User GitHub have changed!");
    }
    if (prevState.search !== this.state.search) {
      console.log("State updated, new User is:", this.state.search);
    }
  }

  render() {
    console.log("render is invoked");
    return (
      <Container>
        <h1>GitHub User Profile</h1>
        
        <UserGitHubCard users={this.state.user} />
        <input
          type="text"
          value={this.state.search}
          placeholder=" Type GitHub Username"
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchFollowers}>Search GitHub Users</button>
        <button onClick={this.handleFollowers} >Click To See Followers</button>
        <FollowersCard followers={this.state.followers} />
      </Container>
    );
  }
}

export default App;
