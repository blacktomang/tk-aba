import { db } from '../../../firebase/firebase';

export default function handler(req, res) {
  const { where } = req.query;
  if (req.method === 'GET') {
    db.collection('intro')
      .where('belongsTo', '==', where)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        res.status(200).json({ result: documents });
      });
  } else {
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
