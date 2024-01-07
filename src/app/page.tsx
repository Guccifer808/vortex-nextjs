import styles from './homepage.module.css';

import heroAnimated from '../../public/animated/techny-project.gif';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.leftContainer}>
        <h2 className={styles.subTitle}>Elevating Digital Experiences</h2>
        <div className={styles.mobileImage}>
          <Image
            src={heroAnimated}
            alt='about vortex web development'
            width={500}
            height={450}
            className={styles.mobileImage}
          />
        </div>
        <h1 className={styles.title}>Web development solutions</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit
          nobis exercitationem provident ipsum minus.
        </p>
        <div className={styles.btnGroup}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.logosGroup}>
          <Image
            src='/logos/kt-logo.png'
            alt='logos cloud'
            width={90}
            height={75}
            className={styles.logo}
          ></Image>
          <Image
            src='/logos/logo1.png'
            alt='logos cloud'
            width={90}
            height={75}
            className={styles.logo}
          ></Image>
          <Image
            src='/logos/logo2.png'
            alt='logos cloud'
            width={90}
            height={75}
            className={styles.logo}
          ></Image>
          <Image
            src='/logos/logo3.png'
            alt='logos cloud'
            width={90}
            height={75}
            className={styles.logo}
          ></Image>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={heroAnimated}
          alt='hero web development'
          width={500}
          height={450}
          className={styles.heroImg}
        ></Image>
      </div>
    </main>
  );
}
