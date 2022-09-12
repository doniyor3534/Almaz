import React from 'react'
import Layout from '../../Layout/Layout'
import GaleryCrud from '../../componet/adminComponet/GaleryCrud'
const Galery = () => {
  return (
    <div>
      <Layout content={<GaleryCrud/>}/>
    </div>
  )
}

export default Galery