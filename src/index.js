import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './css/style.css';

import data from './data.json';
import FilterBar from './Components/FilterBar';
import JobCard from './Components/JobCard';

class App extends Component {
	constructor(props) {
		super(props);
		// this.addTag = this.addTag.bind(this);
		this.state = {
			jobs : [],
			tags : []
		};
	}

	filterJobs = (tag) => {
		const languages = this.state.jobs.filter((job) => {
			return job.languages.includes(tag);
		});
		//filter state for tahs in tools
		const tools = this.state.jobs.filter((job) => {
			return job.tools.includes(tag);
		});
		const jobs = [
			...languages,
			...tools
		];
		return jobs;
	};

	//adds tags to the filter bar and filters
	addTag = (tag) => {
		const inState = this.state.tags.includes(tag);
		if (!inState) {
			const jobs = this.filterJobs(tag);
			this.setState({
				jobs,
				tags : [
					...this.state.tags,
					tag
				]
			});
		}
	};

	removeTag = (tag) => {
		const keep = this.state.tags.filter((oldTag) => {
			return oldTag != tag ? oldTag : '';
		});
		if (keep.length) {
			let jobs = data.filter((job) => {
				let matchingTags = [];
				// 	for each job check for all  tags
				//		loop through the tags and check current job
				keep.map((tag) => {
					if (job.languages.includes(tag) || job.tools.includes(tag)) {
						matchingTags.push(`match on id ${job.id}`);
					}
				});
				if (keep.length === matchingTags.length) {
					return job;
				}
			});
			// 			check if a tag is in langs or tools store

			this.setState({
				jobs,
				tags : [
					...keep
				]
			});
		} else {
			this.setState({
				jobs : data,
				tags : []
			});
		}
	};

	clearTags = () => {
		this.setState({
			jobs : data,
			tags : []
		});
	};

	componentDidMount() {
		this.setState({
			jobs : data
		});
	}

	render() {
		return (
			<React.Fragment>
				<header />
				<section className="main">
					<div className="container">
						<FilterBar tags={this.state.tags} removeTag={this.removeTag} clearTags={this.clearTags} />
						{this.state.jobs.map((job) => {
							return <JobCard job={job} key={job.id} addTag={this.addTag} />;
						})}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));
