import React, {PropTypes} from 'react';
import AddButton from '../common/AddButton';

const CategoryForm = ({onSubmit, onChange, form}) => {
	return (
		<form onSubmit={onSubmit} className="form-inline">
			<div className="form-group">
				<input type="text" placeholder="Name" className="form-control" value={form.name} name="name" onChange={event => {onChange(event.target.name, event.target.value);}} />
			</div>
			<AddButton />
			<div className="controls">
			{form.error && <span className="help-inline text-danger">{form.error}</span>}
			</div>
		</form>
	);
};

CategoryForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	form: PropTypes.object.isRequired,
	error: PropTypes.string
};

export default CategoryForm;
