import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.brand}>
                    <h2>MOEDA<span>BARBER</span> STUDIOS</h2>
                    <p className={styles.tagline}>Precision. Style. Excellence.</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.col}>
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#location">Find Us</a></li>
                            <li><a href="#policies">Studio Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Moedabarber Studios. All rights reserved.</p>
                    <p className={styles.acuity}>Booking System Powered by Acuity Scheduling</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
