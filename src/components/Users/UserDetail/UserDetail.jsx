import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './UserDetail.module.css';
import { getUserDetail } from '../../../services/api';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserDetails = async () => {
            const response = await getUserDetail(id);
            setUser(response.data.data);
        };
        getUserDetails();
    }, [id]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User Detail</h1>
            {user && (
                <div>
                    <p>Name: {user.first_name} {user.last_name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <button onClick={() => navigate('/users')} className={styles.button}>Back</button>
        </div>
    );
};

export default UserDetail;
