import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Create a reference to the Firestore collection
    const q = query(collection(projectFirestore, collectionName), orderBy('createdAt', 'desc'));

    // Subscribe to updates to the collection and update the state accordingly
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedDocs = [];
      querySnapshot.forEach((doc) => {
        updatedDocs.push({ ...doc.data(), id: doc.id });
      });
      setDocs(updatedDocs);
    });

    // Unsubscribe from the snapshot listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
