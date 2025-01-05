'use client';
import { useEditorStore } from '@/store/use-editor-store';
import Ruler from './ruler';
import { FontSizeExtension } from '@/extensions/font-size';
import { LineHeightExtension } from '@/extensions/line-height';
import { Threads } from './threads';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import Underline from '@tiptap/extension-underline';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { useLiveblocksExtension } from '@liveblocks/react-tiptap';
import { useStorage } from '@liveblocks/react/suspense';
import { DEFAULT_LEFT_MARGIN, DEFAULT_RIGHT_MARGIN } from '@/constants/margins';

interface EditorProps {
  initialContent?: string | undefined;
}

const Editor = ({ initialContent }: EditorProps) => {
  const leftMargin = useStorage(
    (root) => root.leftMargin ?? DEFAULT_LEFT_MARGIN
  );
  const rightMargin = useStorage(
    (root) => root.rightMargin ?? DEFAULT_RIGHT_MARGIN
  );
  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental: true,
  });
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px`,
        class:
          'focus:outline-none bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] print:border-0 pt-10 pr-14 pb-10 cursor-text ',
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Image,
      ImageResize,
      Underline,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),

      FontSizeExtension,
      LineHeightExtension.configure({
        types: ['heading', 'paragraph'],
        defaultLineHeight: 'normal',
      }),
    ],
  });
  return (
    <div className='size-full overflow-x-auto bg-[#FAFBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
      <Ruler />
      <div className='flex min-w-max w-[816px] py-4 print:py-0 print:w-full justify-center mx-auto print:min-w-0'>
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
