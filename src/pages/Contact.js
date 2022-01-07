import React from "react";
import Cbd from "../images/cbd_contact.jpg";
import { HiPhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div className="contact">
      <h1>Dane kontaktowe</h1>
      <div className="contact__container">
        <img src={Cbd} alt="" />
        <div className="contact__organizer">
          <div>
            <p>CBDradzymin.pl</p>
            <p>FPH Aleksander Alicja Lewandowska</p>
            <p>ul. Norwida 22a</p>
            <p>05-250 Radzymin</p>
            <p>NIP: 125-003-99-43</p>
          </div>
          <p>
            <span>
              <HiPhone />
            </span>{" "}
            601 877 700
          </p>
          <p>
            <span>
              <AiOutlineMail />
            </span>
            aleksander@onet.pl
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
