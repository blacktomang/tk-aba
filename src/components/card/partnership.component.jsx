import Image from 'next/image';
import React from 'react';
import { Action, CardBody, CardPartnership, Label } from './card.styles';
import { useRouter } from 'next/router';
import { myLoader } from '../../ImageLoader/loader';
function PartnerShip({ id, status, title, pembiayaan, volume_distribusi, durasi_siklus, profit, imageURL }) {
  const star = (element) => element === '*';
  const router = useRouter();
  return (
    <>
      <CardPartnership
        width="283px"
        height="376px"
        label={status}
        onClick={() =>
          !(title.indexOf('*') > -1) ? router.push(`/fsc-detail/${id}`) : alert('Card is still coming soon')
        }
      >
        <div className="headerCard">
          <Image src={imageURL} alt="s" width={200} height={100} layout="responsive" loader={myLoader} />
          <Label label={status}>{status}</Label>
        </div>
        <h2 className="title">{title}</h2>
        <CardBody>
          <div className="profit">
            <p>Estimasi Profit</p>
            <h4>{profit} % per siklus</h4>
          </div>
          <div className="distribusi">
            <p>Volume distribusi</p>
            <h4>{volume_distribusi} ton / bulan</h4>
          </div>
          <div className="jangkawaktu">
            <p>Durasi Siklus</p>
            <h4>{durasi_siklus} bulan</h4>
          </div>
          <div className="pembiayaan">
            <p>Nilai Pembiayaan</p>
            <h4>{pembiayaan}juta</h4>
          </div>
          <div className="action">
            <Action label={status}>Pelajari lebih lanjut</Action>
          </div>
        </CardBody>
      </CardPartnership>
    </>
  );
}

export default PartnerShip;
