import styles from '../styles/NewsletterSignup.module.css';

export default function NewsletterSignup() {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.title}>Subscribe to our newsletter</h2>
      <form className={styles.form}>
        <input type="email" className={styles.input} placeholder="Enter your email" required />
        <button type="submit" className={styles.button}>Subscribe</button>
      </form>
    </div>
  )
}
