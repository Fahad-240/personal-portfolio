import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-secondary">
            {/* Background Grid & Hello Outline */}
            <div className="absolute inset-0 bg-grid-dark opacity-40" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[20vw] font-black leading-none text-outline uppercase tracking-tighter"
                >
                    FAHAD
                </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4"
                        >
                            This is Fahad Ahmed
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
                        >
                            Mern Stack <br />
                            <span className="text-white">Web Developer</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-text-secondary text-lg font-bold mb-10 max-w-lg"
                        >
                            Passionate Full Stack Developer specializing in the MERN stack. I build high-performance, secure, and futuristic digital experiences through modern architecture.
                        </motion.p>

                        <div className="flex flex-wrap items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white font-black uppercase tracking-[0.1em] px-10 py-5 rounded-lg shadow-2xl shadow-primary/40 hover:bg-primary-dark transition-all"
                            >
                                Say Hello
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 text-white font-black uppercase tracking-[0.1em] px-8 py-5 rounded-lg border border-white/10 glass-dark transition-all"
                            >
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                    <Play size={12} className="fill-white" />
                                </div>
                                View Projects
                            </motion.button>
                        </div>

                        {/* Social Sidebar (Right on mobile, Left fixed on lg potentially but let's keep it clean) */}
                        <div className="mt-12 flex items-center gap-6">
                            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-text-secondary hover:text-white transition-colors border border-white/5 p-3 rounded-full hover:bg-white/5">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="relative"
                        >
                            {/* Glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[80px]" />

                            <div className="relative w-[320px] md:w-[420px] aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                    alt="Fahad"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-secondary via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Counter Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-3xl flex items-center gap-4 shadow-2xl"
                            >
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-800 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xl font-black text-white leading-none">10+</p>
                                    <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1">Live Projects</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Statistics Section */}
                <div className="mt-32 pt-12 border-t border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Personal Projects", value: "10+" },
                            { label: "Technologies", value: "12+" },
                            { label: "Code Commits", value: "500+" },
                            { label: "Learning Hours", value: "1000+" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="text-center md:text-left"
                            >
                                <p className="text-4xl md:text-5xl font-black text-white leading-none mb-2">{stat.value}</p>
                                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-text-secondary">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
