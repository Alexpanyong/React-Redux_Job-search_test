import React, { Component } from 'react';
import './JobCard.css';

export default class JobCard extends Component {

    

    render() {
        const { job_title, 
                salaryRangeFilter, 
                salaryRangeFrom, 
                salaryRangeTo, 
                getShortForm,
                job_location,
                xp_lvl,
                degree,
                job_type,
                company_logo,
                company_name
                } = this.props;
        return (
        <div className="jobCard">
                <div className="jobTitle">{job_title}</div>
                <div className="salaryRange">{`${getShortForm(salaryRangeFrom)} - ${getShortForm(salaryRangeTo)}`}</div>
            <div className="clearFix"></div>
            <div className="jobDetails">
                <div id="location">
                    <div>
                    <span className="icon"></span>
                    <span className="text">{job_location}</span>
                    </div>
                </div>
                <div id="xpLvl">
                    <div>
                    <span className="icon"></span>
                    <span className="text">{xp_lvl}</span>
                    </div>
                </div>
                <div id="degree">
                    <div>
                    <span className="icon"></span>
                    <span className="text">{degree}</span>
                    </div>
                </div>
                <div id="type">
                    <div>
                    <span className="icon"></span>
                    <span className="text">{job_type}</span>
                    </div>
                </div>
            </div>
            <div className="clearFix"></div>
            <div className="company">
                <div>
                    <div className="logo"><img src={company_logo} alt="company logo"/></div>
                    <div className="name">{company_name}</div>
                </div>
            </div>
            <div className="time">3 hours ago</div>
        </div>
        )
    }
}
