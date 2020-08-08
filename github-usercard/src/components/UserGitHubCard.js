import React from "react";

const UserGitHubCard = (props) => {
  console.log(" UserGitHibCard component is invoked");

  return (
    <div>
      <img src={props.users.avatar_url} alt={props.users.name} />
      <h2>{props.users.name}</h2>
      <h3>{props.users.login}</h3>
      <p>{props.users.html_url}</p>
      <p>{props.users.followers}</p>
      <p>{props.users.following}</p>
    </div>
  );
};

export default UserGitHubCard;
