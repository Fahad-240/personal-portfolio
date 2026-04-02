import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Layout, Server, Cpu, Globe, X, Rocket, Zap, Heart } from 'lucide-react';

const About = () => {
    const [isBioOpen, setIsBioOpen] = useState(false);

    const highlights = [
        {
            icon: <Server size={24} className="text-white" />,
            title: "Scalable Architecture",
            desc: "Engineering high-load systems with Node.js and distributed database clusters.",
            color: "bg-purple-500"
        },
        {
            icon: <Lock size={24} className="text-white" />,
            title: "Advanced Security",
            desc: "Hardening applications with multi-layer JWT, RBAC, and encrypted data flows.",
            color: "bg-blue-500"
        },
        {
            icon: <Cpu size={24} className="text-white" />,
            title: "MERN Specialization",
            desc: "Expertise across the full stack, optimized for React 18 and MongoDB aggregation.",
            color: "bg-pink-500"
        },
        {
            icon: <Globe size={24} className="text-white" />,
            title: "Global Distribution",
            desc: "Deploying worldwide with Vercel Edge, Docker, and AWS cloud solutions.",
            color: "bg-cyan-500"
        }
    ];

    return (
        <section id="about" className="py-32 bg-secondary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Image/Visual Component */}
                    <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] scale-125" />

                        <div className="grid grid-cols-2 gap-6 relative">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-dark p-8 rounded-[40px] border border-white/5 hover:border-primary/40 transition-all duration-500 group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-3 tracking-tighter">{item.title}</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed font-bold">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">The Developer</h2>
                            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                                Performance <br />
                                Meets <span className="text-outline">Precision.</span>
                            </h3>

                            <div className="space-y-6 mb-10 text-left">
                                <p className="text-text-secondary font-bold leading-relaxed">
                                    <span className="text-primary">Full-Stack Architect ( <b>MERN</b> )</span> with a passion for building scalable, high-performance web applications that seamlessly blend clean, modern design with robust functionality. My expertise lies in integrating advanced AI into coding, leveraging cutting-edge AI tools, and utilizing Vibe coding techniques to create intelligent, next-generation features. My mission is to build scalable, high-performance, and intelligent digital products that not only meet current needs but are also ready for the challenges of tomorrow.
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsBioOpen(true)}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-all shadow-2xl"
                                >
                                    Read Full Bio
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bio Modal */}
            <AnimatePresence>
                {isBioOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsBioOpen(false)}
                            className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative glass-dark max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-[50px] border border-primary/20 p-10 md:p-16 shadow-[0_0_100px_rgba(168,85,247,0.15)] no-scrollbar"
                        >
                            <button
                                onClick={() => setIsBioOpen(false)}
                                className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-red-500/20 text-text-secondary hover:text-red-500 rounded-2xl transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="space-y-10 text-left">
                                <div className="flex items-center gap-4 text-primary">
                                    <Rocket size={32} />
                                    <h4 className="text-3xl font-black text-white tracking-tighter">Full Professional Bio</h4>
                                </div>

                                <div className="space-y-8 text-lg font-bold text-text-secondary leading-relaxed">
                                    <p>
                                        I am a dedicated Full-Stack Architect with deep specialization in the MERN stack (MongoDB, Express.js, React, Node.js). Currently, I am an undergraduate student, continuously building my technical foundation while gaining practical, real-world development experience. My journey in software engineering is driven by a strong passion for creating impactful digital solutions and a commitment to long-term growth in the tech industry.
                                    </p>

                                    <p>
                                        I focus on writing code that is not only efficient and maintainable but also scalable and future-ready. From implementing secure systems like JWT authentication and role-based access control (RBAC) to optimizing database performance with advanced MongoDB techniques and deploying applications on modern platforms like Vercel, I aim to deliver complete, high-quality full-stack solutions with a precision-first mindset.
                                    </p>

                                    <p>
                                        Beyond traditional web development, I am actively expanding my skill set toward AI and automation. I am exploring how intelligent systems, APIs, and modern AI tools can be integrated into web applications to create smarter, more efficient, and user-focused digital experiences. My goal is to combine full-stack development with AI-driven automation to stay aligned with the future of technology.
                                    </p>
                                    <p>
                                        I am deeply committed to continuous learning, innovation, and problem-solving. My mission is to build scalable, high-performance, and intelligent digital products that not only meet current needs but are also ready for the challenges of tomorrow.
                                    </p>
                                </div>

                                <div className="pt-10 border-t border-white/5 flex flex-wrap gap-4">
                                    {['Optimization', 'Architecture', 'Security', 'Scalability', 'Intelligence'].map((keyword) => (
                                        <span key={keyword} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;


