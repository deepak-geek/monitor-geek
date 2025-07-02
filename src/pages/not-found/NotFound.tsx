import React from 'react';
import { Button } from 'primereact/button';

import './style.css';

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <i className="pi pi-exclamation-triangle notfound-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for doesn't exist or has been moved. <br />
          Let’s get you back to safety.
        </p>
        <Button
          label="Go to Home"
          icon="pi pi-home"
          className="p-button-lg"
          onClick={() => (window.location.href = '/')}
        />
      </div>
    </div>
  );
}
