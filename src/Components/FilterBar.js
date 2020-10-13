import React from 'react';
import TagButton from './TagButton';

const FilterBar = ({ tags, removeTag, clearTags }) => {
	if (tags.length < 1) {
		return null;
	}
	return (
		<div className="filterBar">
			<div className="filters">
				{tags.map((tag) => {
					return <TagButton closeable={true} tag={tag} removeTag={removeTag} />;
				})}
			</div>
			<div className="clear">
				<a href="#" onClick={() => clearTags()}>
					Clear
				</a>
			</div>
		</div>
	);
};

export default FilterBar;
