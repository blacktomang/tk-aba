import { db } from '../../firebase/firebase';

export default function a(req, res) {
  if (req.method === 'GET') {
    const { any } = req.query;

    db.collection(any).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      res.status(200).json({ result: documents });
    });
    return;
  } else {
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
