import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import './style.css';

export default function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Header Section */}
      <section className="aboutus-header">
        <h1>About <span className="highlight">GeekTech</span></h1>
        <p>
          At GeekTech, we’re passionate about building cutting-edge solutions that empower businesses
          and developers to achieve more.
        </p>
      </section>

      {/* Our Mission */}
      <section className="aboutus-section">
        <Card className="aboutus-card">
          <i className="pi pi-compass card-icon" />
          <h2>Our Mission</h2>
          <p>
            To deliver innovative, user-friendly tech solutions that simplify and enhance the digital experience
            for individuals and organizations alike.
          </p>
        </Card>
      </section>

      {/* Our Values */}
      <section className="aboutus-section values">
        <h2>Our Core Values</h2>
        <div className="card-grid">
          <Card className="value-card">
            <i className="pi pi-lightbulb card-icon" />
            <h3>Innovation</h3>
            <p>We embrace fresh ideas and strive to stay ahead of technology trends.</p>
          </Card>
          <Card className="value-card">
            <i className="pi pi-users card-icon" />
            <h3>Teamwork</h3>
            <p>Collaboration is key — we grow stronger together.</p>
          </Card>
          <Card className="value-card">
            <i className="pi pi-check-circle card-icon" />
            <h3>Integrity</h3>
            <p>Honesty and transparency guide every decision we make.</p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="aboutus-cta">
        <h2>Want to work with GeekTech?</h2>
        <p>Let’s build the future together. Reach out and join the movement.</p>
        <Button label="Contact Us" icon="pi pi-envelope" className="p-button-lg" />
      </section>
    </div>
  );
}
