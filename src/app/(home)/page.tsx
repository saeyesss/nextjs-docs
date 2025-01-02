import Link from 'next/link';
import Navbar from './navbar';

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 p-4 bg-white'>
        <Navbar />
      </div>
      <div className='mt-16'>
        Click
        <Link href='documents/123'>
          &nbsp;
          <span className='underline'>GO </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
