import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MonacoEditor from '@monaco-editor/react';
import React from 'react';
import './navBar.css'
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const [value, setValue] = React.useState('');
  const [title, setTitle] = React.useState('');
  const { id } = useParams();
  const paste = useSelector((state) =>
    state.paste.pastes.find((item) => item.id === id)
  );

  if (!paste) {
    return <div>Paste not found</div>;
  }

  return (
    <div className='flex justify-center items-center w-full max-w-3xl mx-auto p-2 sm:p-4 mt-[4rem]'>
    <div className='flex justify-center items-center w-[50vw] flex-col gap-4 mt-[4rem] '>
      <input type="text" placeholder='Enter title here'  value={paste.title} onChange={(e)=>setTitle(e.target.value)}
      className='w-full p-3 rounded-lg bg-transparent text-[23px] border'/>
      <div></div>
      {/* <div className='w-full border'>
        <textarea name="" id=""   className='w-full p-6 rounded-md bg-transparent text-[19px]' value={paste.content} rows={20} onChange={(e)=>setValue(e.target.value)} placeholder='Enter Content Here'/>
      </div> */}
       <MonacoEditor
        height="400px"
        // defaultLanguage="javascript"
        theme="vs-dark"
        value={paste.content}
        onChange={toast.error("This is a read-only view.")}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          automaticLayout: true,
          background: "blue-950",
          lineNumbers: "on",
        }}
        className="w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 bg-blue-950 blue-950  overflow-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent "
        style={{ fontFamily: "monospace" }}
      />
    </div>
    </div>
  );
};

export default ViewPaste;