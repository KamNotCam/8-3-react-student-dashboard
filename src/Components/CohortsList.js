import React from "react";
class CohortsList extends React.Component {
  render() {
    const { cohort } = this.props;
    return (
      <div>
        All Students
        <ul>{cohort}</ul>
      </div>
    );
  }
}
export default CohortsList;
