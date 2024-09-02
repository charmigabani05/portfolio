import React from "react";
import image1 from '../assets/image1.png';

export default function About () {
    return(
        <>
        <div className="container" style={{fontFamily:'lora'}}>
        <br/>
        <center><h1>About Me</h1>
        <h2>Front-end Developer,Interned in <br/>Tatva Tech Infotech</h2></center>
        <div>
            <br/>
            <br/>
            <br/>
            <div className="row">
            <div className="col-12 d-flex flex-wrap">
            <div className="col-6" >
            <div className="col-12 d-flex flex-wrap">
            <div className="col-12">
            <img src={image1} height={500} class="rounded mx-auto d-block"></img>
            </div>
            </div>
            </div>
            <div className="col-6">
            <section className="py-4 py-xl-8 border-top border-light">
            <div className="container-overflow-hidden">
            <div className="row gy-4 gy-lg-0 justify-content-xt-between">
            <div className="col-12 col-md-4 col-lg-3 col-xl-2"style={{paddingLeft:'30px'}}>
            <div classname="widget">  
            <ul >
            <li class="list-group-item "><h1>01+</h1><br/><h4>Years Experience</h4></li>
            <li class="list-group-item mt-5"><h1>02+</h1><br/><h4>Projects</h4></li>
            </ul>  
            </div>
            </div> 
            </div>
            </div>
            </section>
            <hr/>
            <span> Email: charmigabani05@gmail.com<br/>Mobile:9537081185 &nbsp; Location:Surat,Gujrat,India</span>
            </div>
            </div>
            </div>
            </div>
            </div>
            </>
    )
    
}