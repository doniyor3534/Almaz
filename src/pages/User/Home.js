import { Footer } from '../../componet/userComponet/AllComponet'
import React from 'react'
import { Contact, ContactUs, HeaderNav } from '../../componet/userComponet/AllComponet'
import { SliderUstara } from '../../componet/userComponet/SliderUstara'
import YakkaSlider from '../../componet/userComponet/YakkaSlider'
import ModelThree from '../../componet/ModelThree'

const Home = () => {
  return (
    <div className='itemHome'>
      <ModelThree/>
      <HeaderNav/>
      <Contact/>
      <SliderUstara/>
      <YakkaSlider/>
      <br />
      <br />
      <br />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home