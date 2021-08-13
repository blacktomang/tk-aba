import React, { useEffect, useState } from 'react';
import { db, timeStamp } from '../../firebase/firebase';

export default function AddString({ folder, data }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const collectionRef = db.collection(folder);
      collectionRef.add(
        Object.assign(data, {
          createAt: timeStamp,
        }),
      );
    } catch (err) {
      setError(err);
    }
  }, [data]);

  return <></>;
}
