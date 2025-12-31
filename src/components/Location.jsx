import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import styles from './Location.module.css';

const Location = () => {
    return (
        <section className="section-padding" id="location">
            <div className="container">
                <div className={styles.locationContainer}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>VISIT THE STUDIO</h2>

                        <div className={styles.detailsGroup}>
                            <div className={styles.iconBox}>
                                <MapPin size={32} />
                            </div>
                            <address className={styles.address}>
                                <strong>Studio 21 Cornerstone Studios</strong><br />
                                1 Addington Square<br />
                                London SE5 7JZ
                            </address>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Studio+21+Cornerstone+Studios,+1+Addington+Square,+London+SE5+7JZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Navigation size={18} style={{ marginRight: '10px' }} />
                            Get Directions
                        </a>
                    </div>
                    <div className={styles.map}>
                        <iframe
                            title="Moedabarber Location"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=1%20Addington%20Square,%20London%20SE5%207JZ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            style={{ border: 0, width: '100%', height: '100%', minHeight: '400px' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
