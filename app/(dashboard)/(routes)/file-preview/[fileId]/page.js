"use client"
import { app } from '@/firebaseconfig'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FileInfo from './_components/FileInfo'
import FileShare from './_components/FileShare'
import Link from 'next/link'

const FilePreview = ({params}) => {
  useEffect(()=>{
    console.log(params?.fileId)
    params?.fileId&&getFileInfo();
  },[])
  const db = getFirestore(app);
  const [file,setFile]=useState();
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
  const onPasswordSave=(password)=>{

  }
    return (
    <div className='py-20 px-20'>
        <Link href='/upload' className='flex gap-3'>
            <ArrowLeft /> Back to upload
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
            <FileInfo file={file}/>
            <FileShare file={file} onPasswordSave={(password)=>onPasswordSave(password)} />
        </div>
    </div>
  )
}

export default FilePreview