import styles from './postuser.module.css';

type Props = {};

const PostUser = (props: Props) => {
  return (
    <section className={styles.container}>
      <span className={styles.infoTitle}>Author</span>
      <span className={styles.infoValue}>Name</span>
    </section>
  );
};

export default PostUser;
