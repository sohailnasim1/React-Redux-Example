/**
 * TextInput component. 
 * @Author: Sohail Nasim
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const TextInput = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}
) => {
    return (
        <div className="form-group">
    <label htmlFor={name}>{label}</label>
            <input type={type} 
            name={name}
            value={value}
            onChange={onChange}
            className={classnames('form-control form-control-lg', {'is-invalid': error})}
            placeholder={placeholder} />
            <div className="invalid-feedback">
            {error}
            </div>
        </div>
    )
 
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInput.defaultProps = {
    type: 'text'
}
export default TextInput; 