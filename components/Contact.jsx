import React, { useState } from 'react';
import { sanitizeInput, validateEmail, validateName, validateMessage, checkRateLimit, generateFormToken, verifyFormToken } from '../utils/security';
import Toast from './Toast';
import LoadingSpinner from './LoadingSpinner';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [formToken] = useState(() => generateFormToken());
  const [touched, setTouched] = useState({});

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (!validateName(value)) return 'Please enter a valid name (2-50 characters)';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > 1000) return 'Message must not exceed 1000 characters';
        if (!validateMessage(value)) return 'Message contains invalid content';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation for touched fields
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (bot detection)
    if (formData.honeypot) {
      showToast('Submission blocked. Please try again.', 'error');
      return;
    }

    // Verify form token
    if (!verifyFormToken(formToken)) {
      showToast('Form session expired. Please refresh the page.', 'error');
      return;
    }

    // Rate limiting check
    const rateCheck = checkRateLimit('contact-form-submit', 3, 60000);
    if (!rateCheck.allowed) {
      const seconds = Math.ceil(rateCheck.retryAfter / 1000);
      showToast(`Too many attempts. Please wait ${seconds} seconds.`, 'warning');
      return;
    }

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      showToast('Please fix the errors in the form.', 'error');
      return;
    }

    setLoading(true);

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
      timestamp: new Date().toISOString(),
      token: formToken
    };

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', sanitizedData);

      setSubmitted(true);
      showToast('Message sent successfully! I\'ll respond soon.', 'success');

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setSubmitted(false);
        setTouched({});
        setErrors({});
      }, 3000);
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`, 'success');
    } catch (err) {
      showToast('Failed to copy. Please select and copy manually.', 'error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grid-bg"></div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-pink-500 font-mono text-sm tracking-widest uppercase animate-fade-in-up">Transmission</p>
          <h2 className="text-6xl md:text-7xl font-serif font-black text-white leading-tight animate-fade-in-up stagger-1">
            INITIATE
            <br />
            <span className="neon-glow-cyan">CONTACT</span>
          </h2>
          <p className="text-gray-400 text-sm animate-fade-in-up stagger-2">
            🔒 Your information is secure and will never be shared
          </p>
        </div>

        {/* Form */}
        <div className="border border-cyan-500/40 bg-black/60 rounded-lg p-10 backdrop-blur-sm mb-12 animate-fade-in-up stagger-3">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-scale-in">
              <div className="text-6xl mb-4 animate-bounce-in">✓</div>
              <p className="text-3xl font-serif font-black text-cyan-400 neon-glow-cyan">SIGNAL RECEIVED</p>
              <p className="text-gray-400">Your transmission has been logged. I'll respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot field (hidden from users, visible to bots) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px' }}
                aria-hidden="true"
              />

              {/* Name field */}
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-3 uppercase tracking-widest">
                  Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  maxLength="50"
                  className={`w-full bg-black border p-4 text-white focus:outline-none transition rounded font-light ${
                    errors.name ? 'border-pink-600 focus:border-pink-500' : 'border-gray-700 focus:border-cyan-500'
                  }`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-pink-500 text-xs mt-2 font-mono animate-fade-in-up">
                    ⚠ {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-3 uppercase tracking-widest">
                  Email <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full bg-black border p-4 text-white focus:outline-none transition rounded font-light ${
                    errors.email ? 'border-pink-600 focus:border-pink-500' : 'border-gray-700 focus:border-cyan-500'
                  }`}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-pink-500 text-xs mt-2 font-mono animate-fade-in-up">
                    ⚠ {errors.email}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-3 uppercase tracking-widest">
                  Message <span className="text-pink-500">*</span>
                  <span className="text-gray-500 text-xs ml-2">
                    ({formData.message.length}/1000)
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows="6"
                  maxLength="1000"
                  className={`w-full bg-black border p-4 text-white focus:outline-none transition rounded resize-none font-light ${
                    errors.message ? 'border-pink-600 focus:border-pink-500' : 'border-gray-700 focus:border-cyan-500'
                  }`}
                  placeholder="Your message..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="text-pink-500 text-xs mt-2 font-mono animate-fade-in-up">
                    ⚠ {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold uppercase tracking-widest py-4 rounded hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  'TRANSMIT SIGNAL'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center font-mono">
                Protected by rate limiting and input validation
              </p>
            </form>
          )}
        </div>

        {/* Direct contact cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => copyToClipboard('veerajthota42@gmail.com', 'Email')}
            className="group border border-pink-600/40 p-6 bg-black/40 rounded-lg hover:border-pink-600 hover:bg-pink-600/5 transition backdrop-blur-sm text-left animate-fade-in-up stagger-4"
          >
            <p className="text-pink-500 font-mono text-xs tracking-widest mb-3 uppercase">Email</p>
            <p className="text-white font-serif font-black group-hover:text-pink-500 transition text-sm break-all">
              veerajthota42@gmail.com
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono">Click to copy</p>
          </button>

          <a
            href="https://github.com/vijay12698"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-cyan-500/40 p-6 bg-black/40 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition backdrop-blur-sm animate-fade-in-up stagger-5"
          >
            <p className="text-cyan-400 font-mono text-xs tracking-widest mb-3 uppercase">GitHub</p>
            <p className="text-white font-serif font-black group-hover:text-cyan-400 transition text-lg">
              github.com/vijay12698
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono">View repositories →</p>
          </a>

          <a
            href="https://linkedin.com/in/veeraj-thota"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-pink-600/40 p-6 bg-black/40 rounded-lg hover:border-pink-600 hover:bg-pink-600/5 transition backdrop-blur-sm animate-fade-in-up stagger-5"
          >
            <p className="text-pink-500 font-mono text-xs tracking-widest mb-3 uppercase">LinkedIn</p>
            <p className="text-white font-serif font-black group-hover:text-pink-500 transition text-lg">
              veeraj-thota
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono">Connect professionally →</p>
          </a>
        </div>
      </div>
    </section>
  );
}
