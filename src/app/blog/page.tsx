import { Metadata } from 'next';
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';
import { Posts, Post } from '@/types/postTypes';

import styles from './blog.module.css';

type Props = {};

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore insightful articles and updates on web development trends, technologies, and best practices on the Vortex Web Development blog. Stay informed and engaged with our comprehensive and informative content.',
};

const Blog = async (props: Props) => {
  const posts: Posts = await getPosts();
  return (
    <main className={styles.container}>
      {posts.map((post: Post) => (
        <div className={styles.postContainer} key={post?._id}>
          <PostCard {...post} />
        </div>
      ))}
    </main>
  );
};

export default Blog;
