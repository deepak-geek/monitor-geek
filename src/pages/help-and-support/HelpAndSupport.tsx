import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import './style.css';

export default function HelpAndSupport() {
  return (
    <div className="helpsupport-page">
      {/* Header */}
      <section className="helpsupport-header">
        <h1>Help & <span className="highlight">Support</span></h1>
        <p>Need assistance? Explore our FAQ or reach out directly — we’re here to help!</p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <Accordion multiple activeIndex={[0]}>
          <AccordionTab header="How do I reset my password?">
            <p>Go to the login page and click on <strong>Forgot Password</strong>. You'll receive an email to reset it.</p>
          </AccordionTab>
          <AccordionTab header="Where can I view my subscriptions?">
            <p>Click on your profile icon in the top-right and select <strong>Billing</strong> to view subscription details.</p>
          </AccordionTab>
          <AccordionTab header="How can I contact technical support?">
            <p>You can use the contact form at the bottom of this page or email us at <strong>support@geektech.com</strong>.</p>
          </AccordionTab>
        </Accordion>
      </section>

      {/* Contact Support Card */}
      <section className="support-card-section">
        <Card className="support-card">
          <h2>Still need help?</h2>
          <p>Our support team is available 24/7 to answer your questions and resolve issues.</p>
          <Button label="Contact Support" icon="pi pi-headset" className="p-button-lg" />
        </Card>
      </section>
    </div>
  );
}
