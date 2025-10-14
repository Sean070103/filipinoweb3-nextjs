'use client';
import React from 'react';
// import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import settings from "@/config/setting.json";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple client validation for modern UX
    const newErrors: { [k: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Please include a brief message';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);

    try {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(settings.recapcha, { action: 'submit' }).then((token: string) => {
            const form = e.currentTarget as HTMLFormElement;
            const hiddenInput = form.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement;
            if (hiddenInput) {
              hiddenInput.value = token;
            }
            setSuccess('Thanks! Your message has been sent.');
            form.submit();
          });
        });
      }
    } catch (error) {
      console.error('Error with reCAPTCHA:', error);
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-modern relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: '24px 24px' }} />

      {/* Minimal background (no blobs) */}
      <div className="absolute inset-0" />

      <div className="container relative z-10 ph-banig-border-top">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get in touch</h2>
          <div className="flex justify-center mt-4">
            <div className="ph-divider" />
          </div>
          <p className="text-zinc-300 mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Have a question or proposal? We’d love to hear from you.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left card */}
          <motion.aside 
            className="relative overflow-hidden rounded-none border border-white/20 bg-black p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Minimal border only */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-zinc-300 mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              We’re responsive on email and social. Drop us a line and we’ll get back soon.
            </motion.p>
            <motion.ul 
              className="mt-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <li className="text-zinc-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>filipinoweb3@gmail.com</li>
              <li className="text-zinc-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Philippines • Web3</li>
            </motion.ul>
            <motion.ul 
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.facebook.com/groups/filipinoweb3communitybuilders" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white">Facebook</motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://t.me/Filipinocryptomanagers" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white">Telegram</motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://twitter.com/filipinoweb3" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white">Twitter/X</motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/company/filipino-web3-community-builders/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white">LinkedIn</motion.a>
            </motion.ul>
          </motion.aside>

          {/* Right card - form */}
          <motion.form
          action="https://formkeep.com/f/13efdf753c97"
          method="POST"
          id="contact_form"
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-none border border-white/20 bg-black p-8 [color-scheme:dark] lg:border-l lg:border-white/30 lg:pl-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
        >
            {/* Minimal border only */}
          <input type="hidden" name="g-recaptcha-response" value="" />
            {success && (
              <div className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300" role="status">
                {success}
              </div>
            )}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="flex flex-col gap-2">
                <span className="text-sm text-zinc-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>First name</span>
                <motion.input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full rounded-none border border-white/40 bg-neutral-900 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 appearance-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
                {errors.firstName && <span className="text-xs text-rose-400">{errors.firstName}</span>}
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm text-zinc-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Last name</span>
                <motion.input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full rounded-none border border-white/40 bg-neutral-900 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 appearance-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
                {errors.lastName && <span className="text-xs text-rose-400">{errors.lastName}</span>}
              </label>
            </motion.div>
            <label className="mt-4 flex flex-col gap-2">
              <span className="text-sm text-zinc-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email</span>
              <motion.input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 w-full rounded-none border border-white/40 bg-neutral-900 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 appearance-none"
              whileFocus={{ scale: 1.02 }}
              viewport={{ once: true }}
          />
              {errors.email && <span className="text-xs text-rose-400">{errors.email}</span>}
            </label>
            <label className="mt-4 flex flex-col gap-2">
              <span className="text-sm text-zinc-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Message</span>
              <motion.textarea
            name="message"
            rows={7}
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-4 w-full rounded-none border border-white/40 bg-neutral-900 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 appearance-none"
              whileFocus={{ scale: 1.02 }}
              viewport={{ once: true }}
          />
              {errors.message && <span className="text-xs text-rose-400">{errors.message}</span>}
              {!errors.message && (
                <span className="text-xs text-zinc-400">{formData.message.length}/1000</span>
              )}
            </label>
          <span id="captcha" style={{ color: 'red' }}></span>
            <motion.button 
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-black hover:bg-zinc-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed" 
              type="submit"
              disabled={submitting}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.03
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
            {submitting ? 'Sending…' : 'Send Message'}
            </motion.button>
            <p className="mt-3 text-xs text-zinc-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>By sending, you agree to our respectful contact policy. We never share your info.</p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

