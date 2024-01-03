import Links from './links/Links';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className=''>Logo</div>
      <div className=''>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
