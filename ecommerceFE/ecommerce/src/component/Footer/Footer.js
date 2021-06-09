import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceBook } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer p-5 bg-black text-green ">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="footer-left">
            <h3>Digital</h3>
            <p>(028) 345 678</p>
            <br />
            <p>Từ 8:00 đến 20:00 kể cả thứ bảy, chủ nhật, ngày lễ</p>
          </div>
          <div className="footer-right"></div>
        </div>
        <div className="mx-auto" style={{ width: "200px" }}>
          <p>© Copy right tupth</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
