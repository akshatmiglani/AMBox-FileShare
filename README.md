# AMBOX - File Sharing Application

## Secure File-Sharing Platform
### Overview
This project is a secure file-sharing platform developed using Next.js and Google Firebase. It integrates Firestore for efficient database management and Clerk for robust authentication via Gmail or GitHub, ensuring data privacy and user security. The platform is designed with a user-friendly interface using React and Tailwind CSS, offering seamless file uploads, metadata display, and more.

### Features
Secure Authentication: Users can sign in via Gmail or GitHub using Clerk for robust authentication.
Efficient Database Management: Utilizes Firestore for handling file metadata and user information securely.
User-Friendly Interface: Designed with React and Tailwind CSS for a seamless user experience.
File Uploads: Allows users to upload files directly to Firebase storage with an intuitive interface.
File Metadata and Previews: Displays file metadata and previews for better file management.
Password Protection: Users can set passwords for their files to ensure secure access.
Download Links via Email: Users receive download links via email for easy file sharing.
Comprehensive Dashboard: Offers a dashboard for users to manage their files, view metadata, and handle file settings.

## Docker Container Setup
### You can create a new docker image or use existing: akshatmiglani/ambox

## Build image
```bash
docker build -t your-image-name .
```

### Run docker container
```bash
docker run -p 3000:3000 your-image-name
```

## Clone repository and manully perform these steps.
### Install required dependencies using, make sure you have node installed
```
npm install
```
### Create a .env file to have this data:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

NEXT_PUBLIC_BASE_URL=http://localhost:3000/

RESEND_API_KEY=

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

### Start the app using 
```
npm run dev
```
