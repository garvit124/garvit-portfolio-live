"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "R", "SQL"],
    },
    {
        title: "Big Data & Workflow",
        skills: ["PySpark", "Apache Airflow", "Hadoop", "Kafka"],
    },
    {
        title: "Cloud Platforms",
        skills: ["AWS", "S3", "EC2", "Lambda", "Glue", "CloudWatch", "Azure"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Data Analysis & Visualization",
        skills: ["Pandas", "NumPy", "Tableau", "Excel"],
    },
    {
        title: "AI & ML",
        skills: ["Machine Learning", "NLP", "LLMs", "RAG", "Statistics"],
    },
    {
        title: "Dev & Systems",
        skills: ["Linux", "Git", "Docker", "VS Code"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-navy-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-gradient">Competencies</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass p-8 rounded-2xl hover:neon-glow transition-all duration-300 border-t-4 border-t-transparent hover:border-t-accent"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="bg-navy px-4 py-2 rounded-lg text-sm font-medium text-gray-300 border border-card-border hover:bg-primary-light/20 hover:text-white hover:border-primary-light transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
