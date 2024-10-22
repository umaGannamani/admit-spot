import React from 'react';
import Header from '../components/Header';
import ContactMethods from '../components/ContactMethods';
import VirtualOffice from '../components/VirtualOffice';
import ContactForm from '../components/ContactForm';
import OfficeLocations from '../components/OfficeLocations';
import Footer from '../components/Footer';

const Home: React.FC = () => (
    <div className="app">
        <Header />
        <ContactMethods />
        <VirtualOffice />
        <div className="form-container">
            <ContactForm />
            <OfficeLocations />
        </div>
        <Footer />
    </div>
);

export default Home;
