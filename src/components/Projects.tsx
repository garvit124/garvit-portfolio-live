"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
    {
        title: "AutoPO – AI Automated Purchase Order System",
        description: "Built an autonomous AI system designed for end-to-end PO processing featuring real-time event detection, LLM-powered decision automation, and a zero manual intervention workflow.",
        tech: ["Python", "PostgreSQL", "LLMs (Qwen)", "NLP", "PaddleOCR", "AWS", "Power BI", "Docker", "Flask"],
        github: "https://github.com/garvit124/AutoPO",
        demo: "#", // Add link if available
        featured: true,
    },
    {
        title: "Auto Lane Detection System",
        description: "Real-time lane detection software pipeline utilizing advanced computer vision techniques, perspective transformation, and lane curvature estimation for dynamic lighting environments.",
        tech: ["OpenCV", "YOLO", "CNN", "PyTorch", "Streamlit"],
        github: "https://github.com/garvit124",
        demo: "#",
        featured: false,
    },
    {
        title: "Big Data ETL Pipeline",
        description: "Scalable enterprise ETL architecture engineered with automated ingestion, monitoring, and robust cloud-native big data solutions.",
        tech: ["PySpark", "AWS (S3, Glue, Lambda, CloudWatch)", "Tableau"],
        github: "https://github.com/garvit124",
        demo: "#",
        featured: false,
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`glass p-8 rounded-2xl flex flex-col h-full hover:-translate-y-3 transition-all duration-300 group ${project.featured ? "border-primary/50 neon-glow-primary" : "hover:neon-glow border-card-border"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl ${project.featured ? "bg-primary/20 text-primary-light" : "bg-navy-light text-accent"}`}>
                                    <FolderGit2 size={28} />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    {project.demo !== "#" && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-sm">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-card-border/50">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/garvit124"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent border border-primary text-primary-light hover:bg-primary/10 px-8 py-4 rounded-full font-medium transition-all"
                    >
                        <Github size={20} /> View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
