import React, { memo } from "react";
import "./Footer.css";

const Footer = () => {
    return (

        <footer class="footer">
            <div className="topfooter">
                <div className="topcontainer">
                    <ul>
                        <li>CÂU HỎI THƯỜNG GẶP</li>
                        <li style={{ borderLeft: '1px solid #010000', borderRight: '1px solid #010000', padding: '0 45px' }}>ĐIỀU KHOẢN</li>
                        <li>GÓP Ý</li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="footer-column">
                    <h3>CỔNG THÔNG TIN ĐIỆN TỬ</h3>
                    <p>Số giấy phép: 3438/GP-TTĐT ngày 04/07/2016</p>
                    <p>Chịu trách nhiệm chính: Ông Nguyễn Điệp Tùng – Tổng Giám đốc</p>
                    <p>52 đường Lạc Long Quân, phường Bưởi, quận Tây Hồ, TP. Hà Nội</p>
                    <p>19006446 | Fax: 024 3773 9058</p>
                    <p>fptsecurities@fpts.com.vn</p>
                </div>
                <div class="footer-column">
                    <h3>Chi nhánh TP. Hồ Chí Minh</h3>
                    <p>Tầng 3, Tòa nhà 136-138 Lê Thị Hồng Gấm, phường Nguyễn Thái Bình, Quận 1, TP.Hồ Chí Minh</p>
                    <p>19006446 | Fax: 028 6291 0607</p>
                    <p>fptsecurities@fpts.com.vn</p>
                </div>
                <div class="footer-column">
                    <h3>Chi nhánh Đà Nẵng</h3>
                    <p>Số 100 Quang Trung, phường Thạch Thang, quận Hải Châu, TP Đà Nẵng</p>
                    <p>19006446 | Fax: 0236 3553 888</p>
                    <p>fptsecurities@fpts.com.vn</p>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2019 Công ty Cổ phần Chứng khoán FPT
            </div>
        </footer>
    );
};

export default Footer;
