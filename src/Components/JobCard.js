import React from 'react';

import JobDetails from './JobDetails';
import TagButton from './TagButton';

const JobCard = (props) => {
	const { addTag, removeTag } = props;

	return (
		<div className={`jobCard ${props.job.featured ? 'featured' : ''}`}>
			<div className="logo">
				<img src={process.env.PUBLIC_URL + props.job.logo} alt="logo" />
			</div>

			<JobDetails job={props.job} />

			<div className="tags">
				{props.job.languages.map((tag) => {
					return <TagButton closeable={false} tag={tag} addTag={addTag} />;
				})}
				{props.job.tools.map((tag) => {
					return <TagButton closeable={false} tag={tag} addTag={addTag} />;
				})}
			</div>
		</div>
	);
};

export default JobCard;
