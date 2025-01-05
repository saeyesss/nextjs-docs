'use client';
import { BsCloudCheck, BsCloudSlash } from 'react-icons/bs';
import { Id } from '../../../../convex/_generated/dataModel';
import { useRef, useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useDebounce } from '@/hooks/use-debounce';
import { toast } from 'sonner';
import { useStatus } from '@liveblocks/react';
import { LoaderIcon } from 'lucide-react';

interface DocumentInputProps {
  title: string;
  id: Id<'documents'>;
}

const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const status = useStatus();
  const [value, setValue] = useState(title);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const mutate = useMutation(api.documents.updateById);
  const debouncedUpdate = useDebounce((newValue: string) => {
    if (newValue === title) return;
    setIsPending(true);
    mutate({ id, title: newValue })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setIsPending(false));
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        setIsEditing(false);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setIsPending(false));
  };

  const loading =
    isPending || status === 'connecting' || status === 'reconnecting';
  const error = status === 'disconnected';

  return (
    <div className='flex items-center gap-2'>
      {isEditing ? (
        <form onSubmit={handleSubmit} className='relative w-fit max-w-[50ch]'>
          <span className='invisible'>{value || ' '}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              debouncedUpdate(e.target.value);
            }}
            onBlur={() => setIsEditing(false)}
            className='absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate'
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className='text-lg px-1.5 cursor-pointer truncate'
        >
          {title}
        </span>
      )}
      {error && <BsCloudSlash className='size-4' />}
      {!error && !loading && <BsCloudCheck className='size-4' />}
      {loading && (
        <LoaderIcon className='size-4 animate-spin text-muted-foreground' />
      )}
    </div>
  );
};

export default DocumentInput;
