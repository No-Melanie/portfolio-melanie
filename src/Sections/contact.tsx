"use client";
import { useContactForm } from "../app/Hooks/use-form-contact";

const ContactSection = () => {

  useContactForm();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>alex.chen@example.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <form className="contact-form fade-in">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
