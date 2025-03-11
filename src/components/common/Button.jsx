import React from 'react'
import { motion } from 'motion/react'

const Button = ({ text, func }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full md:w-1/2 mx-auto block p-3 bg-[#264653] hover:bg-[#1d3a40] rounded-md transition duration-200 text-white"

        >
            {text}
        </motion.button>
    )
}

export default Button
