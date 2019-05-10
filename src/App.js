import React, { Component } from 'react';
import './App.css';
import Header from './shared/components/Header';
import JobCard from './components/JobCard/JobCard';
import { connect } from 'react-redux';
import { fetchApiData, handleInputChange, handleClickFilterResult } from './store/actions';

class App extends Component {

  componentWillMount() {
    this.props.fetchApiData();
  }

  getShortForm = val => (parseInt(val) / 1000 + 'k');

  handleInputChange = e => {
    this.props.handleInputChange(e.target.value);
  };

  handleClickFilterResult = (jobs = [], value) => {
    if (value) {
      const filteredJobs = jobs ? jobs.filter(job => job.company_name.includes(value) || job.job_title.includes(value)) : [];
      this.props.handleClickFilterResult(filteredJobs);
    }
  };

  render() {
    const { jobs, total_num } = this.props.apiData.data || [];
    const { inputValue, jobsToDisplay } = this.props;
    const searchedJobs = jobsToDisplay ? jobsToDisplay : jobs;
    const jobList = searchedJobs.map(job => <JobCard
      key={job.id}
      job_title={job.job_title}
      salaryRangeFilter={job.salary_range_filters[0][Object.keys(job.salary_range_filters[0])[0]]}
      salaryRangeFrom={job.salary_range_from}
      salaryRangeTo={job.salary_range_to}
      getShortForm={this.getShortForm}
      job_location={job.job_location}
      xp_lvl={job.xp_lvl}
      degree={job.degree}
      job_type={job.job_type}
      company_logo={job.company_logo}
      company_name={job.company_name}
    />);

    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <div className="searchBox">
            <span>Search for job title or company name</span>
            <div className="inputBox">
              <input id="inputText" onChange={this.handleInputChange}></input>
            </div>
            <button className="searchBtn" onClick={() => this.handleClickFilterResult(jobs, inputValue)}>Filter results</button>
          </div>
          <div className="jobsWrapper">
            {jobsToDisplay.length !== 0 && <div className="numberOfJobs">{searchedJobs ? searchedJobs.length : total_num} jobs found</div>}
            {searchedJobs && jobList }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
    inputValue: state.inputValue,
    jobsToDisplay: state.jobsToDisplay
  }
}

const mapDispatchToProps = {
  fetchApiData,
  handleInputChange,
  handleClickFilterResult
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
