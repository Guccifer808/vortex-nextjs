import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/postTypes';

import styles from './postCard.module.css';

const PostCard = (posts: Post) => {
  return (
    <section className={styles.container}>
      <div className={styles.topContainer}>
        {posts?.img && (
          <div className={styles.imgContainer}>
            <Image
              src={posts?.img as string}
              alt='blog posts images for vortex web development agency'
              className={styles.img}
              fill
            />
          </div>
        )}
        <span className={styles.postCardDate}>
          {posts?.createdAt.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottomContainer}>
        <h1 className={styles.title}>{posts?.title}</h1>
        <p className={styles.description}>{posts?.description}</p>
        <Link href={`/blog/post/${posts?.slug}`}>
          <button className={styles.btn}>Read More</button>
        </Link>
      </div>
    </section>
  );
};

export default PostCard;
