import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>{message}</h2>
                <div className={styles.actions}>
                    <button onClick={onClose} className={styles.cancel}>
                        Cancel
                    </button>
                    <button onClick={onConfirm} className={styles.confirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
