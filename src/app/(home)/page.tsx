'use client';

import { usePaginatedQuery } from 'convex/react';

import Navbar from './navbar';
import TemplateGallery from './template-gallery';
import { api } from '../../../convex/_generated/api';
import DocumentsTable from './documents-table';
import { useSearchParam } from '@/hooks/use-search-param';

const Home = () => {
  const [search] = useSearchParam();

  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 p-4 bg-white'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default Home;
