import React, { useState } from "react";
import { FaMapLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    projectDetails: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
   };

  return (
    <>
      <div style={{ fontFamily: 'Lora', backgroundColor: '#102C57', color: '#BEC6A0', padding: '20px' }}>
        <div className="row">
          <div className="col-12 d-flex flex-wrap">
            <div className="col-6">
              <div className="col-12 d-flex flex-wrap">
                <div className="col-12">
                  <br /><br />
                  <center><h1 style={{ color: '#BEC6A0' }}>Let's Do Something Unique</h1></center>
                </div>
                <div className="col-12">
                  <br /><br />
                  <center>
                    <h2 style={{ color: '#BEC6A0' }}><FaMapLocationDot /> Address</h2>
                    <h5 style={{ color: '#BEC6A0' }}>Katargam, Surat</h5>
                  </center>
                </div>
                <div className="col-12">
                  <br />
                  <center>
                    <h2 style={{ color: '#BEC6A0' }}><FaSquarePhone /> Phone</h2>
                    <h5 style={{ color: '#BEC6A0' }}> +919537081185</h5>
                  </center>
                </div>
                <div className="col-12">
                  <br />
                  <center>
                    <h2 style={{ color: '#BEC6A0' }}><MdEmail /> Email</h2>
                    <h5 style={{ color: '#BEC6A0' }}>charmigabani05@gmail.com</h5>
                  </center>
                </div>
                <div className="col-12">
                  <br /><br /><br /><br /><br /><br /><br /><br />
                  <center style={{ color: '#BEC6A0' }}>Copyright © 2024 Charmi Gabani. All rights reserved.</center>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="col-12">
                <br /><br />
                <h3 style={{ color: '#BEC6A0' }}>Hey, how about we catch up over a chat?</h3>
              </div>
              <div className="col-6">
                <br />
                <p style={{ color: '#BEC6A0' }}>Full Name*</p>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  style={{ backgroundColor: '#102C57', color: '#BEC6A0', borderColor: '#BEC6A0' }}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <br />
                <p style={{ color: '#BEC6A0' }}>Email*</p>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  style={{ backgroundColor: '#102C57', color: '#BEC6A0', borderColor: '#BEC6A0' }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <br />
                <p style={{ color: '#BEC6A0' }}>Mobile*</p>
                <input
                  type="number"
                  name="mobile"
                  className="form-control"
                  style={{ backgroundColor: '#102C57', color: '#BEC6A0', borderColor: '#BEC6A0' }}
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <br />
                <p style={{ color: '#BEC6A0' }}>Give Project Details*</p>
                <textarea
                  name="projectDetails"
                  className="form-control"
                  style={{ height: "100px", backgroundColor: '#102C57', color: '#BEC6A0', borderColor: '#BEC6A0' }}
                  value={formData.projectDetails}
                  onChange={handleChange}
                />
                <br />
                <button
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: '#BEC6A0', color: '#102C57' }}
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
