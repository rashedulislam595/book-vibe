import React from 'react';
import { useNavigate } from 'react-router';


const ErrorPageUI = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.code}>404</h1>
            <h2 style={styles.title}>Page Not Found</h2>
            <p style={styles.text}>
                Oops! The page you are looking for doesn’t exist.
            </p>

            <div style={styles.btnGroup}>
                <button style={styles.button} onClick={() => navigate('/')}>
                    Go Home
                </button>

                <button style={styles.outlineBtn} onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f8fafc',
        textAlign: 'center',
    },
    code: {
        fontSize: '90px',
        color: '#ef4444',
        margin: 0,
    },
    title: {
        fontSize: '28px',
        margin: '10px 0',
    },
    text: {
        color: '#64748b',
        marginBottom: '20px',
    },
    btnGroup: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        background: '#6366f1',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    outlineBtn: {
        padding: '10px 20px',
        background: 'transparent',
        border: '1px solid #6366f1',
        borderRadius: '6px',
        cursor: 'pointer',
    }
};

export default ErrorPageUI;