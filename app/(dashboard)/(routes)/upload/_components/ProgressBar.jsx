import React from 'react';
import SucessMsg from './SucessMsg';

const ProgressBar = ({ progress = 40, uploadedSuccessful }) => {
  return (
    <div className='bg-gray-400 w-full h-4 mt-3 rounded-full'>
      <div className='text-[10px] bg-primary rounded-full text-white' style={{ width: `${progress}%` }}>
        {`${Number(progress).toFixed(0)}%`}
      </div>
      {uploadedSuccessful && <SucessMsg />}
    </div>
  );
}

export default ProgressBar;
