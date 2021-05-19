import React from 'react';
import PropTypes from 'prop-types';

const Module = ({ name, img, des }) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>
				<img src={img} alt={des} />
			</p>
		</div>
	);
};

Module.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string,
	des: PropTypes.string,
};

export default Module;
