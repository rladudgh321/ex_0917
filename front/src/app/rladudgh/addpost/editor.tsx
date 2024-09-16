"use client"
// import styles from '../contents/QuillEditor.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef, useMemo, useState, useCallback } from 'react';
import { uploadImageAPI } from '@/app/apis/post';


export default function QuillEditor() {
  const quillRef = useRef(null);
  const [html, setHtml] = useState('');
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      
      try {
        const file = input.files?.[0];
        console.log('editor file', file);
        const token = localStorage?.getItem('authorization') as string;
        const res = await uploadImageAPI({ file: file as any, token });
        console.log('res', res);
        const imgUrl = res.data.imgUrl;
        const editor = quillRef.current.getEditor(); 
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', imgUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['image'],
        ],
        handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'align',
    'image',
  ];

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('onSubmit', html);
  },[html]);

  return (
    <form onSubmit={onSubmit}>
      <ReactQuill
        ref={quillRef}
        onChange={setHtml}
      //   className={styles.quill}
        modules={modules}
        formats={formats}
        value={html}
        placeholder={'오늘도 파이팅'}
        theme="snow"
      />
      <br />
      <input type="submit" value="제출" className="border border-blue-300 p-2 bg-blue-300 text-white rounded-lg w-24 cursor-pointer float-right active:bg-blue-600" />
    </form>
  );
}