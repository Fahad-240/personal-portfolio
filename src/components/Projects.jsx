import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E Commerce ",
            desc: "Modern footwear e-commerce platform with product filtering, wishlist, and seamless checkout experience.",
            tags: ["React","postgress", "Node.js"],
            image: "/images/ecom.jpg",
            link: "https://e-commerce-web-rho-silk.vercel.app/",
            code: "https://github.com/Fahad-240/E-Commerce-web"
        },
        {
            title: "AI Health care",
            desc: "A clean and intuitive healthcare web app powered by 2.5 Flash Gemini model, designed to assist users with quick and accurate health insights. It leverages advanced AI to provide personalized recommendations.",
            tags: ["AI", "Gemini", "React", "MongoDB"],
            image: "/images/AI.jpg",
            link: "https://ai-healthcare-virid.vercel.app/",
            code: "https://github.com/Fahad-240/AI-healthcare"
        },
        {
            title: "QR Code Generator",
            desc: "Fast and customizable QR code generator supporting URLs, text, and vCard with instant download.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "/images/qr-code.jpg",
            link: "https://fahad-240.github.io/QR-Code-Generate/",
            code: "https://github.com/Fahad-240/QR-Code-Generate"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-secondary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div className="max-w-2xl text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
                        >
                            Recent Works
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
                        >
                            Premier <span className="text-outline">Projects.</span>
                        </motion.h3>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-text-secondary font-bold max-w-sm mb-2 text-left md:text-right"
                    >
                        Engineering complex full-stack solutions with cutting-edge technologies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-white/5 rounded-[40px] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-700"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-[16/11] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-secondary/40 opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-linear-to-t from-secondary via-transparent to-transparent" />

                                <div className="absolute top-6 right-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 45 }}
                                        className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-2xl cursor-alias"
                                    >
                                        <ArrowUpRight size={28} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-10">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-3xl font-black mb-4 text-white group-hover:text-primary tracking-tighter transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed mb-8 font-bold">
                                    {project.desc}
                                </p>

                                <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                                    <a href={project.link} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> View Demo
                                    </a>
                                    <a href={project.code} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors">
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;