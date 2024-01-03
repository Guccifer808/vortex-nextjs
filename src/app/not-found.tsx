import Link from 'next/link';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href='/'>Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
