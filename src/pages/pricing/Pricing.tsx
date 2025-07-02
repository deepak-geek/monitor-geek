import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import './style.css';

export default function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-header">
        <h1>Choose Your <span className="highlight">Plan</span></h1>
        <p>Select a plan that fits your needs. No hidden fees. Cancel anytime.</p>
      </section>

      <section className="pricing-grid">
        {/* Free Plan */}
        <Card className="pricing-card">
          <h2>Starter</h2>
          <p className="price">Free</p>
          <ul>
            <li><i className="pi pi-check-circle" /> 1 Project</li>
            <li><i className="pi pi-check-circle" /> Community Support</li>
            <li><i className="pi pi-times-circle" /> No Team Collaboration</li>
          </ul>
          <Button label="Get Started" icon="pi pi-user-plus" className="p-button-outlined p-button-primary" />
        </Card>

        {/* Pro Plan */}
        <Card className="pricing-card featured">
          <h2>Pro</h2>
          <p className="price">€ 9.99<span>/month</span></p>
          <ul>
            <li><i className="pi pi-check-circle" /> Unlimited Projects</li>
            <li><i className="pi pi-check-circle" /> Team Collaboration</li>
            <li><i className="pi pi-check-circle" /> Priority Support</li>
          </ul>
          <Button label="Upgrade Now" icon="pi pi-star" className="p-button-primary" />
        </Card>

        {/* Enterprise Plan */}
        <Card className="pricing-card">
          <h2>Enterprise</h2>
          <p className="price">Contact Us</p>
          <ul>
            <li><i className="pi pi-check-circle" /> Custom Integrations</li>
            <li><i className="pi pi-check-circle" /> Dedicated Manager</li>
            <li><i className="pi pi-check-circle" /> SLA Support</li>
          </ul>
          <Button label="Contact Sales" icon="pi pi-envelope" className="p-button-outlined p-button-secondary" />
        </Card>
      </section>
    </div>
  );
}
