import Image from 'next/image';

import styles from './singlePost.module.css';

import postImg from '/public/static/techny-test.png';
import avatarImg from '/public/static/techny-rocket.png';
import PostUser from '@/components/postUser/PostUser';
import { getPosts } from '@/lib/data';
import { Posts } from '@/types/postTypes';

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post: any = await getPosts(slug);

  return (
    <main className={styles.container}>
      {post.img && (
        <div className={styles.leftContainer}>
          <Image
            src={postImg}
            alt='post vortex web development agency'
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.userInfo}>
          <Image
            src={avatarImg}
            alt='post user avatar'
            className={styles.userImg}
            width={50}
            height={50}
          />
          <PostUser />
          <div className={styles.infoText}>
            <span className={styles.infoTitle}>Published</span>
            <span className={styles.infoValue}>Date</span>
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
