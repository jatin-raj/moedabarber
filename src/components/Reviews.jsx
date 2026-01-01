import React from 'react';
import { Star, Quote } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import styles from './Reviews.module.css';

const reviewsData = [
    {
        id: 1,
        name: "James Carter",
        rating: 5,
        text: "Hands down the best trim I've had in London. The attention to detail is unmatched. Great atmosphere and professional service."
    },
    {
        id: 2,
        name: "Marcus T.",
        rating: 5,
        text: "Been coming here for months now. Always consistent, sharp fades, and the hot towel treatment is a game changer."
    },
    {
        id: 3,
        name: "David H.",
        rating: 5,
        text: "Professional setting, great conversation, and I walked out feeling like a million bucks. Highly recommend the VIP package."
    }
];

const Reviews = () => {
    return (
        <section className={styles.reviewsSection} id="reviews">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>CLIENT TESTIMONIALS</h2>
                    <div className={styles.ratingBadge}>
                        <Star fill="#c5a059" color="#c5a059" size={20} />
                        <Star fill="#c5a059" color="#c5a059" size={20} />
                        <Star fill="#c5a059" color="#c5a059" size={20} />
                        <Star fill="#c5a059" color="#c5a059" size={20} />
                        <Star fill="#c5a059" color="#c5a059" size={20} />
                        <span className={styles.ratingText}>5.0 Average Rating</span>
                    </div>
                </div>

                <div className={styles.grid}>
                    {reviewsData.map((review) => (
                        <TiltCard key={review.id} className={styles.card}>
                            <Quote className={styles.quoteIcon} size={40} />
                            <p className={styles.reviewText}>"{review.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.stars}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} fill="#c5a059" color="#c5a059" size={14} />
                                    ))}
                                </div>
                                <span className={styles.authorName}>{review.name}</span>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
