import React from 'react';
// import { WhatsApp, Email, Call } from '@mui/icons-material'; 
const ContactMethods: React.FC = () => (
  <div className="contact-methods">
    <div className="method">
      {/* <Call /> */}
      <p>Call: +1-905-789-7708</p>
    </div>
    <div className="method">
      {/* <Email /> */}
      <p>Email: info@admitspot.com</p>
    </div>
    <div className="method">
      {/* <WhatsApp /> */}
      <p>WhatsApp: +1-905-789-7708</p>
    </div>
  </div>
);

export default ContactMethods;
