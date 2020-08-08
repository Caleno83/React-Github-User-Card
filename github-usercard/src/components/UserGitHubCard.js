import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  width: 100%;
  padding: 30px;

  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #5f9ea0;
  margin-bottom: 30px;

  .right {
    float: right;
    margin: 5px 100px 0 0;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 3px;
    margin-left: 60px;
  }
  .name {
    font-size: 15px;
  }
  .username {
    font-size: 18px;
    font-style: italic;
    margin: 3px 0 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 3px;
  }
  .link {
    a {
      text-decoration: none;
      color: black;
      &: hover {
        color: silver;
      }
    }
  }
`;

const UserGitHubCard = (props) => {
  console.log(" UserGitHibCard component is invoked");

  return (
    <UserContainer>
      <img src={props.users.avatar_url} alt={props.users.name} />
      <div className="right">
        <div className="name">
          <h2>{props.users.name}</h2>
        </div>
        <div className="username">
          <h3>Username: {props.users.login}</h3>
        </div>
        <div className="link">
          <a href={props.users.html_url}>Website: {props.users.html_url}</a>
        </div>
        <div className="para">
          <p>Followers: {props.users.followers}</p>
          <p>Following: {props.users.following}</p>
        </div>
      </div>
    </UserContainer>
  );
};

export default UserGitHubCard;
