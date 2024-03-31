// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';

// const FileUploadForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadedUrls, setUploadedUrls] = useState([]);

//   const handleFileChange = (e) => {
//     setSelectedFiles(e.target.files);
//   };

//   const handleUpload = async () => {
//     const storageRef = firebase.storage().ref();

//     const uploadTasks = Array.from(selectedFiles).map((file) => {
//       const fileRef = storageRef.child(file.name);
//       return fileRef.put(file);
//     });

//     try {
//       const uploadSnapshots = await Promise.all(uploadTasks);
//       const downloadUrls = await Promise.all(
//         uploadSnapshots.map((snapshot) => snapshot.ref.getDownloadURL())
//       );
//       setUploadedUrls(downloadUrls);
//     } catch (error) {
//       console.error('Error uploading files: ', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadedUrls.length > 0 && (
//         <div>
//           <h2>Uploaded URLs:</h2>
//           <ul>
//             {uploadedUrls.map((url, index) => (
//               <li key={index}>
//                 <a href={url} target="_blank" rel="noopener noreferrer">
//                   {url}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUploadForm;
