import React from 'react';
import styles from "./header-content.module.css"

const HeaderContent = () => {

    

    return (
        <section  className={styles.container}>
            
            <p data-aos="fade-up" data-aos-duration="2000" className={styles.text}>NEW WORLD LEADERBOARD</p>
        </section>
    );
};

export default HeaderContent;