import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-24 bg-secondary relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Elements */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-sm text-left">
                        <a href="#" className="text-4xl font-black tracking-tighter text-white mb-6 block">
                            Fahad<span className="text-primary text-6xl leading-[0]">.</span>
                        </a>
                        <p className="text-text-secondary text-base leading-relaxed font-bold">
                            Architecting the digital frontier. Dedicated to building secure, scalable, and high-performance MERN ecosystems with futuristic design standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                        <div className="space-y-6 text-left">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Navigation</h4>
                            <div className="flex flex-col space-y-3 text-sm font-bold text-text-secondary">
                                <a href="#about" className="hover:text-primary transition-all">The Developer</a>
                                <a href="#stack" className="hover:text-primary transition-all">Core Arsenal</a>
                                <a href="#projects" className="hover:text-primary transition-all">Premier Works</a>
                                <a href="#experience" className="hover:text-primary transition-all">Career Status</a>
                            </div>
                        </div>
                        <div className="space-y-6 text-left">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Channels</h4>
                            <div className="flex flex-col space-y-3 text-sm font-bold text-text-secondary">
                                <a href="https://www.linkedin.com/feed/" className="hover:text-primary transition-all">LinkedIn</a>
                                <a href="https://github.com/Fahad-240" className="hover:text-primary transition-all">GitHub</a>
                                <a href="#" className="hover:text-primary transition-all">Twitter</a>
                                <a href="#" className="hover:text-primary transition-all">Instagram</a>
                            </div>
                        </div>
                        <div className="hidden sm:block space-y-6">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Elevate</h4>
                            <motion.button
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={scrollToTop}
                                className="w-16 h-16 rounded-[22px] bg-white/5 flex items-center justify-center text-primary border border-white/10 hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl"
                            >
                                <ArrowUp size={24} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-sm font-black text-gray-500 uppercase tracking-widest">
                            © {new Date().getFullYear()} Fahad. All Systems Nominal.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {[Github, Linkedin, Twitter, Instagram].map((Icon, idx) => (
                            <a key={idx} href="#" className="text-gray-500 hover:text-primary transition-colors p-2">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
