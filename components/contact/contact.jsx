import React from 'react'
import "./contact.css"
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"


const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings flexCenter innerWidth c-container">
    <div className="flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact Us</span>
            <span className='secondaryText'>we are always ready to help by providing the best services 
                we beelive a good place to live can make your life better
            </span>

        <div className="flexColStart contactModes">
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icon">
                        <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className='primaryText'>Call</span>
                        <span className='secondaryText'>023 656 543 21</span>
                        
                    </div>
                </div>
                <div className="flexCenter Button">
                    Call now
                      </div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className='primaryText'>Chat</span>
                        <span className='secondaryText'>023 656 543 21</span>
                        
                    </div>
                </div>
                <div className="flexCenter Button">
                    Chat now
                      </div>
                </div>
                
        </div>
        
        <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className='primaryText'>Vedio Call</span>
                        <span className='secondaryText'>023 656 543 21</span>
                        
                    </div>
                </div>
                <div className="flexCenter Button">
                    Vedio Call now
                      </div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className='primaryText'>Message</span>
                        <span className='secondaryText'>023 656 543 21</span>
                        
                    </div>
                </div>
                <div className="flexCenter Button">
                    Message now
                      </div>
                </div>
                
        </div>
    </div>
    </div>
    <div className="c-right">
        <div className="img-container">
            <img src="./contact.jpg" alt="" />
        </div>
    </div>
        </div>
    </section>
  )
}

export default Contact