"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* Text Content */}
                <div className="flex flex-col space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-accent mb-2">Hello, I&apos;m</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            Garvit Gupta
                        </h1>
                        <div className="text-2xl md:text-3xl font-semibold text-gray-300 h-[40px]">
                            <TypeAnimation
                                sequence={[
                                    "Data Analyst",
                                    1500,
                                    "Data Engineer",
                                    1500,
                                    "AI/ML Engineer",
                                    1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-gradient"
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed max-w-xl"
                    >
                        I am a professional and detail-oriented Data Analyst and Data Engineer with experience in SQL, Python, and AWS. As a Computer Science graduate, I have built scalable ETL pipelines, AI-powered automation systems, and real-time analytics solutions. I enjoy transforming complex data into meaningful insights and production-ready solutions that solve real-world business problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a
                            href="/Garvit_Gupta_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-medium transition-all neon-glow-primary"
                        >
                            <Download size={18} /> Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 bg-transparent border border-gray-600 hover:border-accent hover:text-accent text-white px-6 py-3 rounded-full font-medium transition-all"
                        >
                            <Mail size={18} /> Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-6 pt-4"
                    >
                        <a href="https://www.linkedin.com/in/garvit-gupta-8b51a3200" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/garvit124" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <Github size={24} />
                        </a>
                    </motion.div>
                </div>

                {/* Image / Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-2 neon-glow-primary bg-gradient-to-tr from-primary to-accent">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy relative bg-navy">
                            <Image
                                src="/DSC_6859.JPEG"
                                alt="Garvit Gupta"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors">
                    <ChevronDown size={32} />
                </a>
            </motion.div>
        </section>
    );
}
