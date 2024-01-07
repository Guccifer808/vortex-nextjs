import Image from 'next/image';
import Link from 'next/link';

import styles from './postCard.module.css';

import { Post } from '@/types/postTypes';

const PostCard = ({ post }: Post) => {
  return (
    <section className={styles.container}>
      <div className={styles.topContainer}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={post.img as string}
              alt='blog posts images for vortex web development agency'
              className={styles.img}
              fill
            />
          </div>
        )}
        <span className={styles.postCardDate}>Date</span>
      </div>
      <div className={styles.bottomContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>
        <Link href={`/blog/post/${post.slug}`}>
          <button className={styles.btn}>Read More</button>
        </Link>
      </div>
    </section>
  );
};

export default PostCard;
