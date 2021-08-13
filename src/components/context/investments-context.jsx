import React,{useContext, useEffect, useState} from 'react'
import { db } from '../../firebase/firebase'

export const InvestmensContext = React.createContext()

export const getInvestments = () => {
  return useContext(InvestmensContext)
}

export function InvestmentsProvider({ children }) {
  const [investments, setJobs]  = useState([]);

  useEffect(() => {
    db.collection("investments").onSnapshot((snapshot) => {
      setJobs(snapshot.docs.map((doc, index) => (
        {
          key:index,
          id: doc.id,
          data:doc.data()
        }
      )))
    })
  }, []);
  return (
    <InvestmensContext.Provider value={investments}>
      { children }
    </InvestmensContext.Provider>
  )
}

 
