import React from "react";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Service from "./service";
import img2 from '../assets/img2.png';


export default function Home () {
    return(
        <>
        <div className="ms-4" style={{fontFamily:'lora'}}>
            <br/><br/><br/><br/>
            <div className="row">
          <div className="col-12 d-flex flex-wrap">
            <div className="col-6">
              <div className="col-12 d-flex flex-wrap">
                <div className="col-6">
        <h3 style={{marginLeft: '65px'}}>Hello,</h3>
        <h1 style={{fontSize:'50px', marginLeft:'65px'}}>I'm Charmi Gabani <br/>
            Front-end Developer</h1>
        <h5  style={{marginLeft: '65px'}}>builds the front-end portion of websites</h5>
        <button type="button" class="btn btn-light" style={{marginLeft: '65px'}}>Download CV</button>
        </div>
        </div>
        </div>
        <div className="col-6">
        <img src={img2} style={{height:'400px'}} class="rounded mx-auto d-block"/>
        </div>
        </div>
        </div>

        <Portfolio/>
        <br/><br/>
        <About/>
        <Resume/>
        <Service/>
        </div>
        </> 
    )
}