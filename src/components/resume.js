import React from "react";
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript .png'
import reactjs from '../assets/reactjs.png';
import bootstrap from '../assets/bootstrap.png';

export default function Resume() {
    return (
        <>
            <div className="container" style={{ fontFamily: 'lora', paddingLeft: '20px' }}>
                <br /><br /><br /><br /><br />
                <h4>Resume</h4>
                <h1>Keen, Hard Working, Reliable <br />And Excellent Time Keeper.</h1>
                <br /><br />
                <div className="row">
                    <div className="col-12 d-flex flex-wrap">
                        <div className="col-6">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-6">
                                    <center><h1>Education</h1>
                                        <br /> <br />
                                        <h5>2020-2021</h5>
                                        <h3>Gajera Vidhya Bhavan, Katargam, Surat</h3>
                                        <h5>S.S.C</h5>
                                        <br /> <br />
                                        <h5>2022-2023</h5>
                                        <h3>Gajera Vidhya Bhavan, Katargam, Surat</h3>
                                        <h5>H.S.C</h5>
                                        <br /> <br />
                                        <h5>2023-2024</h5>
                                        <h3>Vanita Vishram Women's University</h3>
                                        <h5>B.C.A</h5>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <center><h1>Experience</h1>
                                <h5>2023 Aug-Present</h5>
                                <br />
                                <h3>Front-end Developer <br />Interned</h3>
                                <h5>Tatva Tech</h5>
                            </center>
                        </div>
                    </div>
                </div>
                <br /> <br /> <br />
                <hr style={{
                    border: 'none',
                    borderTop: '3px solid #006989', // Line color set to your preferred font color
                    width: '50%', // Adjust width to your preference
                    margin: '0 auto', // Centers the line
                    height: '0px', // Ensures the line is flat
                }} />
                <br /> <br /> <br />
                <section className="py-4 py-md-5 py-xl-8">
                    <div className="container-overflow-hidden">
                        <div className="row gy-4 gy-lg-0 justify-content-center">
                            <div className="col-12 col-md-4 col-lg-2 text-center">
                                <div className="widget">
                                    <img src={html} alt="HTML Icon" /><br /><br />
                                    <h5>HTML/HTML5</h5>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 text-center">
                                <div className="widget">
                                    <img src={css} alt="CSS Icon" /><br /><br />
                                    <h5>CSS</h5>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 text-center">
                                <div className="widget">
                                    <img src={javascript} alt="JavaScript Icon" /><br /><br />
                                    <h5>JavaScript</h5>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 text-center">
                                <div className="widget">
                                    <img src={reactjs} alt="React.js Icon" /><br /><br />
                                    <h5>React.js</h5>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 text-center">
                                <div className="widget">
                                    <img src={bootstrap} alt="Bootstrap Icon" /><br /><br />
                                    <h5>Bootstrap</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}