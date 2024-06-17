
import React,{ useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add login logic here
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className='flex flex-col justify-center text-3xl'>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Signin;