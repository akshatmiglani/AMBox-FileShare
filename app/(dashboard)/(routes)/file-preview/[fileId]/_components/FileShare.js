"use client"
import GlobalApis from '../../../../../GlobalApis';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';

const FileShare = ({ file, onPasswordSave }) => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useUser();

  // Extract the params from the short URL
  const getShortUrlParams = (shortUrl) => {
    const urlParts = shortUrl.split('/');
    return urlParts[urlParts.length - 1];
  };

  const handleCopy = () => {
    const shortUrlParams = getShortUrlParams(file.shortUrl);
    const shortUrl = `http://localhost/view/${shortUrlParams}`;
    navigator.clipboard.writeText(shortUrl);
    alert('URL copied to clipboard!');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSavePassword = () => {
    onPasswordSave(password);
    alert('Password saved!');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSend = async () => {
    const shortUrlParams = getShortUrlParams(file.shortUrl);
    const shortUrl = `http://localhost:3000/view/${shortUrlParams}`;
    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
      shortUrl: shortUrl,
    };
  
    try {
      const response = await GlobalApis.SendEmail(data);
      if (response.status === 200) {
        alert(`File sent to ${email}`);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
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
            value={`http://localhost:3000/view/${getShortUrlParams(file.shortUrl)}`}
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
        
        {showPasswordInput && (
          <div className="flex mt-2">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              className="border rounded p-2 flex-1"
            />
            <button
              onClick={handleSavePassword}
              className="bg-blue-500 text-white p-2 rounded ml-2"
            >
              Save
            </button>
          </div>
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

