// import landingPage from './landingPage'
import './landingPage.css'
import React from 'react'
import TagManager from 'react-gtm-module'
import Logo from './logo/Padhakku White.png'
import Footer from './components/Footer'
import {FaWhatsapp} from "react-icons/fa"
import img from './logo/Padhakku White.png'

const tagManagerArgs = {
  gtmId: 'GTM-KT2GFP9'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div className='container'>
      <div className='logo'><img src={Logo} alt='...' /></div>
      <div className='poster'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/Marketing+landing+Pages/Mentor+Page.jpg' alt='...' /></div>
      <div className='content'>
        {/* <p>Register for a free 15 minutes  Mentoring Session via experts from ZS Associates, O9 Solutions, Razorpay, United Airlines, Microsoft etc.</p> */}
        <img className="img1" src='https://padhakku.s3.ap-south-1.amazonaws.com/website+banners/Resume.gif' />
        <img className="img2" src='https://padhakku.s3.ap-south-1.amazonaws.com/website+banners/Resume.gif' />
        <img className="img3" src='https://padhakku.s3.ap-south-1.amazonaws.com/website+banners/Resume.gif' />
      </div>
      <div className='flex'>  
        <a className='mentor_button' href='https://bit.ly/mentoring_mpl'><FaWhatsapp className='wa-icon' style={{fontSize: '18px'}}/> WHATSAPP US</a>
        </div>
      <Footer className='Footer' />
    </div>
  );
}

export default App;