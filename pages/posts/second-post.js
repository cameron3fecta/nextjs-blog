import Link from 'next/link';
import styles from '../../styles/BlogPost.module.css';

export default function SecondPost() {
  return (
    <div className={styles.post}>
      <h1 className={styles.postTitle}>Second Post</h1>
      <p className={styles.author}>Cameron | August 5, 2023</p>
      <div className={styles.content}>
        <p>This is the second post.</p>
        {/* Add more content here */}
      </div>
      <div className={styles.share}>
        <p>Share this post:</p>
        {/* Add share buttons here */}
      </div>
      <Link href="/">← Back to home</Link>
    </div>
  )
}
