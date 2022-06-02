import React from "react";
class Students extends React.Component {
  render() {
    const { names, username, profilePhoto, cohort } = this.props;
    return (
      <div>
        <img
          src={profilePhoto}
          alt="profile-portrait"
          width="100"
          height="100"
        />
        Student Profile
        {names}
        <br />
        {cohort}
        {username}
      </div>
    );
  }
}
export default Students;
