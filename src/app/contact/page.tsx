import Image from 'next/image';

import styles from './contact.module.css';

import contactAnimated from '../../../public/animated/techny-contact.gif';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          src={contactAnimated}
          alt='contact vortex web development'
          width={500}
          height={450}
          className={styles.contactImg}
        />
      </div>
      <div className={styles.rightContainer}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='Your Name' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea
            name='Message'
            id=''
            cols={30}
            rows={10}
            placeholder='Share your thoughts, questions, or project details with us.'
          ></textarea>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
