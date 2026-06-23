'use client';

import { useState } from 'react';
import { BotIdClient } from 'botid/client';
import { Phone } from 'lucide-react';

export default function Contact({ dict }: { dict: Record<string, string> }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [showThanks, setShowThanks] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (!response.ok) {
            setSubmitError(data.error || dict.errorMessage);
            return;
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowThanks(true);
    };

    return (
        <section id="contact" className="min-h-screen">
            <BotIdClient protect={[{ path: '/api/send-email', method: 'POST' }]} />
            <div className="w-10/12 mx-auto px-6 py-20">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='order-2 md:order-2 lg:order-1'>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 lg:text-left md:text-center xs:text-center">
                            {dict.title}
                        </h1>
                        <div className='flex'>
                            <p className="text-lg font-medium ml-2 text-foreground/70 leading-relaxed">
                                {dict.subtitle}
                            </p>
                        </div>
                        {/* Contact Information */}
                        <div className="space-y-8 mt-6 ml-2 relative">
                            <div>
                                <div className="space-y-6">

                                    {/* Location */}
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <p className="text-foreground/60 text-sm">{dict.location}</p>
                                            <p className="text-foreground font-medium">{dict.locationValue}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-4">
                                    {dict.followMe}
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/aomalejandro3181"
                                        className="w-10 h-10 bg-foreground/10 flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/alejandro-olivar-22810538/?locale=en_US"
                                        className="w-10 h-10 bg-foreground/10 flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                                        </svg>
                                    </a>
                                </div>
                                {/* Button go to top */}
                                <div className="flex justify-end absolute right-0 mt-[30%]">
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="w-auto h-auto cursor-pointer px-2 py-2  text-black border-2 border-main shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-normal font-bold">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="p-8 bg-grid-neobrutal bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        {showThanks ? null : (
                            <><h3 className="text-2xl font-bold text-foreground mb-6">
                                {dict.formTitle}
                            </h3>
                            {submitError ? (
                                <p className="text-sm text-red-600 mb-4">{submitError}</p>
                            ) : null}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border-2 border-main shadow-neo rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder={dict.namePlaceholder} />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border-2 border-main shadow-neo rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder={dict.emailPlaceholder} />
                                        </div>
                                    </div>
                                    <div>

                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border-2 border-main shadow-neo rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder={dict.subjectPlaceholder} />
                                    </div>
                                    <div>

                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white border-2 border-main shadow-neo rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder={dict.messagePlaceholder} />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-accent-blue text-white border-2 border-main shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-normal font-bold"
                                    >
                                        {dict.sendButton}
                                    </button>
                                </form></>
                        )}
                        {!showThanks ? null : (
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                {dict.successMessage}
                            </h3>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}