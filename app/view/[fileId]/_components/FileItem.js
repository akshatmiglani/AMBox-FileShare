import { Download } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';


const FileItem = ({ file }) => {
  const [password, setPassword] = useState('');


  if (!file) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='p-5 rounded-md bg-white flex flex col items-center'>
        <div className='text-center flex-col gap-3 items-center flex'>
          <h2 className='text-[20px] text-gray-600'>
            <strong className='text-primary'>{file.userName}</strong> Shared a file with you!
          </h2>
          <h2 className='text-[10px] text-gray-400'>File details are below</h2>
          <Image src='/download.gif' width={150} height={150} className='w-[150px] h-[150px] p-5' />
          <h2 className='text-gray-500 text-[15px]'>{file.fileName} - {file.fileSize}Bytes - {file.fileType}</h2>
          {file.password.length > 0 ? <input onChange={(e) => setPassword(e.target.value)} type='password' className='p-2 border rounded-md text-[14px] mt-5 text-center outline-red-400' placeholder='Enter password to access' /> : null}

          <button onClick={() => window.open(file?.fileUrl)} href='' className='flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-red-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-300' disabled={file.password !== password}><Download className='h-4 w-4' />Download</button>

        </div>

      </div>
    </>


  );
};

export default FileItem;
