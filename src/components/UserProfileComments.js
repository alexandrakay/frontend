import React from "react";

function UserProfileComments(props) {
  const { person } = props;
  return (
    <div className="userComments">
    <h2> comment:  </h2>
      {person.comment} <br />
    
      <p id="salt">Salt Level: {person.negativity_score}</p>
      <br />
    </div>
  );
}

export default UserProfileComments;