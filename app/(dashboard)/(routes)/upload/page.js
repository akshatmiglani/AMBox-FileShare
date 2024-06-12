"use client";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from 'react';
import UploadForm from './_components/page';
import { app } from "@/firebaseconfig";

const Upload = () => {
  const storage = getStorage(app);
  const [progress, setProgress] = useState(0);
  const [uploadedSuccessful, setUploadedSuccessful] = useState(false);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };

    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Upload failed:', error);
      },
      () => {
        // Handle successful uploads on complete
        console.log('Upload successful');
        // Set uploadedSuccessful to true after upload completes
        setUploadedSuccessful(true);
        setTimeout(() => setUploadedSuccessful(false), 60000);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };
  const saveInfo=()=>{
    const docId=Date.now().toString();
    
  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>
        <strong className='text-primary'>Upload File </strong>and Generate Link
      </h2>
      <UploadForm progress={progress} uploadedSuccessful={uploadedSuccessful} uploadBtnClick={(file) => uploadFile(file)} />
      </div>
  );
};

export default Upload;
