import React, { useState } from 'react'
import "./header.css"
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const [menu,showMenu]=useState(false)

    const getMenuStyles = (menu)=>{
        if(document.documentElement.clientWidth <= 800){
            return{right: !menu && "-100%"}
        }
    }



  return (
    <section className="h-wrapper">
        <div className=" flexCenter innerWidth paddings h-container">
            <img src="./logo.png" alt="logo" width={100} />
        {/* vgti xarej safe miyy mizni menu bste mishe*/}
        <OutsideClickHandler onOutsideClick={()=>{
            showMenu(false)
        }}>


        <div className="h-menu flexCenter"
        style={
            getMenuStyles(menu)
        }>
            <a href="">Recidencies</a>
                <a href="">Our Value</a>
            <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='Button'>
                    <a href="">Contact</a>
                </button>
            </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={()=>showMenu((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
        </div>
        </div>
        
    </section>
  )
}

export default Header