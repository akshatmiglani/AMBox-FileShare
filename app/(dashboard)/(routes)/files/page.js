"use client"
import React, { useEffect, useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { collection, getDocs, getFirestore, query, where, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';

const Files1 = () => {
  const { user } = useUser();
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);

      if (!user || !user.primaryEmailAddress) {
        setIsLoading(false);
        return;
      }

      try {
        const filesCollectionRef = collection(db, 'uploadedfile');
        const userFilesQuery = query(filesCollectionRef, where("userEmail", "==", user.primaryEmailAddress.emailAddress));
        const querySnapshot = await getDocs(userFilesQuery);
        const filesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setFiles(filesData);
      } catch (error) {
        console.error("Error fetching files: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, [user, db]);

  const handleDelete = async (fileId) => {
    try {
      await deleteDoc(doc(db, 'uploadedfile', fileId));
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Files</h2>
      <UserButton />
      {isLoading ? (
        <p>Loading files...</p>
      ) : (
        <div>
          {files.length === 0 ? (
            <p>No files uploaded.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">File Name</th>
                    <th className="py-2 px-4 border-b border-gray-200">File Size</th>
                    <th className="py-2 px-4 border-b border-gray-200">File Type</th>
                    <th className="py-2 px-4 border-b border-gray-200">URL</th>
                    <th className="py-2 px-4 border-b border-gray-200">Short URL</th>
                    <th className="py-2 px-4 border-b border-gray-200">User Email</th>
                    <th className="py-2 px-4 border-b border-gray-200">User Name</th>
                    <th className="py-2 px-4 border-b border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr key={file.id}>
                      <td className="py-2 px-4 border-b border-gray-200">{file.fileName}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{file.fileSize}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{file.fileType}</td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <a href={file.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {file.fileUrl}
                        </a>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">{file.shortUrl}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{file.userEmail}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{file.userName}</td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Files1;
