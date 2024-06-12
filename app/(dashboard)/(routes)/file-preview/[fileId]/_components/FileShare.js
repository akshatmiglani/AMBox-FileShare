"use client"
import React, { useState } from 'react';

const FileShare = ({ file, onPasswordSave }) => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(file.shortUrl);
    alert('URL copied to clipboard!');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    onPasswordSave(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSend = () => {
    // Implement email sending logic here
    alert(`File sent to ${email}`);
  };
  if (!file) {
    return <div>Loading...</div>;
  }
  return (
    <div className="border p-5 rounded shadow-md">
      <h2 className="text-xl font-bold mb-3">Share File</h2>
      <div className="mb-3">
        <label className="block font-semibold mb-1">Short URL:</label>
        <div className="flex">
          <input
            type="text"
            value={file.shortUrl}
            readOnly
            className="flex-1 border rounded p-2"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white p-2 rounded ml-2"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            onChange={(e) => setShowPasswordInput(e.target.checked)}
            className="mr-2"
          />
          Enable Password
        </label>
        {showPasswordInput && (<>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="border rounded p-2 mt-2 w-full"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white p-2 rounded ml-2"
          >
            Save
          </button>
          </>
        )}
      </div>
      <div className="mb-3">
        <label className="block font-semibold mb-1">Send File to Email:</label>
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email address"
            className="flex-1 border rounded p-2"
          />
          <button
            onClick={handleEmailSend}
            className="bg-green-500 text-white p-2 rounded ml-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileShare;
