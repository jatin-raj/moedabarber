import React from 'react';
import { Scissors, Zap, User, Clock, Crown, Users, CheckCircle } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import styles from './Services.module.css';

const servicesData = [
    {
        id: 1,
        title: "MENS HAIRCUT & SHAVE",
        duration: "45 minutes",
        price: "£50.00",
        icon: <Scissors size={28} />
    },
    {
        id: 2,
        title: "MENS HAIRCUT & HOT TOWEL",
        duration: "50 minutes",
        price: "£60.00",
        icon: <Zap size={28} />
    },
    {
        id: 3,
        title: "FULL WORKS (FACE STEAM + MASK)",
        duration: "1 hour",
        price: "£70.00",
        icon: <Crown size={28} />
    },
    {
        id: 4,
        title: "V.I.P PACKAGE & FULL FACIAL",
        duration: "1h 30m",
        price: "£120.00",
        icon: <User size={28} />
    },
    {
        id: 5,
        title: "UNISEX HAIRCUT (18+)",
        duration: "30 minutes",
        price: "£45.00",
        icon: <Users size={28} />
    },
    {
        id: 6,
        title: "STUDENTS (12–17 YRS)",
        duration: "30 minutes",
        price: "£35.00",
        icon: <Clock size={28} />
    },
    {
        id: 7,
        title: "SHAPE UP ONLY",
        duration: "20 minutes",
        price: "£30.00",
        icon: <CheckCircle size={28} />
    }
];

const Services = () => {
    return (
        <section className={`section-padding ${styles.servicesSection}`} id="services">
            <div className="container">
                <h2 className={styles.sectionTitle}>PREMIUM SERVICES</h2>
                <div className={styles.grid}>
                    {servicesData.map((service) => (
                        <TiltCard key={service.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <div className={styles.details}>
                                    <span className={styles.duration}>
                                        <Clock size={14} style={{ marginRight: '5px' }} />
                                        {service.duration}
                                    </span>
                                    <span className={styles.price}>{service.price}</span>
                                </div>
                            </div>
                            <div className={styles.cardAction}>
                                <a href="https://moedabarber.as.me/schedule/e7a32642" className="btn btn-outline" style={{ width: '100%' }}>Book Appointment</a>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
