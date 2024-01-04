import Image from 'next/image';

import styles from './about.module.css';

import aboutAnimated from '../../../public/animated/techny-stock.gif';

type Props = {};

const About = (props: Props) => {
  return (
    <main className={styles.container}>
      <div className={styles.leftContainer}>
        <h2 className={styles.subTitle}>Empowering Digital Excellence</h2>
        <h1 className={styles.title}>
          Crafting Bespoke Web Solutions
          <br /> to Redefine Your Online Presence
        </h1>
        <p className={styles.description}>
          At <span className={styles.span}>Vortex</span>, we fuse creativity
          with cutting-edge technology <br />
          to engineer dynamic web solutions, redefining industry standards.
          <br />
          Join us on a transformative journey
          <br />
          where your vision meets our expertise, shaping the future of digital
          <br />
          excellence.
        </p>
        <div className={styles.infoGroup}>
          <div className={styles.info}>
            <h1>5+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.info}>
            <h1>100+</h1>
            <p>Happy Clients</p>
          </div>
          <div className={styles.info}>
            <h1>∞+</h1>
            <p>Solutions Delivered</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={aboutAnimated}
          alt='about vortex web development'
          width={500}
          height={450}
          className={styles.aboutImg}
        ></Image>
      </div>
    </main>
  );
};

export default About;
