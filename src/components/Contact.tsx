'use client';
import React from 'react';
// import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import settings from "@/config/setting.json";

const TelegramIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 4L10 14" />
    <path d="M21 4l-7 18-4-8-6-3 17-7z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
);

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

  const socialButtons = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/groups/filipinoweb3communitybuilders',
      icon: <Facebook className="w-4 h-4" strokeWidth={2.2} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/filipinoweb3',
      icon: <Instagram className="w-4 h-4" strokeWidth={2} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/filipino-web3-community-builders/',
      icon: <Linkedin className="w-4 h-4" strokeWidth={2} />
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/filipinoweb3',
      icon: <XIcon />
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Filipinocryptomanagers',
      icon: <TelegramIcon />
    }
  ];

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
    <section id="contact" className="contact-modern relative overflow-hidden py-12">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="container relative z-10 ph-banig-border-top">
        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Panel - Contact Info (1/3) */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 
                className="text-white mb-4 uppercase" 
                style={{ 
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  fontWeight: '400',
                  letterSpacing: '0.15em',
                  textShadow: '2px 2px 0px #000000',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  lineHeight: '1.2'
                }}
              >
                LET&apos;S CONNECT
              </h2>
              <p 
                className="text-white mb-6" 
                style={{ 
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                  color: '#ffffff',
                  textShadow: '2px 2px 0px #000000',
                  lineHeight: '1.5',
                  textAlign: 'left'
                }}
              >
                Have a project in mind, want to collaborate, or just want to say hello? Fill out the form and we&apos;ll get back to you soon!
              </p>
            </div>
            
            <div>
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mb-4">
                {socialButtons.map((social, idx) => (
                  <motion.a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/20 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
                    aria-label={social.name}
                    style={{ backdropFilter: 'blur(2px)' }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              {/* Contact Details */}
              <div className="space-y-1">
                <p 
                  className="text-white"
                  style={{ 
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
                    color: '#ffffff',
                    textShadow: '2px 2px 0px #000000',
                    textAlign: 'left'
                  }}
                >
                  filipinoweb3@gmail.com
                </p>
                <p 
                  className="text-white"
                  style={{ 
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
                    color: '#ffffff',
                    textShadow: '2px 2px 0px #000000',
                    textAlign: 'left'
                  }}
                >
                  Philippines • Web3
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Contact Form (2/3) */}
          <motion.form
            action="https://formkeep.com/f/13efdf753c97"
            method="POST"
            id="contact_form"
            onSubmit={handleSubmit}
            className="lg:col-span-2 relative overflow-hidden p-4 [color-scheme:dark]"
            style={{
              background: '#000000',
              border: '2px solid #ffffff',
              borderStyle: 'outset',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.8)',
              borderRadius: '0'
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input type="hidden" name="g-recaptcha-response" value="" />
            {success && (
              <div className="mb-4 px-4 py-3" style={{ 
                border: '2px solid #ffffff',
                background: '#000000',
                color: '#ffffff',
                fontFamily: '"Courier New", monospace',
                fontWeight: 'bold',
                textShadow: '2px 2px 0px #000000'
              }} role="status">
                {success}
              </div>
            )}
            <div className="space-y-3">
              <label className="flex flex-col gap-0.5">
                <span 
                  className="text-white" 
                  style={{ 
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                    textShadow: '1px 1px 0px #000000'
                  }}
                >
                  Name
                </span>
                <motion.input
                  type="text"
                  name="firstName"
                  placeholder="Your Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  style={{
                    border: '2px solid #ffffff',
                    borderStyle: 'outset',
                    background: '#000000',
                    padding: '0.6rem 0.875rem',
                    color: '#ffffff',
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                    imageRendering: 'pixelated',
                    borderRadius: '0'
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.firstName && <span className="text-xs mt-0.5" style={{ fontFamily: '"Courier New", monospace', fontSize: '0.7rem', color: '#ffffff', textShadow: '1px 1px 0px #000000' }}>{errors.firstName}</span>}
              </label>
              
              <label className="flex flex-col gap-0.5">
                <span 
                  className="text-white" 
                  style={{ 
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                    textShadow: '1px 1px 0px #000000'
                  }}
                >
                  Email
                </span>
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                  className="w-full"
                  style={{
                    border: '2px solid #ffffff',
                    borderStyle: 'outset',
                    background: '#000000',
                    padding: '0.6rem 0.875rem',
                    color: '#ffffff',
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                    imageRendering: 'pixelated',
                    borderRadius: '0'
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.email && <span className="text-xs mt-0.5" style={{ fontFamily: '"Courier New", monospace', fontSize: '0.7rem', color: '#ffffff', textShadow: '1px 1px 0px #000000' }}>{errors.email}</span>}
              </label>
              
              <label className="flex flex-col gap-0.5">
                <span 
                  className="text-white" 
                  style={{ 
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                    textShadow: '1px 1px 0px #000000'
                  }}
                >
                  Website (optional)
                </span>
                <motion.input
                  type="url"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  className="w-full"
                  style={{
                    border: '2px solid #ffffff',
                    borderStyle: 'outset',
                    background: '#000000',
                    padding: '0.6rem 0.875rem',
                    color: '#ffffff',
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                    imageRendering: 'pixelated',
                    borderRadius: '0'
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
            </label>
              
              <label className="flex flex-col gap-0.5">
                <span 
                  className="text-white" 
                  style={{ 
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                    textShadow: '1px 1px 0px #000000'
                  }}
                >
                  Tell me about your project or message...
                </span>
              <motion.textarea
                name="message"
                  rows={4}
                  placeholder="Your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
                  className="w-full"
                  style={{
                    border: '2px solid #ffffff',
                    borderStyle: 'outset',
                    background: '#000000',
                    padding: '0.6rem 0.875rem',
                    color: '#ffffff',
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                    imageRendering: 'pixelated',
                    borderRadius: '0',
                    resize: 'vertical'
                  }}
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.message && <span className="text-xs mt-0.5" style={{ fontFamily: '"Courier New", monospace', fontSize: '0.7rem', color: '#ffffff', textShadow: '1px 1px 0px #000000' }}>{errors.message}</span>}
              {!errors.message && (
                  <span className="text-xs mt-0.5" style={{ fontFamily: '"Courier New", monospace', fontWeight: 'bold', fontSize: '0.7rem', color: '#ffffff', textShadow: '1px 1px 0px #000000' }}>{formData.message.length}/1000</span>
              )}
            </label>
            </div>
            <span id="captcha" style={{ color: '#ffffff' }}></span>
            <motion.button 
              className="mt-4 w-full flex items-center justify-center group" 
              type="submit"
              disabled={submitting}
              style={{
                background: submitting ? '#0d0d0d' : '#000000',
                color: '#ffffff',
                padding: '0.85rem 1.5rem',
                border: '2px solid #ffffff',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.64rem, 0.9vw, 0.82rem)',
                fontWeight: '600',
                textTransform: 'uppercase',
                boxShadow: submitting 
                  ? 'inset 0 0 10px rgba(255,255,255,0.05)' 
                  : '0 10px 25px rgba(0,0,0,0.6)',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                borderRadius: '6px',
                cursor: submitting ? 'not-allowed' : 'pointer',
                opacity: submitting ? 0.75 : 1,
                letterSpacing: '0.18em',
                position: 'relative',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={submitting ? {} : { 
                scale: 1.02,
                y: -2
              }}
              whileTap={submitting ? {} : { scale: 0.98, y: 1 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-3 relative z-10">
                {submitting ? 'SENDING' : 'CONNECT'}
              </span>
            </motion.button>
            <p 
              className="mt-3 text-xs text-white pixelated" 
              style={{ 
                fontFamily: '"Courier New", monospace',
                fontWeight: 'bold',
                color: '#ffffff',
                fontSize: 'clamp(0.7rem, 1.3vw, 0.9rem)'
              }}
            >
              By sending, you agree to our respectful contact policy. We never share your info.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}