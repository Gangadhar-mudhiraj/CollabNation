import { createContext, useState, useContext } from 'react';


const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    // Add Notification
    const addNotification = (title, description) => {
        const newNotification = {
            id: Date.now(), // Unique id based on timestamp
            title,
            description,
            createdAt: new Date(),
        };

        setNotifications((prev) => [...prev, newNotification]);

        // Auto-remove after 12 hours
        setTimeout(() => {
            removeNotification(newNotification.id);
        }, 12 * 60 * 60 * 1000); // 12 hours in milliseconds
    };

    // Remove Notification by id
    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    return (
        <ProjectContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => useContext(ProjectContext);
