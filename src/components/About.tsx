"use client";

import { motion } from "framer-motion";
import { Database, Brain, Cloud, Code } from "lucide-react";

const aboutHighlights = [
    {
        icon: <Database className="text-primary-light" size={24} />,
        title: "Big Data Analytics",
        desc: "Specialized in large-scale data processing and engineering.",
    },
    {
        icon: <Cloud className="text-accent" size={24} />,
        title: "Cloud-based ETL",
        desc: "Designing scalable pipelines using AWS (S3, Glue, Lambda) and robust architecture.",
    },
    {
        icon: <Brain className="text-purple-400" size={24} />,
        title: "AI-driven Automation",
        desc: "Building autonomous systems and LLM-powered solutions for processing intelligence.",
    },
    {
        icon: <Code className="text-green-400" size={24} />,
        title: "End-to-End Solutions",
        desc: "From raw data extraction to production-grade ML deployments and business insights.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 space-y-6 text-gray-300 text-lg leading-relaxed"
                    >
                        <p>
                            With a formal foundation in <strong className="text-white">Computer Science</strong> from Amity University, I bring a robust combination of theoretical knowledge and practical engineering skills in <strong className="text-white">Big Data Analytics</strong>.
                        </p>
                        <p>
                            My philosophy centers around a <strong className="text-white">strong problem-solving mindset</strong>. I don&apos;t just write code; I design systems that solve complex business challenges. Whether it&apos;s constructing an AI-automated Purchase Order system utilizing LLMs or structuring massive data lakes on AWS, my goal is always efficiency and scalability.
                        </p>
                        <p>
                            I thrive in environments that challenge me to integrate <strong className="text-white">production-grade ML solutions</strong> with robust data architectures, ensuring that intelligence is not just an afterthought, but woven into the core data lifecycle.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {aboutHighlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
                            >
                                <div className="bg-navy-light w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
