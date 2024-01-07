import Image from 'next/image';
import Link from 'next/link';

import styles from './postCard.module.css';

import postImg from '/public/static/techny-test.png';

type Props = {};

const PostCard = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={postImg}
            alt='blog posts images for vortex web development agency'
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.postCardDate}>Date</span>
      </div>
      <div className={styles.bottomContainer}>
        <h1 className={styles.title}>Lorem, ipsum.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quas.
        </p>
        <Link href='/blog/post'>
          <button className={styles.btn}>Read More</button>
        </Link>
      </div>
    </section>
  );
};

export default PostCard;
