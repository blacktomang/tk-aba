import { useEffect, useState } from 'react';
import { db, storage, timeStamp } from '../../firebase/firebase';

export default function useFirestorenStorage(folder, file, data) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let mounted = false;
    const extension = file.name.split('.').pop();
    const name = file.name.split('.').slice(0, -1).join('.');
    let filename = name + Date.now() + '.' + extension;
    const storageRef = storage.ref(`${folder}/${filename}`);
    const collectionRef = db.collection(folder);

    storageRef.put(file).on(
      'state_change',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add(
          Object.assign(data, {
            url,
            createAt: timeStamp,
          }),
        );
        setUrl(url);
      },
    );

    return () => {
      mounted = true;
    };
  }, [file]);

  console.log(data);

  return { progress, error, url };
}
