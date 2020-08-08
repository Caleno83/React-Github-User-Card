import React from "react";

const FollowersCard = (props) => {
  console.log(" FollowersCard component is invoked");

  return (
    <>
        {props.followers.map(users => (
            <div key={users.id} >
      <img src={users.avatar_url} alt={users.name} />
      <h2>{users.name}</h2>
      <h3>{users.login}</h3>
      <p>{users.html_url}</p>
      </div>
        ))}
    </>
  );
};

export default FollowersCard;
