import Image from 'next/image';

import styles from './footer.module.css';

import logo from '../../../public/logo.png';
import Link from 'next/link';
import { getYear } from '@/constants/getYear';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.container}>
      <div>
        <Link href='/'>
          <Image src={logo} alt='vortex footer logo' className={styles.logo} />
        </Link>
      </div>
      <div className={styles.copyright}>
        {getYear()} &copy; Made with ❤️ by{' '}
        <Link
          href='https://guccifer.site/'
          target='_blank'
          className={styles.name}
        >
          Guccifer
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
