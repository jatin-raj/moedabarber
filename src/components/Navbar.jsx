import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>

                <div className={styles.logo}>
                    <a href="#">MOEDA<span>BARBER</span></a>
                </div>

                {/* Desktop Menu */}
                <ul className={styles.navLinks}>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#policies">Policies</a></li>
                </ul>

                <div className={styles.navActions}>
                    <a href="https://moedabarber.as.me/schedule/e7a32642" className="btn btn-primary">
                        Book Appointment
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={mobileMenuOpen ? styles.open : ''}></span>
                        <span className={mobileMenuOpen ? styles.open : ''}></span>
                        <span className={mobileMenuOpen ? styles.open : ''}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileLinks}>
                    <li onClick={() => setMobileMenuOpen(false)}><a href="#services">Services</a></li>
                    <li onClick={() => setMobileMenuOpen(false)}><a href="#location">Location</a></li>
                    <li onClick={() => setMobileMenuOpen(false)}><a href="#policies">Policies</a></li>
                    <li onClick={() => setMobileMenuOpen(false)}>
                        <a href="https://moedabarber.as.me/schedule/e7a32642" style={{ color: 'var(--color-gold)' }}>Book Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
