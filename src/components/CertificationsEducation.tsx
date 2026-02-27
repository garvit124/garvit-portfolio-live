"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function CertificationsEducation() {
    return (
        <section id="education" className="py-24 bg-navy-dark relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Education Column */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="p-3 bg-primary/20 rounded-xl text-primary-light">
                            <GraduationCap size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Education</h2>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:bg-primary-light transition-colors" />
                            <span className="text-accent text-sm font-bold tracking-wider mb-2 block">2025 - 2026</span>
                            <h3 className="text-xl font-bold text-white mb-1">PG Diploma in Big Data Analytics</h3>
                            <p className="text-gray-400">CDAC Kharghar</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary-light transition-colors" />
                            <span className="text-accent text-sm font-bold tracking-wider mb-2 block">2021 - 2025</span>
                            <h3 className="text-xl font-bold text-white mb-1">B.Tech Computer Science</h3>
                            <p className="text-gray-400">Amity University Noida</p>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="p-3 bg-accent/20 rounded-xl text-accent">
                            <Award size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Certifications</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {[
                            "AWS Academy Graduate – Data Engineering",
                            "AWS Academy Graduate – Generative AI Foundations",
                            "AWS Academy Graduate – Cloud Foundations",
                            "Python Programming Certification"
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-5 rounded-xl flex items-center gap-4 hover:-translate-y-1 transition-transform border border-card-border hover:border-accent/50"
                            >
                                <div className="w-2 h-2 rounded-full bg-accent neon-glow shrink-0" />
                                <span className="text-gray-200 font-medium">{cert}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Leadership & Activities */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Leadership & Activities</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-400">
                                <span className="text-primary-light mt-1.5">•</span>
                                <span>Research Paper Presenter – IEEE TEECCON 2024</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <span className="text-primary-light mt-1.5">•</span>
                                <span>Class Representative – Amity University</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <span className="text-primary-light mt-1.5">•</span>
                                <span>Communication Leader – CDAC Kharghar</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
