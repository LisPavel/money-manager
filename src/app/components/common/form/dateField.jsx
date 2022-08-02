import React from "react";
import PropTypes from "prop-types";

const DateField = ({
    name,
    value,
    onChange,
    label,
    error,
    // type,
    // max,
    // min,
}) => {
    // const [showPass, setShowPass] = useState(false);

    const getInputClasses = () => {
        return `form-control${error ? " is-invalid" : ""}`;
    };

    const getInputGroupClasses = () => {
        return `input-group${error ? " has-validation" : ""}`;
    };

    const handleChange = ({ target: { value, name } }) => {
        onChange({ name, value });
    };

    return (
        <div className="mb-4 ">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className={getInputGroupClasses()}>
                <input
                    type="date"
                    id={name}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

// DateField.defaultProps = {
//     type: "integer",
//     max: Number.MAX_VALUE,
//     min: Number.MIN_VALUE,
// };

DateField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    // type: PropTypes.oneOf(["integer", "float"]),
    // max: PropTypes.number,
    // min: PropTypes.number,
};

export default DateField;
