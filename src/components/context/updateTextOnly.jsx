import { useEffect, useState } from 'react';
import { db, timeStamp } from '../../firebase/firebase';

export default function updateTitle(folder, data, id) {
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const collectionRef = db.collection(folder);
      collectionRef.doc(id).set(
        Object.assign(
          data,
          {
            createAt: timeStamp,
          },
          { merge: true },
        ),
      );
    } catch (err) {
      setError(err);
    }
  }, [data]);

  return { error };
}
