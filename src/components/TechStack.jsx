import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Globe, Workflow } from 'lucide-react';

const TechStack = () => {
    const categories = [
        {
            name: 'Frontend',
            icon: <Globe size={20} />,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            border: 'group-hover:border-cyan-500/50',
            skills: ['React.js', 'Javascript', 'Tailwind CSS', "Bootstrap", 'Redux', 'Responsive Web Design']
        },
        {
            name: 'Backend',
            icon: <Server size={20} />,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'group-hover:border-purple-500/50',
            skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Role-based Access Control', 'REST APIs']
        },
        {
            name: 'Database',
            icon: <Database size={20} />,
            color: 'text-pink-400',
            bg: 'bg-pink-500/10',
            border: 'group-hover:border-pink-500/50',
            skills: ['MongoDB', 'PostgreSQL',  'Mongoose', "Firebase"]
        },
        {
            name: 'DevOps',
            icon: <Workflow size={20} />,
            color: 'text-yellow-400',
            bg: 'bg-yellow-500/10',
            border: 'group-hover:border-yellow-500/50',
            skills: ["npm", 'Vite', 'Vercel', 'Git/GitHub', 'CI/CD', 'Postman']
        }
    ];

    return (
        <section id="stack" className="py-32 bg-secondary/50 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Infrastructure
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none"
                    >
                        Core <span className="text-outline">Arsenal.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`glass-dark p-8 rounded-[40px] border border-white/5 transition-all duration-500 group ${cat.border}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-2xl ${cat.bg} flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform duration-500`}>
                                    {cat.icon}
                                </div>
                                <h4 className="text-xl font-black text-white tracking-tighter">{cat.name}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-xl bg-white/5 text-text-secondary text-[10px] font-black uppercase tracking-widest border border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
