import React from 'react';

const FileInfo = ({ file }) => {
  if (!file) return <div>Loading...</div>;

  return (
    <div className="border p-5 rounded shadow-md">
      <h2 className="text-xl font-bold mb-3">File Information</h2>
      <div className="mb-3">
        <strong>File Name:</strong> {file.fileName}
      </div>
      <div className="mb-3">
        <strong>File Size:</strong> {file.fileSize}
      </div>
      <div className="mb-3">
        <strong>File Type:</strong> {file.fileType}
      </div>
      <div className="mb-3">
        <strong>Uploaded By:</strong> {file.userEmail}
      </div>
      <div className="mb-3">
        <strong>User Name:</strong> {file.userName}
      </div>
      <div className="border rounded p-3">
        <strong>Document Preview:</strong>
        <iframe src={file.fileUrl} className="w-full h-64 mt-3" />
      </div>
    </div>
  );
};

export default FileInfo;
