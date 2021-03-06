import React, {PropTypes} from 'react';

const TextInput = (props) => {
	return (
		<input type="text" {...props} />
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	hidden: PropTypes.bool,
	onClick: PropTypes.func,
};

export default TextInput;
