import Image from 'next/image';
import Links from './links/Links';
import styles from './navbar.module.css';
import logo from '/public/logo.png';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.container}>
      <div>
        <Image src={logo} alt='vortex logo' className={styles.logo} />
      </div>
      <div className=''>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
