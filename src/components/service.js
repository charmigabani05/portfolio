import React from "react";

export const ServiceData = [
  {
    title: 'Web Design',
    description: 'Web design is more than just aesthetics; it is about creating a seamless blend of functionality and beauty, where every element serves a purpose and every interaction feels natural.'
  },
  {
    title: 'Web Development',
    description: 'Designing the web is not just about creating beautiful interfaces; it is about crafting seamless user experiences that connect people with technology, turning complex challenges into elegant solutions.'
  },
  {
    title: 'Responsive Web Design',
    description: 'Crafting responsive web designs that adapt seamlessly to any device, ensuring a consistent and engaging user experience everywhere.'
  },
  {
    title: 'Website Maintenance',
    description: 'Ensuring your website runs smoothly and securely through meticulous maintenance, keeping it up-to-date and performing at its best.'
  }
];

export default function Service() {
  return (
    <>
      <div className="container" style={{ fontFamily: 'Lora' }}>
        <br /><br /><br />
        <center>
          <h4>Services</h4>
          <h1 style={{ paddingLeft: '100px', paddingRight: '100px' }}>
            To listen closely and reply well is the highest perfection we are able to attain in the art of conversation.
          </h1>
          </center>
        <div className="row" style={{textAlign:'center',marginRight:'90px'}}>
          {ServiceData.map((service, index) => (
            <div className="col-md-6" key={index} style={{ marginBottom: '20px' }}>
              <div className="card" style={{ width: '100%', backgroundColor: '#BEC6A0' }}>
                <div className="card-body" style={{ color: '#102C57' }}>
                  <h1 className="card-title" style={{ color: '#102C57' }}>{service.title}</h1>
                  <p className="card-text" style={{ color: '#102C57' }}>{service.description}</p>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}
