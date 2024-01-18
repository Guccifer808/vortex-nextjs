import { addPost, removePost } from '@/lib/actions';

import styles from './serverAction.module.css';
type Props = {};

const ServerAction = (props: Props) => {
  return (
    <section className={styles.container}>
      <form action={addPost} className={styles.form}>
        <h2>Add Post</h2>
        <input type='text' name='title' placeholder='Post Title' />
        <input type='text' name='description' placeholder='Post Description' />
        <input type='text' name='slug' placeholder='Post Slug' />
        <input type='text' name='userId' placeholder='userId' />
        <input type='text' name='img' placeholder='URL for post image' />
        <button className={styles.btn}>Add Post</button>
      </form>

      <form action={removePost} className={styles.form}>
        <h2>Remove Post</h2>
        <input type='text' name='id' placeholder='Post Id' />
        <button className={styles.btn}>Remove Post</button>
      </form>
    </section>
  );
};

export default ServerAction;
