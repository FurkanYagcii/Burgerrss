import React from "react";
import Img from "./../img/Contact.jpg";

function Contact() {
  return (
    <div className="contact">
      <img className="contactImg" src={Img} alt="" />
      <div className="form-div">
        <h1 className="contact-h1">Bizimle iletişime Geçin</h1>
        <form className="form" action="">
          <label htmlFor="">Ad Soyad</label>
          <input
            className="formInputs"
            type="text"
            name=""
            id=""
            placeholder="Lütfen adınızı giriniz.."
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Lütfen emalinizi giriniz.."
            className="formInputs"
          />
          <label htmlFor="">Mesajınız</label>
          <textarea
            name=""
            id=""
            rows="4"
            placeholder="Lütfen mesajınızı giriniz.."
            className="formInputs"
          ></textarea>
          <button className="contact-btn">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
