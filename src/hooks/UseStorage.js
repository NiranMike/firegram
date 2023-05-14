import { useState, useEffect } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { projectFirestore, projectStorage, timeStamp } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const UseStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const projectRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(projectRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress)
    }, (error) => {
      setError(error)
    }, async() => {
      const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
      setUrl(downloadUrl);
    });

  }, [file])

  useEffect(() => {
    if (url) {
      const createdAt = timeStamp();
      addDoc(collection(projectFirestore, "images"), {
        url,
        createdAt
      }).catch((error) => {
        setError(error);
      });
    }
  }, [url]);

  return { progress, url, error };
}

export default UseStorage;
