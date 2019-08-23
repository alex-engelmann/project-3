import Iframe from "react-iframe"
import React, { Component } from "react";
// import "./index.css";
// import "../../pages/contact/contact.css"
import "./contact.css";
import PageTitle from '../../components/Title'


class Contact extends React.Component {
  render() {
    return (
      <div className="contact-wrapper">
        <PageTitle title="Contact"></PageTitle>
        <div className="contact-container">
          <div className="smaller-container">
            <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSd2CJ2zsYwSF6ndw23-v6rt_ZNfU3GneBPI1J-lA8RgZgscNw/viewform?embedded=true"
              width="650px"
              height="753px"
              id="forms"
              className="myClassname"
              display="initial"
              position="relative" />
          </div>
        </div>
      </div>
    )

  }

}

export default Contact;







