import React from 'react';
import { motion } from 'framer-motion';

const colorClasses = {
    'pink-500': 'text-pink-500',
    'blue-500': 'text-blue-500',
    'green-500': 'text-green-500',
    'white': 'text-white',
    'black': 'text-black',
};

const Title = ({ text, color = 'white' }) => {
    return (
        <motion.h1
            className="text-5xl font-bold text-center text-white mb-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {text.toUpperCase()}
        </motion.h1>
    );
};

export default Title;
