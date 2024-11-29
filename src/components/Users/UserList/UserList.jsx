import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Modal from './Modal/Modal';
import styles from './UserList.module.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [page]);

    const fetchUsers = async () => {
        const response = await getUsers(page);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
    };

    const handleDelete = (id) => {
        setUserToDelete(id);
        setIsModalOpen(true);
    };

    const confirmDelete = async () => {
        if (userToDelete) {
            try {
                await deleteUser(userToDelete);
                fetchUsers();
                setIsModalOpen(false);
            } catch (error) {
                console.error('Error deleting user:', error);
                setIsModalOpen(false);
            }
        }
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User List</h1>
            <button onClick={() => navigate('/users/create')} className={styles.button}>Create User</button>
            <ul className={styles.userList}>
                {users.map((user) => (
                    <li key={user.id} className={styles.user}>
                        {user.first_name} {user.last_name}
                        <button onClick={() => navigate(`/users/${user.id}`)}>View</button>
                        <button onClick={() => navigate(`/users/edit/${user.id}`)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div className={styles.pagination}>
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
                message="Are you sure you want to delete this user?"
            />
        </div>
    );
};

export default UserList;
