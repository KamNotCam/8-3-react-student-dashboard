import React from "react";
import Students from "./Students";
class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudents: [],
    };
  }

  componentDidMount() {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          allStudents: data,
        });
      })
      .catch((error) => {
        console.log("There Are No Students", error);
      });
  }

  render() {
    const studentNames = this.state.allStudents.map((student) => {
      return (
        <Students
          key={student.id}
          id={student.id}
          names={student.names.preferredName}
          username={student.username}
          profilePhoto={student.profilePhoto}
          cohort={student.cohort.cohortCode}
        />
      );
    });
    return <div>{studentNames}</div>;
  }
}
export default StudentList;
