import React, { useState } from 'react'
import { Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
 } from 'react-accessible-accordion'
 import {MdOutlineArrowDropDown} from "react-icons/md"
 import "./values.css"
 import data from "../../src/utils/accordion"

const Values = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="img-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value we  give to you</span>
                    <span className='secondaryText'>we always ready to help by providing the best services for you.
                        <br />
                        we believe a good blace to live can make your life better
                    </span>
                    <Accordion allowMultipleExpanded={false}
                    preExpanded={[0]}
                    className='accordion'>
                       {

                        data.map((item,i)=>{
                            const [className,setClassName]=useState(null)

                          return(
                              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionbutton'>
                                        
                                        <AccordionItemState>

                                            {({expanded})=> expanded ? 
                                            setClassName("expanded"):
                                            setClassName("collapsed")}

                                        </AccordionItemState>
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText ppp">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>

                            </AccordionItem>
                        );
                        })}
                    </Accordion>
                </div>
            
        </div>
    </section>
  )
}

export default Values