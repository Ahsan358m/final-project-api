const {initializeApp, cert} = require("firebase-admin/app");
const { getStorage } = require('firebase-admin/storage');

var serviceAccount = require("../nodejs-file-upload-firebase-adminsdk-rt19m-e0c7acb177.json");

 const firebaseInit = initializeApp({
    credential: cert(serviceAccount),
    storageBucket: 'nodejs-file-upload.appspot.com'
  });

  const storage = getStorage();

module.exports = {firebaseInit, storage};




























//   async function uploadFile(){
//     const metadata = {
//         metadata: {
//           // This line is very important. It's to create a download token.
//           firebaseStorageDownloadTokens: uuid()
//         },
//         contentType: 'image/png',
//         cacheControl: 'public, max-age=31536000',
//       };

//       // Uploads a local file to the bucket
//   await bucket.upload(filename, {
//     // Support for HTTP requests made with `Accept-Encoding: gzip`
//     gzip: true,
//     metadata: metadata,
//   });

//   console.log(`${filename} uploaded.`);

//   }

//   uploadFile().catch(console.error);