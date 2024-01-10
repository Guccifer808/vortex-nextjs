import { getUserById } from '@/lib/data';
import styles from './postuser.module.css';
import Image from 'next/image';
import { User } from '@/types/userTypes';
import userIcon from '/public/static/user.png';

type Props = {
  userId: string;
};

const PostUser = async ({ userId }: Props) => {
  const user: User = await getUserById(userId);

  return (
    <section className={styles.container}>
      <Image
        alt='user avatar'
        src={user.avatar ? user.avatar : userIcon}
        width={35}
        height={35}
      />
      <div className={styles.userInfo}>
        <span className={styles.infoTitle}>Author</span>
        <span className={styles.infoValue}>{user.username}</span>
      </div>
    </section>
  );
};

export default PostUser;
