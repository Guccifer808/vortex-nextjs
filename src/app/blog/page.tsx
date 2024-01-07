import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';

type Props = {};

const Blog = (props: Props) => {
  return (
    <main className={styles.container}>
      <div className={styles.postContainer}>
        <PostCard />
      </div>
    </main>
  );
};

export default Blog;
