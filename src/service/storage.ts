import { db, storage } from '../firebase/firebase';

export const deleteFromUrl = async (url:string) => {
  let a:number;
  try {
    a = await storage
      .refFromURL(url)
      .delete()
      .then(() => 1)
      .catch(() => 0);
  } catch (error) {
    return 0;
  }
  return a;
};

export const uploadImagenGetURL = async (file:any, folder:string):Promise<string> => {
  const extension = file.name.split('.').pop();
  const name = file.name.split('.').slice(0, -1).join('.');
  let filename = name + Date.now() + '.' + extension;
  const storageRef = storage.ref(`${folder}/${filename}`);
  const okeUrl = await storageRef.put(file).then(() => storageRef.getDownloadURL());
  return okeUrl;
};
