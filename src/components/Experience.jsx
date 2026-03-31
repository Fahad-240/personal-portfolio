import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "MERN Stack Developer",
            company: "Codezyra",
            location: "On-site",
            period: "Present",
            desc: "Working as a MERN Stack Developer on real-world web applications.",
            achievements: [
                "Developing and maintaining frontend (React.js) and backend (Node.js, Express.js) features.",
                "Building and integrating RESTful APIs with MongoDB databases.",
                "Creating admin panels, authentication systems, and role-based access control.",
                "Collaborating with team members to deliver error-free and scalable solutions."
            ]
        },
        {
            role: "MERN Stack Developer Intern",
            company: "App Mash",
            location: "On-site",
            period: "6 Months",
            desc: "Completed a 6-month internship in MERN Stack development.",
            achievements: [
                "Gained hands-on experience in React.js, Node.js, Express.js, and MongoDB.",
                "Worked on CRUD applications, API integration, and frontend UI development.",
                "Learned best practices for clean code, Git version control, and debugging."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Professional Journey
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none"
                    >
                        Career <span className="text-outline">Timeline.</span>
                    </motion.h3>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Futuristic Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 hidden md:block" />

                    <div className="space-y-20">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 hidden md:block" />

                                <div className="w-full md:w-1/2">
                                    <div className="glass-dark p-10 rounded-[40px] border border-white/5 hover:border-primary/30 transition-all duration-500 group">
                                        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-2xl border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                    <Briefcase size={24} />
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="text-2xl font-black text-white tracking-tighter">{exp.role}</h4>
                                                    <p className="text-sm font-black text-primary uppercase tracking-[0.1em] mt-1">{exp.company}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-text-secondary bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                                    <Calendar size={14} className="text-primary" /> {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-text-secondary text-base mb-8 font-bold leading-relaxed text-left">
                                            {exp.desc}
                                        </p>

                                        <ul className="space-y-4">
                                            {exp.achievements.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-4 text-sm text-white font-bold text-left">
                                                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Placeholder for balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
