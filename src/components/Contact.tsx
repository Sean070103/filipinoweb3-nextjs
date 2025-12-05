'use client';
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Mail, MapPin, CheckCircle } from 'lucide-react';

const TelegramIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 4L10 14" />
    <path d="M21 4l-7 18-4-8-6-3 17-7z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.5"
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
      icon: <Facebook className="w-5 h-5" strokeWidth={2.5} stroke="#000000" fill="none" />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/filipinoweb3',
      icon: <Instagram className="w-5 h-5" strokeWidth={2.5} stroke="#000000" fill="none" />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/filipino-web3-community-builders/',
      icon: <Linkedin className="w-5 h-5" strokeWidth={2.5} stroke="#000000" fill="none" />
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
      // Send email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSuccess('MESSAGE SENT');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

      // Reset button state after 3 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSuccess(null);
      setErrors({ 
        submit: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #06b6d4 !important;
          -webkit-box-shadow: 0 0 0px 1000px #000000 inset !important;
          box-shadow: 0 0 0px 1000px #000000 inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        input[name="lastName"]:-webkit-autofill,
        input[name="lastName"]:-webkit-autofill:hover,
        input[name="lastName"]:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #22c55e !important;
        }
      `}</style>
    <section id="contact" className="relative overflow-hidden py-24 px-4">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0e1a 0%, #000000 100%)',
        }}
      />
      
      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)",
          backgroundSize: '12px 12px',
          imageRendering: 'pixelated',
        }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-4 uppercase"
            style={{
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '400',
              letterSpacing: '0.2em',
              color: '#06b6d4',
              textShadow: '3px 3px 0px #000000',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
            }}
          >
            CONTACT US
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
              fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
              lineHeight: '1.8',
              letterSpacing: '0.1em',
              color: '#22c55e',
              imageRendering: 'pixelated',
              WebkitFontSmoothing: 'none',
              textAlign: 'center',
              width: '100%',
              margin: '0 auto',
            }}
          >
            Get in touch with the Filipino Web3 community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div
              style={{
                background: '#0a0a0a',
                border: '2px solid #06b6d4',
                padding: '1.5rem',
                imageRendering: 'pixelated',
                boxShadow: '4px 4px 0 #000000',
              }}
            >
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  letterSpacing: '0.1em',
                  color: '#06b6d4',
                  textShadow: '2px 2px 0px #000000',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                }}
              >
                INFO
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={2.5} stroke="#06b6d4" />
                  <p
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                      letterSpacing: '0.05em',
                      color: '#06b6d4',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                      wordBreak: 'break-all',
                      lineHeight: '1.5',
                    }}
                  >
                    filipinoweb3@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} stroke="#22c55e" />
                  <p
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                      letterSpacing: '0.05em',
                      color: '#22c55e',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                    }}
                  >
                    Philippines
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center" style={{ fontFamily: 'var(--font-press-start-2p), "Courier New", monospace', fontSize: '0.5rem', color: '#22c55e' }}>•</span>
                  <p
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                      letterSpacing: '0.05em',
                      color: '#22c55e',
                      imageRendering: 'pixelated',
                      WebkitFontSmoothing: 'none',
                    }}
                  >
                    Web3
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div
              style={{
                background: '#0a0a0a',
                border: '2px solid #22c55e',
                padding: '1.5rem',
                imageRendering: 'pixelated',
                boxShadow: '4px 4px 0 #000000',
              }}
            >
              <h3
                className="mb-4 uppercase"
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  letterSpacing: '0.1em',
                  color: '#22c55e',
                  textShadow: '2px 2px 0px #000000',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                }}
              >
                CONNECT
              </h3>

              <div className="grid grid-cols-4 gap-3">
                {socialButtons.slice(0, 4).map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center aspect-square"
                    aria-label={social.name}
                    style={{
                      background: idx % 2 === 0 ? '#06b6d4' : '#22c55e',
                      border: `2px solid ${idx % 2 === 0 ? '#06b6d4' : '#22c55e'}`,
                      boxShadow: '3px 3px 0 #000000',
                      imageRendering: 'pixelated',
                      minHeight: '48px',
                    }}
                  >
                  <div style={{ color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {social.icon}
                  </div>
                  </motion.a>
                ))}
                <motion.a
                  href={socialButtons[4].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center aspect-square col-start-1"
                  aria-label={socialButtons[4].name}
                  style={{
                    background: '#06b6d4',
                    border: '2px solid #06b6d4',
                    boxShadow: '3px 3px 0 #000000',
                    imageRendering: 'pixelated',
                    minHeight: '48px',
                  }}
                >
                  <div style={{ color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {socialButtons[4].icon}
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            id="contact_form"
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-4"
            style={{
              background: '#0a0a0a',
              border: '2px solid #06b6d4',
              padding: '2rem',
              imageRendering: 'pixelated',
              boxShadow: '4px 4px 0 #000000',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {success && (
              <motion.div
                className="mb-4 p-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  border: '2px solid #22c55e',
                  background: '#0a0a0a',
                  color: '#22c55e',
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                  letterSpacing: '0.08em',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                  boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
                }}
                role="status"
              >
                {success}
              </motion.div>
            )}

            {errors.submit && (
              <div
                className="mb-4 p-3"
                style={{
                  border: '2px solid #ef4444',
                  background: '#000000',
                  color: '#ef4444',
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                  letterSpacing: '0.08em',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                }}
                role="alert"
              >
                {errors.submit}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)',
                    letterSpacing: '0.08em',
                    color: '#06b6d4',
                    imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none',
                  }}
                >
                  First Name
                </span>
                <input
                  type="text"
                  name="firstName"
                  placeholder=""
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  autoComplete="given-name"
                  style={{
                    border: '2px solid #06b6d4',
                    background: '#000000',
                    padding: '0.75rem 1rem',
                    color: '#06b6d4 !important',
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)',
                    imageRendering: 'pixelated',
                    borderRadius: '0',
                    WebkitTextFillColor: '#06b6d4',
                    caretColor: '#06b6d4',
                  }}
                />
                {errors.firstName && (
                  <span
                    className="text-xs text-red-400"
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: '0.6rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {errors.firstName}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)',
                    letterSpacing: '0.08em',
                    color: '#22c55e',
                    imageRendering: 'pixelated',
                    WebkitFontSmoothing: 'none',
                  }}
                >
                  Last Name
                </span>
                <input
                  type="text"
                  name="lastName"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  autoComplete="family-name"
                  style={{
                    border: '2px solid #22c55e',
                    background: '#000000',
                    padding: '0.75rem 1rem',
                    color: '#22c55e !important',
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)',
                    imageRendering: 'pixelated',
                    borderRadius: '0',
                    WebkitTextFillColor: '#22c55e',
                    caretColor: '#22c55e',
                  }}
                />
                {errors.lastName && (
                  <span
                    className="text-xs text-red-400"
                    style={{
                      fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                      fontSize: '0.6rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {errors.lastName}
                  </span>
                )}
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)',
                  letterSpacing: '0.08em',
                  color: '#06b6d4',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                }}
              >
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
                autoComplete="email"
                style={{
                  border: '2px solid #06b6d4',
                  background: '#000000',
                  padding: '0.75rem 1rem',
                  color: '#06b6d4 !important',
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)',
                  imageRendering: 'pixelated',
                  borderRadius: '0',
                  WebkitTextFillColor: '#06b6d4',
                  caretColor: '#06b6d4',
                }}
              />
              {errors.email && (
                <span
                  className="text-xs text-red-400"
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {errors.email}
                </span>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)',
                  letterSpacing: '0.08em',
                  color: '#22c55e',
                  imageRendering: 'pixelated',
                  WebkitFontSmoothing: 'none',
                }}
              >
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder=""
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full"
                style={{
                  border: '2px solid #22c55e',
                  background: '#000000',
                  padding: '0.75rem 1rem',
                  color: '#22c55e !important',
                  fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                  fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)',
                  imageRendering: 'pixelated',
                  borderRadius: '0',
                  resize: 'vertical',
                  WebkitTextFillColor: '#22c55e',
                  caretColor: '#22c55e',
                }}
              />
              {errors.message && (
                <span
                  className="text-xs text-red-400"
                  style={{
                    fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {errors.message}
                </span>
              )}
            </label>

            <motion.button
              className="w-full mt-6 flex items-center justify-center gap-2"
              type="submit"
              disabled={submitting || !!success}
              style={{
                background: success 
                  ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  : submitting 
                    ? 'linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)' 
                    : 'linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)',
                padding: '1rem 2rem',
                border: success ? '2px solid #22c55e' : '2px solid #06b6d4',
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
                fontWeight: '400',
                textTransform: 'uppercase',
                boxShadow: success 
                  ? '4px 4px 0 #000000, 0 0 20px rgba(34, 197, 94, 0.5)'
                  : '4px 4px 0 #000000',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
                borderRadius: '0',
                cursor: (submitting || success) ? 'not-allowed' : 'pointer',
                letterSpacing: '0.15em',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={(submitting || success) ? {} : { scale: 1.02, y: -2 }}
              whileTap={(submitting || success) ? {} : { scale: 0.98 }}
              animate={submitting ? {
                boxShadow: [
                  '4px 4px 0 #000000, 0 0 10px rgba(6, 182, 212, 0.5)',
                  '4px 4px 0 #000000, 0 0 20px rgba(34, 197, 94, 0.7)',
                  '4px 4px 0 #000000, 0 0 10px rgba(6, 182, 212, 0.5)',
                ]
              } : success ? {
                boxShadow: [
                  '4px 4px 0 #000000, 0 0 15px rgba(34, 197, 94, 0.5)',
                  '4px 4px 0 #000000, 0 0 25px rgba(34, 197, 94, 0.7)',
                  '4px 4px 0 #000000, 0 0 15px rgba(34, 197, 94, 0.5)',
                ]
              } : {}}
              transition={submitting || success ? { duration: 1, repeat: Infinity } : {}}
            >
              {submitting && !success && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #000000',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                  }}
                />
              )}
              {success && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle className="w-5 h-5" strokeWidth={2.5} style={{ color: '#000000' }} />
                </motion.div>
              )}
              <span style={{ 
                color: '#000000',
                display: 'block',
                textAlign: 'center'
              }}>
                {success ? 'MESSAGE SENT!' : submitting ? 'SENDING...' : 'SEND MESSAGE'}
              </span>
            </motion.button>

            <p
              className="text-center mt-4"
              style={{
                fontFamily: 'var(--font-press-start-2p), "Courier New", monospace',
                fontSize: 'clamp(0.55rem, 0.8vw, 0.7rem)',
                letterSpacing: '0.05em',
                color: '#06b6d4',
                imageRendering: 'pixelated',
                WebkitFontSmoothing: 'none',
              }}
            >
              Your information is secure and private
            </p>
          </motion.form>
        </div>
      </div>
    </section>
    </>
  );
}