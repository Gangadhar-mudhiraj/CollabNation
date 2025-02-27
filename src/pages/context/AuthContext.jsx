// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = ({ selectedRole, name, password }) => {
        // Implement authentication logic here
        if (name && password) {
            const userData = { name, role: selectedRole }; // Store name and role
            setUser(userData);
            navigate(`/dashboard/${selectedRole}`);
        } else {
            alert("Please provide both name and password");
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
