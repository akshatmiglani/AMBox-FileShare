# AMBOX - File Sharing Application

## Docker Container Setup
### You can create a new docker image or use existing:

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