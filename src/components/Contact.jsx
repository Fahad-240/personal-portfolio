import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, XCircle, X } from 'lucide-react';
import emailjs from "emailjs-com";

const Contact = () => {
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_uffqsyb",
                "template_6uvjthl",
                e.target,
                "kyL6z3tZfVpk-2MkZ"
            )
            .then(
                () => {
                    setStatus("success");
                    e.target.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };
    return (
        <section id="contact" className="py-32 bg-secondary relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 text-left">Get In Touch</h2>
                        <h3 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none text-left">
                            Let's Build <br />
                            <span className="text-outline">The Future.</span>
                        </h3>
                        <p className="text-xl text-text-secondary mb-12 leading-relaxed font-bold text-left">
                            Ready to transform your vision into a secure, high-performance reality? Reach out for collaboration or inquiries.
                        </p>

                        <div className="space-y-8 mb-16">
                            {[
                                { icon: Mail, label: "Email Address", value: "fahadahmed42003@gmail.com" },
                                { icon: Phone, label: "Contact Number", value: "+92 346 3270127" },
                                { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-[22px] bg-white/5 flex items-center justify-center text-primary border border-white/5 shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase text-text-secondary tracking-widest font-black mb-1">{item.label}</p>
                                        <p className="text-xl font-black text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            {[Github, Linkedin, Twitter].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-text-secondary hover:text-white border border-white/5 hover:border-white/20 transition-all font-bold"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dark Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-dark p-12 rounded-[50px] border border-white/5 relative"
                    >
                        <form onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-2">Your Name</label>
                                    <input type="text" name="name" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-black text-white placeholder:text-gray-600" placeholder="Agent Smith" />
                                </div>
                                <div className="space-y-3 text-left">
                                    <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-2">Email Address</label>
                                    <input type="email" name="email" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-black text-white placeholder:text-gray-600" placeholder="smith@matrix.com" />
                                </div>
                            </div>
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-2">Message Subject</label>
                                <input type="text" name="subject" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-black text-white placeholder:text-gray-600" placeholder="Project Discussion" />
                            </div>
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] ml-2">Your Message</label>
                                <textarea rows="4" name="message" className="w-full px-8 py-5 rounded-[30px] bg-white/5 border border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-black text-white placeholder:text-gray-600 resize-none" placeholder="Initialization complete. Send parameters..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary py-6 rounded-2xl text-white font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-primary/40 hover:bg-primary-dark transition-all"
                            >
                                Initiate Transmission <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
            {/* Status Popup */}
            <AnimatePresence>
                {status && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
                    >
                        <div className={`glass-dark px-8 py-6 rounded-[30px] border-2 ${status === 'success' ? 'border-primary/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]'} flex items-center gap-6 backdrop-blur-2xl`}>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${status === 'success' ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                                {status === 'success' ? (
                                    <CheckCircle2 size={28} />
                                ) : (
                                    <XCircle size={28} />
                                )}
                            </div>
                            <div className="flex-1 text-left">
                                <h4 className="text-white font-black uppercase tracking-[0.15em] text-[10px] mb-1">
                                    {status === 'success' ? 'Transmission Successful' : 'Transmission Failed'}
                                </h4>
                                <p className="text-text-secondary text-sm font-bold leading-tight">
                                    {status === 'success' ? 'Your message has been encrypted and sent.' : 'Data packet corrupted. Please resend.'}
                                </p>
                            </div>
                            <button
                                onClick={() => setStatus(null)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-all text-text-secondary hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
