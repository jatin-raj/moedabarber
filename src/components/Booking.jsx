import React from 'react';
import { CalendarCheck } from 'lucide-react';
import styles from './Booking.module.css';

const Booking = () => {
    return (
        <section className={styles.bookingSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.card}>
                    <div className={styles.iconCircle}>
                        <CalendarCheck size={40} />
                    </div>
                    <h2 className={styles.title}>Secure Your Spot</h2>
                    <p className={styles.text}>
                        Availability releases on the 21st of every month at 9:00 AM.
                        Slots fill quickly—book in advance.
                    </p>
                    <a href="https://moedabarber.as.me/schedule/e7a32642" className="btn btn-primary">
                        Check Availability
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Booking;
