'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

import { templates } from '@/constants/templates';
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useState } from 'react';
import { toast } from 'sonner';

const TemplateGallery = () => {
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const [isCreating, setIsCreating] = useState(false);

  const onTemplateClick = (title: string, initialContent: string) => {
    setIsCreating(true);
    create({ title, initialContent })
      .then((documentId) => {
        router.push(`/documents/${documentId}`);
      })
      .catch(() => toast.error('Something went wrong. Please try again.'))
      .finally(() => {
        setIsCreating(false);
      });
  };

  return (
    <div className='bg-[#F1F3F4]'>
      <div className='flex max-w-screen-xl mx-auto px-16 flex-col gap-y-4 py-6'>
        <h3 className='font-medium'>Start a new document</h3>

        <Carousel>
          <CarouselContent className='-ml-4'>
            {templates.map((template) => (
              <CarouselItem
                key={template.id}
                className=' basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4'
              >
                <div
                  className={cn(
                    'aspect-[3/4] flex flex-col gap-y-2.5',
                    isCreating && 'pointer-events-none opacity-50'
                  )}
                >
                  <button
                    disabled={isCreating}
                    onClick={() =>
                      onTemplateClick(template.label, template.initialContent)
                    }
                    style={{
                      backgroundImage: `url(${template.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className='size-full border rounded-sm flex flex-col items-center justify-center gap-y-4 bg-white hover:border-blue-500 hover:bg-blue-50 transition'
                  />
                  <p className='font-medium text-sm truncate'>
                    {template.label}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TemplateGallery;
