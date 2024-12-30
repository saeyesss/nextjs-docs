'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px',
        class:
          'focus:outline-none bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] print:border-0 pt-10 pr-14 pb-10 cursor-text ',
      },
    },
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  });
  return (
    <div className='size-full overflow-x-auto bg-[#FAFBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
      <div className='flex min-w-max w-[816px] py-4 print:py-0 print:w-full justify-center mx-auto print:min-w-0'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
