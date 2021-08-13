import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'

export default function getBannerStore(collection, page) {
  const [banner, setBanner] = useState([]);
  if (collection && page) {
    useEffect(() => {
      const unsub = db.collection(collection)
        .where("belongsTo", "==", page)
        .orderBy("createAt", "asc")
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setBanner(documents);
        });
      
      return () => unsub();
  
    }, [collection])
    return {banner}
  }
}


