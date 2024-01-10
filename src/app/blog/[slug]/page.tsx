import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';
import { Post } from '@/types/postTypes';
import { Suspense } from 'react';

import styles from './singlePost.module.css';

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post: Post = await getPost(slug);
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
