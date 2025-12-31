import React from 'react';
import { Star } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={`container ${styles.container}`}>
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <img src="/assets/barber_portrait.png" alt="Master Barber" className={styles.barberImage} />
                        <div className={styles.experienceBadge}>
                            <span className={styles.years}>10+</span>
                            <span className={styles.text}>Years Exp.</span>
                        </div>
                    </div>
                </div>

                <div className={styles.contentCol}>
                    <h4 className={styles.subtitle}>MEET THE MASTER</h4>
                    <h2 className={styles.title}>PRECISION IS NOT AN ACT, IT'S A HABIT.</h2>
                    <p className={styles.description}>
                        Welcome to Moedabarber Studios. My name is [Name], and I founded this studio with one goal:
                        to elevate the grooming experience from a routine chore to a ritual of self-care.
                    </p>
                    <p className={styles.description}>
                        Specializing in both classic cuts and modern fades, I blend traditional techniques with contemporary
                        styling to create a look that is uniquely yours. When you sit in my chair, you aren't just getting a haircut;
                        you're getting a consultation, a crafted style, and VIP treatment.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <spa className={styles.statNumber}>5k+</spa>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                        <div className={styles.statItem}>
                            <spa className={styles.statNumber}>100%</spa>
                            <span className={styles.statLabel}>Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
