import React from "react";
import styled from "styled-components";

const FollowersContainer = styled.div`
  width: 100%;
  padding: 30px;

  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #5f9ea0;
  margin: 15px;

  .right {
    float: right;
    margin: 30px 100px 0 0;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 3px;
    margin-left: 60px;
  }

  .username {
    font-size: 18px;
    font-style: italic;
    margin: 3px 0 10px;
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

const FollowersCard = (props) => {
  console.log(" FollowersCard component is invoked");

  return (
    <>
      {props.followers.map((followers) => (
        <FollowersContainer>
          <div key={followers.id}>
            <img src={followers.avatar_url} alt={followers.name} />
            <div className="right">
              <div className="username">
                <h3>Username: {followers.login}</h3>
              </div>
              <div className="link">
                <a href={followers.html_url}>Website: {followers.html_url}</a>
              </div>
            </div>
          </div>
        </FollowersContainer>
      ))}
    </>
  );
};

export default FollowersCard;
