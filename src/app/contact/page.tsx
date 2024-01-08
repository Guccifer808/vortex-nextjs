import Image from 'next/image';
import { Metadata } from 'next';

import styles from './contact.module.css';

import contactAnimated from '../../../public/animated/techny-contact.gif';

type Props = {};

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Vortex. Contact our team for inquiries, collaborations, or any assistance regarding our services. Reach out today and start building something great together.',
};

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
