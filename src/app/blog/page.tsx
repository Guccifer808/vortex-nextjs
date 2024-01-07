import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

type Props = {};

const Blog = async (props: Props) => {
  // const post = await getPosts();
  const post = {
    username: 'username',
    title: 'title',
    description: 'description',
    slug: 'slugtest',
  };
  return (
    <main className={styles.container}>
      <div className={styles.postContainer}>
        <PostCard post={post} />
      </div>
    </main>
  );
};

export default Blog;
