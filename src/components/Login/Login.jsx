import React, { useRef, useState } from 'react';
import { login } from '../../services/api'; 
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const { login: setAuthToken } = useAuth();  
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const {data} = await login({ email, password });
            if (data.token) {
                setAuthToken(data.token); 
                navigate('/users');  
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                    required
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default Login;
