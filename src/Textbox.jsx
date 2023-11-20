import React from 'react'

const Textbox = ({ label, name, value, onChange, type = 'text', className = '' }) => {
    return (
        <label>
            {label}:
            <input
                className={`ml-2 ${className}`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default Textbox
