import { Metadata } from 'next';
import PostCard from '@/components/postCard/PostCard';
// import { getPosts } from '@/lib/data';
import { Posts, Post } from '@/types/postTypes';

import styles from './blog.module.css';

type Props = {};

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore insightful articles and updates on web development trends, technologies, and best practices on the Vortex Web Development blog. Stay informed and engaged with our comprehensive and informative content.',
};

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/blog`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

const Blog = async (props: Props) => {
  const posts: Posts = await getData();
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
