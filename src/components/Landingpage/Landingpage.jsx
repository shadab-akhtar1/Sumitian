import React from 'react';
import Navbar from '../Navbar/Navbar';
import Topsection from '../Topsection/Topsection';
import Secondsection from '../Secondsection/Secondsection';
import Thirdsection from '../Thirdsection/Thirdsection';
import Fourthsection from '../Fourthsection/Fourthsection';
import Fifthsection from '../Fifthsection/Fifthsection';
import Sixthsection from '../Sixthsection/Sixthsection';
import Footer from '../Footer/Footer';
import Seventhsection from '../Seventhsection/Seventhsection';
import Eightsection from '../Eightsection/Eightsection';

export const Landingpage = () => {
  return (
    <>
    
    <div className=''><Navbar/></div>
    
    <Topsection/>
    
    <Secondsection/>
    <Thirdsection/>
    <Fourthsection/>
    <Fifthsection/>
    <Sixthsection/>
    <Seventhsection/>
    <Eightsection/>
    <Footer/>
    
    

  
    </>
  )
}
export default Landingpage