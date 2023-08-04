import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import BlogPostList from '../components/BlogPostList';
import NewsletterSignup from '../components/NewsletterSignup';
import styles from '../styles/Home.module.css';

const posts = [
  { id: 'first-post', title: 'First Post', content: 'This is the first post.' },
  { id: 'second-post', title: 'Second Post', content: 'This is the second post.' },
  // ... include other posts here
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cameron's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

      <main>
        <BlogPostList posts={posts} className={styles.grid} />
      </main>

      <NewsletterSignup />

      <footer>
        <p>
          Created by Cameron
        </p>
      </footer>
    </div>
  )
}

