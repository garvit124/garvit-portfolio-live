"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Junior Python Developer Intern",
        company: "BIZINNOVATIV SOFTWARE",
        period: "2023 - 2024",
        description: [
            "Designed & optimized 10+ MySQL databases to handle large-scale data queries.",
            "Improved overall system architecture for better scalability and performance.",
            "Enhanced backend connectivity ensuring flawless execution for 100+ daily transactions.",
        ],
    },
    {
        role: "Python Development Intern",
        company: "NEXT24TECH",
        period: "2022 - 2023",
        description: [
            "Built 5+ comprehensive GUI applications utilizing Tkinter and backend logic.",
            "Integrated backend MySQL database systems ensuring robust data persistence and retrieval.",
            "Collaborated with cross-functional teams to translate requirements into technical solutions.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
                    {/* Central line for desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`mb-16 relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                            {/* Timeline dot */}
                            <div className="absolute left-[-41px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-navy border-4 border-primary flex items-center justify-center z-10 neon-glow-primary">
                                <Briefcase size={16} className="text-accent" />
                            </div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`w-full md:w-[45%] glass p-8 rounded-2xl hover:neon-glow transition-all duration-300 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                            >
                                <div className={`flex flex-col mb-4 ${index % 2 === 0 ? "items-start" : "md:items-end items-start"}`}>
                                    <span className="text-accent text-sm font-semibold tracking-wider mb-2 uppercase">{exp.period}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-primary-light text-lg">{exp.company}</h4>
                                </div>

                                <ul className="text-gray-400 space-y-3 mt-4 text-left">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-accent mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
