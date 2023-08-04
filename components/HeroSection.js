import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted className={styles.heroVideo}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Cameron's Blog!</h1>
        <button className={styles.heroButton}>Explore</button>
      </div>
    </div>
  )
}




  