import Image from 'next/image';

import styles from './singlePost.module.css';

import postImg from '/public/static/techny-test.png';
import avatarImg from '/public/static/techny-rocket.png';

type Props = {};

const SinglePostPage = (props: Props) => {
  return (
    <main className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          src={postImg}
          alt='post vortex web development agency'
          className={styles.img}
        />
      </div>
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
          <div className={styles.infoText}>
            <span className={styles.infoTitle}>Author</span>
            <span className={styles.infoValue}>Name</span>
          </div>
          <div className={styles.infoText}>
            <span className={styles.infoTitle}>Published</span>
            <span className={styles.infoValue}>Date</span>
          </div>
        </div>
        <section className={styles.postContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          deleniti, placeat voluptatem recusandae ex eum?
        </section>
      </div>
    </main>
  );
};

export default SinglePostPage;
