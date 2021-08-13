import Image from 'next/image'
import React from 'react'
import { myLoader } from '../../ImageLoader/loader'
import { DetailProduct } from './banner.styles'

function SpecialBanner({detail, status}) {
  return (
    <>
      <DetailProduct>
            {detail &&
              detail.map((item,i)  => (
                <Image key={i} src={item.url} width={500} height={500} loader={ myLoader }/>
              ))
            }
            <h6 label={ status} >{ status === 'fundraising' || status === 'Fundraising'?'On Progress':'Funded'}</h6>
          </DetailProduct>
    </>
  )
}

export default SpecialBanner
