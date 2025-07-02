import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import './style.css';

export default function ContactUs() {
  return (
    <div className="contactus-page">
      {/* Header */}
      <section className="contactus-header">
        <h1>Contact <span className="highlight">GeekTech</span></h1>
        <p>We’d love to hear from you. Fill out the form and we’ll get back to you shortly.</p>
      </section>

      {/* Contact Form */}
      <section className="contactus-form">
        <Card className="form-card">
          <div className="p-fluid grid form-grid">
            <div className="field col-12 md:col-6">
              <label htmlFor="name">Name</label>
              <InputText id="name" placeholder="Your Name" />
            </div>

            <div className="field col-12 md:col-6">
              <label htmlFor="email">Email</label>
              <InputText id="email" placeholder="you@example.com" />
            </div>

            <div className="field col-12">
              <label htmlFor="subject">Subject</label>
              <InputText id="subject" placeholder="Subject" />
            </div>

            <div className="field col-12">
              <label htmlFor="message">Message</label>
              <InputTextarea id="message" rows={5} autoResize placeholder="Write your message here..." />
            </div>

            <div className="field col-12 text-center">
              <Button label="Send Message" icon="pi pi-send" className="p-button-lg" />
            </div>
          </div>
        </Card>
      </section>

      {/* Contact Info */}
      <section className="contactus-info">
        <Card className="info-card">
          <h2>Get in Touch</h2>
          <p><i className="pi pi-map-marker contact-icon" /> GeekTech HQ, Silicon Valley, CA</p>
          <p><i className="pi pi-envelope contact-icon" /> contact@geektech.com</p>
          <p><i className="pi pi-phone contact-icon" /> +1 (800) 123-4567</p>
        </Card>
      </section>
    </div>
  );
}
