"use client";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from 'react';
import UploadForm from './_components/page';
import { app } from "@/firebaseconfig";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/app/GenerateRandom";
import { useRouter } from "next/navigation";

const Upload = () => {
  const storage = getStorage(app);
  const [progress, setProgress] = useState(0);
  const [uploadedSuccessful, setUploadedSuccessful] = useState(false);
  const db = getFirestore(app);
  const { user } = useUser();  // Destructure user from useUser
  const [fileDocId,setFileDocId]=useState();
  const router=useRouter();
  useEffect(() => {
    if (uploadedSuccessful && fileDocId) {
      setTimeout(() => {
        router.push('/file-preview/' + fileDocId);
      }, 5000);
    }
  }, [uploadedSuccessful, fileDocId]);
  
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        console.log('Upload successful');
        setUploadedSuccessful(true);
        setTimeout(() => setUploadedSuccessful(false), 60000);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file, downloadURL);
        });
      }
    );
  };

  const saveInfo = async (file, fileUrl) => {
    const docId=generateRandomString().toString();
    try {
      await setDoc(doc(db, "uploadedfile", docId), {
        fileName: file?.name,  
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        password: '', 
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
      });
      setFileDocId(docId);
      console.log("Saved Info");
      
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };


  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>
        <strong className='text-primary'>Upload File </strong>and Generate Link
      </h2>
      <UploadForm
        progress={progress}
        uploadedSuccessful={uploadedSuccessful}
        uploadBtnClick={(file) => uploadFile(file)}
      />
    </div>
  );
};

export default Upload;
