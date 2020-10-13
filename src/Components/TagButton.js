import React from 'react';

const TagButton = ({ closeable, tag, addTag, removeTag }) => {
	return (
		<p className="tagButton" onClick={!closeable ? () => addTag(tag) : undefined}>
			{tag}
			{closeable && (
				<span className="remove" onClick={() => removeTag(tag)}>
					X
				</span>
			)}
		</p>
	);
};

export default TagButton;
