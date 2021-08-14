import { Spinner } from '@paljs/ui';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import { db } from '../../firebase/firebase';
import Card from './flexible-card.component';

function BadgeCard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    return () => getData();
  }, []);
  const getData = async () => {
    const unsub = await db.collection('journey').get();
    setData(unsub.docs.map(item => item.data()));
    setLoading(false);
  }
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        data.map(({ url, title, desc }, i) => (
          <Card
            key={i}
            image={url}
            title={title}
            desc={`
            <span>
             ${desc}
            </span>
          `}
            journey
            loader
            about
            primary
          />
        ))
      ) : (
        <p>Belum ada data</p>
      )}
    </Fragment>
  );
}

export default BadgeCard
