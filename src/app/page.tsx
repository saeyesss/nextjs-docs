import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      Click{' '}
      <Link href='documents/123'>
        <span className='underline'> &nbsp; GO </span>
      </Link>
    </div>
  );
};

export default Home;
