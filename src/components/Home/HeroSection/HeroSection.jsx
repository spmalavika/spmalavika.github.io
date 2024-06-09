import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>TOTAL DENTAL CARE SOLUTION</small>
                    <h1>Your Most Trusted <br />Dental Partner</h1>
                    <small>Refine dental clinics offer all services, from check-ups to cosmetic work, for a complete smile solution.</small>
                </div>

            </div>
        </section>
    )
}
export default HeroSection;