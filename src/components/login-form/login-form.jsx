import { useState } from 'react';

import FormInput from '../form-input/form-input';
import RegularButton from '../button/regular-button';

const defaultFormFields = {
    email: '',
    password: '',
};

const LoginForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('signed in');
            resetFormFields();
        } catch (error) {
            console.log('user sign in failed', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-in-container py-6 px-5 shadow-md text-center w-1/3 bg-gray-50'>
            <h2 className='leading-6 text-2xl text-center mb-2'>Already have an account?</h2>
            <span className='text-sm font-[300] '>Sign in with your email and password</span>
            <form className="my-3"onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <RegularButton type='submit'>Sign In</RegularButton>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
