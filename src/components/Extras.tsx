"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Github, Star, GitCommit } from "lucide-react";

export default function Extras() {
    const [stats, setStats] = useState({ repos: 0, stars: 0 });

    useEffect(() => {
        // Fetch GitHub Stats (Simulated or Real API call)
        fetch("https://api.github.com/users/garvit124")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.public_repos) {
                    setStats({ repos: data.public_repos, stars: 15 }); // Using static stars for demo as standard API doesn't return total stars directly
                }
            })
            .catch((err) => console.error("GitHub API error", err));
    }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-navy-light/30">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech <span className="text-gradient">Arsenal</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12"></div>
                </motion.div>

                {/* Marquee Section */}
                <div className="glass py-6 rounded-2xl transform skew-y-1 my-12 border-primary/20">
                    <Marquee gradient={false} speed={50} className="overflow-hidden transform -skew-y-1">
                        {[
                            "Python", "AWS", "PySpark", "PostgreSQL", "Docker", "Machine Learning",
                            "LLMs", "MySQL", "Tableau", "Airflow", "NLP"
                        ].map((tech, i) => (
                            <div key={i} className="mx-8 font-bold text-2xl text-gray-500 hover:text-white transition-colors cursor-default">
                                {tech}
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* GitHub Stats */}
                <div className="mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-2xl font-bold mb-2">Open Source Contributions</h3>
                        <p className="text-gray-400">My activity on GitHub</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass p-8 rounded-2xl w-full max-w-[250px] flex flex-col items-center justify-center border-t-2 border-t-primary"
                        >
                            <Github size={40} className="mb-4 text-white" />
                            <h4 className="text-4xl font-bold text-gradient mb-2">{stats.repos || "15+"}</h4>
                            <p className="text-gray-400 font-medium">Repositories</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass p-8 rounded-2xl w-full max-w-[250px] flex flex-col items-center justify-center border-t-2 border-t-accent"
                        >
                            <GitCommit size={40} className="mb-4 text-white" />
                            <h4 className="text-4xl font-bold text-gradient mb-2">500+</h4>
                            <p className="text-gray-400 font-medium">Contributions</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="glass p-8 rounded-2xl w-full max-w-[250px] flex flex-col items-center justify-center border-t-2 border-t-purple-400"
                        >
                            <Star size={40} className="mb-4 text-white" />
                            <h4 className="text-4xl font-bold text-gradient mb-2">{stats.stars || "10+"}</h4>
                            <p className="text-gray-400 font-medium">Stars Received</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
