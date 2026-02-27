"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s talk about your next project.</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6 pt-6">
                            <div className="flex items-center gap-6 glass p-4 rounded-xl">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary-light shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium">Email Me</h4>
                                    <a href="mailto:ggarvit392@gmail.com" className="text-white font-medium hover:text-primary-light transition-colors text-lg">
                                        ggarvit392@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 glass p-4 rounded-xl">
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium">Call Me</h4>
                                    <p className="text-white font-medium text-lg">+91 8860109819</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 glass p-4 rounded-xl">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 font-medium">Location</h4>
                                    <p className="text-white font-medium text-lg">India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border-t-4 border-t-primary">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-navy/50 border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-navy/50 border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-navy/50 border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className="w-full bg-primary hover:bg-primary-light disabled:bg-primary/50 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 neon-glow-primary"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : isSubmitted ? (
                                    <span>Message Sent Successfully!</span>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
