import React from 'react';

const JobDetails = (props) => {
	const job = props.job;
	return (
		<div className="jobDetails">
			<div className="company">
				<h2>{job.company}</h2>
				{job.new ? <span className="label newLabel">new!</span> : ''}
				{job.featured ? <span className="label featuredLabel">Featured</span> : ''}
			</div>
			<div className="role">
				<p>{job.role}</p>
			</div>
			<div className="particulars">
				<p>{job.postedAt}</p>
				<p />
				<p>{job.contract}</p>
				<p />
				<p>{job.location}</p>
			</div>
		</div>
	);
};

JobDetails.propTypes = {};

export default JobDetails;
