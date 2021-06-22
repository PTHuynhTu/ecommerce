import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contacts = () => {
  return (
    <div className="container mt-5">
      <h4>
        <FontAwesomeIcon className="ml-2 mr-2" icon={faInfoCircle} />
        Liên hệ
      </h4>
      <br />
      <p>
        <b>Điện thoại:</b> (028) 345 678
        <br />
        <b>E-mail:</b> huynhtu.abcd@gmail.com
      </p>
      <br />
      <h6>
        <b>Giờ làm việc</b>
      </h6>
      <p>
        Digital store làm việc từ 8:00 đến 20:00 xuyên trưa kể cả thứ bảy, chủ
        nhật <br />
        Đơn hàng online được xác nhận 24/7.
      </p>
      <br />
      <h6>
        <b>Vận chuyển</b>
      </h6>
      <p>Chuyển hàng thông qua chuyển phát nhanh.</p>
    </div>
  );
};
export default Contacts;
