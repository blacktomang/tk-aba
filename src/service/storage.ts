import {
  storage
} from '../firebase/firebase';

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

export const uploadImagesnGetURLS = async (files: any[], folder: string): Promise<Promise<string>[]> => {
  let urls = [];
  for (let i = 0; i < files.length; i++) {
    const extension = files[i].name.split('.').pop();
    const name = files[i].name.split('.').slice(0, -1).join('.');
    let filename = name + Date.now() + '.' + extension;
    const storageRef = storage.ref(`${folder}/${filename}`);
    const okeUrl = await storageRef.put(files[i]).then(() => storageRef.getDownloadURL());
    urls.push(okeUrl);
  }
  return urls;
};

export const deleteFromUrls = async (urls: any[]) => {
  try {
    await Promise.all(urls).then((values) => {
      values.forEach(async(v) => {
        await storage.refFromURL(v.url).delete();
      });
    });
    return 1;
  } catch (error) {
    console.log('eror',error);
    return 0;
  } 
};