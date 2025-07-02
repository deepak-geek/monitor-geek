import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import "./style.css";

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build smarter, faster with <span className="highlight">GeekTech</span></h1>
          <p>Powerful tools to streamline your work, manage your team, and grow your business.</p>
          <Button label="Get Started" icon="pi pi-arrow-right" className="p-button-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">What You Get</h2>
        <div className="features-grid">
          <Card className="feature-card">
            <i className="pi pi-bolt feature-icon" />
            <h3>Fast Performance</h3>
            <p>Optimized for speed so you can work without delay.</p>
          </Card>

          <Card className="feature-card">
            <i className="pi pi-lock feature-icon" />
            <h3>Enterprise Security</h3>
            <p>Advanced security protocols to protect your data.</p>
          </Card>

          <Card className="feature-card">
            <i className="pi pi-cog feature-icon" />
            <h3>Customizable</h3>
            <p>Tailor the platform to fit your exact needs.</p>
          </Card>

          <Card className="feature-card">
            <i className="pi pi-headset feature-icon" />
            <h3>24/7 Support</h3>
            <p>Our expert team is here for you any time, any day.</p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-grid">
          <Card className="testimonial-card">
            <p>"GeekTech completely changed how we manage our workflows. The performance is incredible!"</p>
            <span>- Gaurav Dahiman, Project Manager</span>
          </Card>
          <Card className="testimonial-card">
            <p>"We scaled up fast, thanks to the flexibility and support MyApp offers."</p>
            <span>- Satinder, CTO</span>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home
