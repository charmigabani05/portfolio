import React from "react";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Service from "./service";


export default function Home () {
    return(
        <>
        <div className="ms-4" style={{fontFamily:'lora'}}>
            <br/><br/><br/><br/>
        <h3 style={{marginLeft: '65px'}}>Hello,</h3>
        <h1 style={{fontSize:'50px', marginLeft:'65px'}}>I'm Charmi Gabani <br/>
            Front-end Developer</h1>
        <h5  style={{marginLeft: '65px'}}>builds the front-end portion of websites</h5>
         
        <Portfolio/>
        <br/><br/>
        <About/>
        <Resume/>
        <Service/>
        </div>
        </> 
    )
}