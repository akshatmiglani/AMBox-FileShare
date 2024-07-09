"use client"
import { Firestore, doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { app } from '../../../firebaseConfig';
import FileItem from './_components/FileItem'
const FileView = ({params}) => {
    const [file,setFile]=useState();
    useEffect(()=>{
        console.log(params.fileId);
        params.fileId&&getFileInfo()
    },[]);
    const db=getFirestore(app);
    
    const getFileInfo=async()=>{
        const docRef=doc(db,"uploadedfile",params?.fileId);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document data:",docSnap.data());
            setFile(docSnap.data());
        }else{
            console.log("No such document")
        }
      }
    return (
        <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
            <FileItem file={file}/>
        </div>
  )
}

export default FileView