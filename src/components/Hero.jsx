import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={styles.heroSection}>
            <div className={styles.heroBackground}>
                {/* Dark overlay for text readability */}
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.textContent}>
                    <p className={styles.overline}>Est. 2024 • Premium Grooming</p>
                    <h1 className={styles.title}>
                        Define Your <br />
                        <span className={styles.highlight}>Signature Style</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Experience the art of traditional barbering fused with modern precision.
                        We don't just cut hair; we cultivate confidence.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="https://moedabarber.as.me/schedule/e7a32642" className="btn btn-primary">Book Now</a>
                        <a href="#services" className="btn btn-outline">View Services</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
