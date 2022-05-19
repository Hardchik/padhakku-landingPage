import './landingPage.css'
import React from 'react'

function landingPage() {
    return (
      <div>
        <div className='logo'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/website_icon_logos/Padhakku+Blue.png' alt='...' /></div>
        <div className='poster'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/website+banners/Resume.gif' alt='...' /></div>
        <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        <div className='button'><a href='https://www.google.com/'>CLICK HERE</a></div>
      </div>
    );
  }
  
  export default landingPage;