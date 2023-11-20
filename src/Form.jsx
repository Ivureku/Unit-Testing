import React, { useState } from 'react';
import Textbox from './Textbox';
import Button from './Button';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const allowLogin = () => {
        return formData.name.trim() !== '' && formData.password.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name == 'root' && formData.password == 'root') {
            alert('yahoo!');
            setLoginSuccess(true);
        } else {
            alert('type agane');
        }
    };

    return (
        <div className='bg'>


            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-screen'>
                <Textbox
                    label="Username"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Textbox
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    className="ml-3 mt-2"
                />
                <Button
                    label="Login"
                    disabled={!allowLogin()}
                />
            </form>

        </div>
    );
};

export default Form;



// Pag wa, dili ma click. if both is root, then login then alert "login success", otherwise failed

