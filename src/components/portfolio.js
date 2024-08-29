import React from "react";
import tatva from '../assets/tatva.png';

export default function Portfolio () {
    return (
        <>
        <div className="container" style={{fontFamily:'lora'}}>
            <br/><br/><br/>
            <h4>Portfolio</h4>
            <h1>Latest Projects</h1>
            <div className="row">
          <div className="col-12 d-flex flex-wrap">
            <div className="col-6">
              <div className="col-12 d-flex flex-wrap">
                <div className="col-6">
                    <br/><br/>
                <img src={tatva} style={{height:'225px'}} class="rounded mx-auto d-block"/>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div >    
        </>
    )
}