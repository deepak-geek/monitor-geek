import React from 'react';
import { Card } from 'primereact/card';

import './style.css';

export default function TermsAndConditions() {
  return (
    <div className="terms-page">
      {/* Header */}
      <section className="terms-header">
        <h1>Terms & <span className="highlight">Conditions</span></h1>
        <p>Last updated: July 2, 2025</p>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <Card className="terms-card">
          <h2>1. Introduction</h2>
          <p>
            Welcome to GeekTech. By accessing or using our platform, you agree to be bound by these
            terms and conditions. If you do not agree, please do not use our services.
          </p>

          <h2>2. Use of the Service</h2>
          <p>
            You must be at least 13 years old to use GeekTech. You agree to use the platform for
            lawful purposes only and not to violate any laws in your jurisdiction.
          </p>

          <h2>3. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password.
            You agree to accept responsibility for all activities under your account.
          </p>

          <h2>4. Subscription & Payments</h2>
          <p>
            GeekTech offers free and premium services. By subscribing to a paid plan, you agree to
            pay all associated fees and abide by the billing terms presented at the time of purchase.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, trademarks, and services on GeekTech are the intellectual property of
            GeekTech or its licensors. You may not copy or distribute any content without permission.
          </p>

          <h2>6. Termination</h2>
          <p>
            We may suspend or terminate your access at any time for violation of these terms. You
            may also cancel your account at any time through your dashboard.
          </p>

          <h2>7. Disclaimer</h2>
          <p>
            GeekTech provides the platform "as is" without any warranties. We are not responsible
            for any damages that may result from your use of the service.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the platform
            after updates means you accept the changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions regarding these terms, please contact us at
            <strong> support@geektech.com</strong>.
          </p>
        </Card>
      </section>
    </div>
  );
}
