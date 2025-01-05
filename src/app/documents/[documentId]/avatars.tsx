'use client';
import { useOthers, useSelf } from '@liveblocks/react/suspense';
import { ClientSideSuspense } from '@liveblocks/react/suspense';
import { Separator } from '@/components/ui/separator';

const AVATAR_SIZE = 36;

interface AvatarProps {
  src: string;
  name: string;
}

export const Avatars = () => {
  return (
    <ClientSideSuspense fallback={null}>
      <AvatarStack />
    </ClientSideSuspense>
  );
};

const AvatarStack = () => {
  const users = useOthers();
  const currentUser = useSelf();
  if (users.length === 0) return null;

  return (
    <>
      <div className='flex items-center'>
        {currentUser && (
          <div className='relative ml-2'>
            <Avatar src={currentUser.info.avatar} name='You' />
          </div>
        )}
        <div className='flex'>
          {users.map(({ connectionId, info }) => {
            return (
              <Avatar key={connectionId} src={info.avatar} name={info.name} />
            );
          })}
        </div>
      </div>
      <Separator orientation='vertical' className='h-6' />
    </>
  );
};

const Avatar = ({ src, name }: AvatarProps) => {
  return (
    <div
      style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      className=' flex shrink-0 relative border-4 border-white rounded-full bg-gray-400 -ml-2 group place-content-center'
    >
      <div className='bg-black opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 whitespace-nowrap transition-opacity'>
        {name}
      </div>
      <img alt={name} src={src} className='size-full rounded-full' />
    </div>
  );
};

export default Avatar;
