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
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signup successful!");
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

                    {/* Sign Up Button */}
                    <Button text="Sign Up" />
                </form>

                {/* Login Link */}
                <p className="text-center mt-4 text-sm md:text-base">
                    Already have an account?
                    <span
                        className="text-[#e9c46a] hover:underline cursor-pointer flex items-center justify-center gap-1 mt-2"
                        onClick={() => navigate("/login")}
                    >
                        <MdOutlinePersonAddAlt /> Login
                    </span>
                </p>
            </motion.div>
        </div>
    );
};

export default SignUp;