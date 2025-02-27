import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
    const { login } = useAuth();
    const [selectedRole, setSelectedRole] = useState('student');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        login({ selectedRole, name, password });
    };

    return (
        <div className="h-screen bg-gray-100 p-8 w-full">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden mt-16">
                <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4 p-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-600">Select Role:</label>
                        <select
                            id="role"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                            <option value="professor">Professor</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
