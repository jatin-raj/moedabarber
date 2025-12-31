import React from 'react';
import { AlertCircle, Clock, Ban, CheckCircle2 } from 'lucide-react';
import styles from './Policies.module.css';

const Policies = () => {
    return (
        <section className={styles.policiesSection} id="policies">
            <div className="container">
                <h2 className={styles.mainTitle}>STUDIO POLICIES</h2>

                <div className={styles.policyGrid}>
                    <div className={styles.policyCard}>
                        <div className={styles.cardHeader}>
                            <AlertCircle className={styles.icon} size={32} />
                            <h3>Deposit & Cancellation</h3>
                        </div>
                        <ul>
                            <li><CheckCircle2 size={16} /> £15.00 non-refundable deposit required</li>
                            <li><CheckCircle2 size={16} /> Deposit deducted from final price</li>
                            <li><Ban size={16} /> Strict no refunds policy on deposits</li>
                            <li><Ban size={16} /> Cancel &lt; 24h notice = Deposit Forfeit</li>
                        </ul>
                    </div>

                    <div className={styles.policyCard}>
                        <div className={styles.cardHeader}>
                            <Clock className={styles.icon} size={32} />
                            <h3>Terms of Service</h3>
                        </div>
                        <ul>
                            <li><Clock size={16} /> Please arrive exactly on time</li>
                            <li><Ban size={16} /> &gt; 10 mins late = Automatic Cancellation</li>
                            <li><AlertCircle size={16} /> Late cancel = "No Call No Show"</li>
                            <li><CheckCircle2 size={16} /> Right to refuse service reserved</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Policies;
