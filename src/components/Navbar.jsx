import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

    // Menu Animation Variants
    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>

                <div className={styles.logo}>
                    <a href="#">MOEDA<span>BARBER</span></a>
                </div>

                {/* Desktop Menu */}
                <ul className={styles.navLinks}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#location">Find Us</a></li>
                </ul>

                <div className={styles.navActions}>
                    <a href="https://moedabarber.as.me/schedule/e7a32642" className="btn btn-primary">
                        Book Appointment
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                    </button>
                </div>
            </div>

            {/* Cinematic Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <ul className={styles.mobileLinks}>
                            <motion.li variants={linkVariants} onClick={() => setMobileMenuOpen(false)}>
                                <a href="#about">About</a>
                            </motion.li>
                            <motion.li variants={linkVariants} onClick={() => setMobileMenuOpen(false)}>
                                <a href="#services">Services</a>
                            </motion.li>
                            <motion.li variants={linkVariants} onClick={() => setMobileMenuOpen(false)}>
                                <a href="#reviews">Reviews</a>
                            </motion.li>
                            <motion.li variants={linkVariants} onClick={() => setMobileMenuOpen(false)}>
                                <a href="#location">Find Us</a>
                            </motion.li>
                            <motion.li variants={linkVariants} onClick={() => setMobileMenuOpen(false)}>
                                <a href="https://moedabarber.as.me/schedule/e7a32642" style={{ color: 'var(--color-gold)' }}>Book Now</a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
