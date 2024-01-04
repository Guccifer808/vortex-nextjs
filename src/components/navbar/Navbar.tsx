import Image from 'next/image';
import Links from './links/Links';
import styles from './navbar.module.css';
import logo from '/public/logo.png';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.container}>
      <div>
        <Link href='/'>
          <Image src={logo} alt='vortex navbar logo' className={styles.logo} />
        </Link>
      </div>
      <div className=''>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
