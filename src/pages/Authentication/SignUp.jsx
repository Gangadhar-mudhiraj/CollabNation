import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import Title from "../../components/common/Title";
import Button from "../../components/common/Button";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("student");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Signup successful for ${selectedRole}!`);
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bgcolor w-full p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#264653] backdrop-blur-lg shadow-2xl rounded-2xl p-6 md:p-8 lg:p-10 w-full max-w-lg text-white border border-white/20"
            >
                <Title text={"Sign Up"} />
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-[#2a9d8f]" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 pl-10 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] text-white placeholder-white/70 transition"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-[#2a9d8f]" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 pl-10 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] text-white placeholder-white/70 transition"
                        />
                    </div>

                    {/* Role Selection */}
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full p-3 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] text-white transition"
                    >
                        <option value="student" className="text-black">Student</option>
                        <option value="admin" className="text-black">Admin</option>
                        <option value="professor" className="text-black">Professor</option>
                        <option value="mentor" className="text-black">Mentor</option>
                    </select>

                    <Button text="Sign Up" />
                </form>
            </motion.div>
        </div>
    );
};

export default SignUp;
