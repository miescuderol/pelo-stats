import * as React from 'react';
import { useDispatch } from 'react-redux';

import { useAuthMutation } from '../../services/peloton';
import { setSessionData } from './authSlice';
import type { UserConfig } from '../../services/types';

export const Login = () => {
    const dispatch = useDispatch();
    const [login, { isLoading }] = useAuthMutation();

    const [formState, setFormState] = React.useState<UserConfig>({
        username_or_email: '', password: ''
    });
    const handleChange = ({
        target: { name, value }
    }: React.ChangeEvent<HTMLInputElement>) => 
        setFormState((prev) => ({ ...prev, [name]: value }));

    return (
        <>
            <input 
                type='text'
                required
                placeholder='Email or Username'
                className='input-field'
                onChange={handleChange}
                name='username_or_email'
            />
            <input 
                type='password'
                required
                placeholder='Password'
                className='input-field'
                onChange={handleChange}
                name='password'
            />
            <button 
                className='button'
                onClick={
                    async () => {
                        try {
                            const sessionData = await login(formState).unwrap();
                            dispatch(setSessionData(sessionData));
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
            >
                {isLoading ? 'Loading...': 'Login'}
            </button>
        </>
    );
}

export default Login;