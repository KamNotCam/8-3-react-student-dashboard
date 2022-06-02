import React from "react";
class Cohort extends React.Component {
  constructor() {
    super();
    this.state = {
      allCohorts: [],
    };
  }

  componentDidMount() {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          allCohorts: data,
        });
      });
  }

  render() {
    // let everyCohort = this.state.allCohorts.map((cohort, i) => {
    //   if (cohort.cohort.cohortCode === "Winter2025") {
    //     <div key={i}>{cohort.names.preferredName}</div>;
    //   }
    // });

    let everyCohort = this.state.allCohorts.map((cohort, i) => (
      <div key={i}>{cohort.cohort.cohortCode}</div>
    ));

    // let everyCohort = this.state.allCohorts.filter(cohort => cohort.cohort.cohortCode === 'Winter2025')

    return (
      <div>
        <h1>Choose A Class By Start Date</h1>
        <section>
          <h1>All Students</h1>
          {everyCohort}
          <p>Winter 2025</p>
          <p>Fall 2026</p>
          <p>Summer 2026</p>
          <p>Spring 2026</p>
          <p>Fall 2025</p>
          <p>Summer 2025</p>
          <p>Spring 2025</p>
        </section>
      </div>
    );
  }
}

export default Cohort;
