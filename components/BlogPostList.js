import Link from 'next/link';
import styles from '../styles/BlogPostList.module.css';

export default function BlogPostList({ posts }) {
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <Link className={styles.card} href={`/posts/${post.id}`} key={post.id}>
            <h2>{post.title} &rarr;</h2>
            <p>{post.content}</p>
        </Link>
      ))}
    </div>
  )
}

