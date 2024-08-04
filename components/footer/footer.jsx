import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className='f-wrapper'>
    <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120} />
            <span className="secondaryText">
                Our vision is make all people <br />
                the place ro live for them.
            </span>
        </div>
        <div className="flexColStart f-right">
            <span className='primaryText'>Informations</span>
            <span className='secondaryText'>134 NewYork, dl 3451, USA</span>

            <div className="flexCenter secondaryText f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Products</span>
                <span>About Us</span>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer