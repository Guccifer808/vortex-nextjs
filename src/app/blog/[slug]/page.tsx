import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';
import { Post } from '@/types/postTypes';
import { Suspense } from 'react';

import styles from './singlePost.module.css';
import { Params } from '@/types/types';

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const post: Post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.description,
  };
};

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.API_URL}/blog/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
};

const SinglePostPage = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const post: Post = await getPost(slug);

  console.log(post);

  return (
    <main className={styles.container}>
      {post?.img && (
        <div className={styles.leftContainer}>
          <Image
            src={post?.img}
            alt='post vortex web development agency'
            className={styles.img}
            fill
          />
        </div>
      )}
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.userInfo}>
          {post && (
            <Suspense fallback={<div>Loading</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.infoText}>
            <span className={styles.infoTitle}>Published</span>
            <span className={styles.infoValue}>
              {post?.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <section className={styles.postContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            deleniti, placeat voluptatem recusandae ex eum?
          </p>
        </section>
      </div>
    </main>
  );
};

export default SinglePostPage;
