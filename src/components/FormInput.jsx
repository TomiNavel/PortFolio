import PropTypes from "prop-types";
import { Input } from "@material-tailwind/react";

const FormInput = ({ label, name, placeholder, value, onChange, error }) => {
    return (
        <div>
            <Input
                color="gray"
                size="lg"
                variant="static"
                label={label}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                containerProps={{ className: "!min-w-full" }}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default FormInput;
