'use client';

import Image from 'next/image';
import { useState } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!e.currentTarget.checkValidity()) {
      return;
    }

    try {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute('6LcYuLkpAAAAAGWDdPvO0UwzXsEsICHqkniMD4-y', { action: 'submit' }).then((token: string) => {
            const form = e.currentTarget as HTMLFormElement;
            const hiddenInput = form.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement;
            if (hiddenInput) {
              hiddenInput.value = token;
            }
            form.submit();
          });
        });
      }
    } catch (error) {
      console.error('Error with reCAPTCHA:', error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <aside className="contact__aside">
          <div className="aside__image">
            <Image src="/images/contact.svg" alt="Contact" width={200} height={200} />
          </div>
          <h2>Contact Us</h2>
          <p>Feel free to reach us out anything about Web3.😉</p>
          <ul className="contact__details">
            <li>
              <i className="uil uil-envelope"></i>
              <h5>filipinoweb3@gmail.com</h5>
            </li>
            <li>
              <i className="uil uil-location-point"></i>
              <h5>Web3</h5>
            </li>
          </ul>
          <ul className="contact__socials">
            <ul className="footer__socials">
              <li>
                <a href="https://www.facebook.com/groups/filipinoweb3communitybuilders" target="_blank" rel="noopener noreferrer">
                  <i className="uil uil-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/Filipinocryptomanagers" target="_blank" rel="noopener noreferrer">
                  <i className="uil uil-telegram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/filipinoweb3" target="_blank" rel="noopener noreferrer">
                  <i className="uil uil-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/filipino-web3-community-builders/" target="_blank" rel="noopener noreferrer">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </li>
            </ul>
          </ul>
        </aside>

        <form
          action="https://formkeep.com/f/13efdf753c97"
          method="POST"
          className="contact__form"
          id="contact_form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="g-recaptcha-response" value="" />
          <div className="form__name">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <span id="captcha" style={{ color: 'red' }}></span>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
