import React, { useState } from 'react';
import AlertMsg from './AlertMsg';
import UploadPreview from './FilePreview';
import ProgressBar from './ProgressBar';

const UploadForm = ({uploadBtnClick,progress,uploadedSuccessful}) => {
    
    const [file, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const onFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) return;
        if (selectedFile.size > 2000000) {
            console.log("Size greater than 2MB.");
            setErrorMsg("Maximum file upload size is 2MB");
            return;
        }
        setErrorMsg(null);
        setFile(selectedFile);
    }
    

    return (
        <div className='text-center'>
            <label htmlFor="uploadFile1"
                className="bg-red-50 text-primary font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                    <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                    <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                </svg>
                Click / Drag / Drop File
                <input onChange={onFileSelect} type="file" id='uploadFile1' className="hidden" />
                <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG, SVG, WEBP, and GIF are Allowed.</p>
            </label>
            {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
            {file ? <UploadPreview file={file} removeFile={()=>setFile(null)}/> : null}
            {progress>0?<ProgressBar uploadedSuccessful={uploadedSuccessful} progress={progress}/>:<>
            <button onClick={()=>uploadBtnClick(file)} disabled={!file} className='p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-500'>Upload</button>

            </>}
        </div>
    );
};

export default UploadForm;
