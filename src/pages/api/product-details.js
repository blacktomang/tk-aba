import { db } from '../../firebase/firebase';

export default function handler(req, res) {

  if (req.method === 'GET') {    
    db.collection('productdetails')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        res.status(200).json({ result : documents })
      });
  }
}

export const config = {
    api:{
        externalResolver: true,
    },
}
