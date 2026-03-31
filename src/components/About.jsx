import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Layout, Server, Cpu, Globe } from 'lucide-react';

const About = () => {
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

                            <div className="space-y-6 mb-10">
                                {/* <p className="text-xl text-white font-bold tracking-tight">
                                    I am a <span className="text-primary italic">Full-Stack Architect</span> dedicated to pushing the boundaries of web application complexity.
                                </p> */}
                                <p className="text-text-secondary font-bold leading-relaxed">
                                   <span className="text-primary">Full-Stack Architect ( <b>MERN</b>  )</span> with a passion for building scalable, high-performance web applications that seamlessly blend clean, modern design with robust functionality. My expertise lies in integrating advanced AI into coding, leveraging cutting-edge AI tools, and utilizing Vibe coding techniques to create intelligent, next-generation features. I focus on writing code that is not only efficient and maintainable but also designed to adapt and grow with the evolving demands of modern web ecosystems. Beyond development, I am deeply committed to innovation, constantly exploring new technologies and approaches to ensure that every solution I deliver is both practical and forward-thinking. My goal is to bridge the gap between technology and creativity, producing applications that are as impactful as they are elegant, and empowering businesses and users to achieve more through intelligent digital solutions.
                                </p>
                            </div>

                           
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
