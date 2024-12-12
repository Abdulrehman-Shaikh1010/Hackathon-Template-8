import React from 'react';
import Feauture from '../components/feauture';
import Mainsection from '../components/mainsection';
import Topcategory from '../components/topcategory';
import Newstyle from '../components/newstyle';
import OurProduct from '../components/ourproduct';
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='m-3'>
      <Mainsection/>
      <Feauture/>
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>
    </div>
  )
}
