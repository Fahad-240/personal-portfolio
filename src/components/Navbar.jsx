import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About Me', href: '#about' },
        { name: 'Tech', href: '#stack' },
        { name: 'Works', href: '#projects' },
        { name: 'Status', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-6 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    "flex items-center justify-between pointer-events-auto transition-all duration-500",
                    "w-full max-w-4xl px-8 py-3 rounded-full border",
                    isScrolled
                        ? "bg-secondary/80 backdrop-blur-xl border-white/10 shadow-2xl py-2"
                        : "bg-white/5 backdrop-blur-md border-white/5"
                )}
            >
                <a href="#" className="text-xl font-black tracking-tighter text-white flex items-center gap-1 group">
                    <span className="text-primary group-hover:rotate-12 transition-transform h-8 w-8 flex items-center justify-center bg-primary/10 rounded-lg">F</span>
                    <span>AHAD</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/10">
                        <a href="https://github.com/Fahad-240" className="text-text-secondary hover:text-primary transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/feed/" className="text-text-secondary hover:text-primary transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                    >
                        Hire Me
                    </motion.button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-secondary/95 backdrop-blur-lg z-[90] flex items-center justify-center p-10 pointer-events-auto">
                    <div className="flex flex-col items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
