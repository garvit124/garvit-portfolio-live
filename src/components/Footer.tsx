import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-dark py-12 border-t border-card-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-tighter mb-2">
                            Byte<span className="text-primary-light">Insights</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Data Analyst | Data Engineer | AI/ML Engineer
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/garvit-gupta-8b51a3200" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-accent hover:bg-navy-light transition-all border border-card-border hover:border-accent">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/garvit124" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-accent hover:bg-navy-light transition-all border border-card-border hover:border-accent">
                            <Github size={20} />
                        </a>
                        <a href="mailto:ggarvit392@gmail.com" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-accent hover:bg-navy-light transition-all border border-card-border hover:border-accent">
                            <Mail size={20} />
                        </a>
                    </div>

                </div>

                <div className="w-full h-px bg-card-border my-8" />

                <div className="text-center text-gray-500 text-sm flex flex-col items-center justify-center">
                    <p>© {currentYear} Garvit Gupta. All rights reserved.</p>
                    <p className="mt-2 text-xs">A highly skilled Big Data & AI professional ready for enterprise-level roles.</p>
                </div>
            </div>
        </footer>
    );
}
