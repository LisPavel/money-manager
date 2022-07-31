import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({
    name,
    value,
    onChange,
    label,
    error,
    type,
    max,
    min,
}) => {
    // const [showPass, setShowPass] = useState(false);

    const getInputClasses = () => {
        return `form-control${error ? " is-invalid" : ""}`;
    };

    const getInputGroupClasses = () => {
        return `input-group${error ? " has-validation" : ""}`;
    };

    const handleChange = ({ target: { value, name } }) => {
        onChange({ name, value: Number(value) });
    };

    return (
        <div className="mb-4 ">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className={getInputGroupClasses()}>
                <input
                    type="number"
                    id={name}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    className={getInputClasses()}
                    step={type === "integer" ? 1 : 0.01}
                    max={max}
                    min={min}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

NumberInput.defaultProps = {
    type: "integer",
    max: Number.MAX_VALUE,
    min: Number.MIN_VALUE,
};

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    type: PropTypes.oneOf(["integer", "float"]),
    max: PropTypes.number,
    min: PropTypes.number,
};

export default NumberInput;
