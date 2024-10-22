import React from 'react';

const OfficeLocations: React.FC = () => (
  <section className="office-locations">
    <div className="office">
      <h3>Ontario Office</h3>
      <p>Mon-Fri 9:30am - 6pm</p>
      <address>
        1234 Street Name, City, ON
        <br />
        +1-905-789-7708
        <br />
        info@admitspot.com
      </address>
    </div>
    <div className="office">
      <h3>New Brunswick Office</h3>
      <p>Mon-Fri 9:30am - 6pm</p>
      <address>
        5678 Another St, City, NB
        <br />
        +1-506-123-4567
        <br />
        info@admitspot.com
      </address>
    </div>
  </section>
);

export default OfficeLocations;
