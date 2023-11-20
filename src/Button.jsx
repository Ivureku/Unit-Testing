import React from 'react'

const Button = ({ onClick, label, disabled }) => {
    return (
        <input
            className="bg-blue-300 rounded px-2 py-1 mt-2 disabled:bg-slate-300"
            type="submit"
            value={label}
            disabled={disabled}
            onClick={onClick}
        />
    );
};

export default Button
