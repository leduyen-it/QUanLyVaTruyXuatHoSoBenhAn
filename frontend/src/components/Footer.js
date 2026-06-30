import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logotrang.png" alt="Logo" className="footer-logo-image" />
              <div className="footer-logo-text">
                <div className="footer-logo-title">
                  HỆ THỐNG QUẢN LÝ & TRUY XUẤT
                </div>
                <div className="footer-logo-subtitle">
                  HỒ SƠ BỆNH ÁN
                </div>
              </div>
            </div>
            <p className="footer-copyright">
              © 2026. Bản quyền thuộc về Hệ thống.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">LIÊN KẾT NHANH</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/verification">Tra cứu hồ sơ</Link>
              </li>
              <li>
                <Link to="/guide">Hướng dẫn sử dụng</Link>
              </li>
              <li>
                <Link to="/introduction">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/news">Tin tức</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">HỖ TRỢ</h3>
            <ul className="footer-links">
              <li>
                <Link to="/faq">Câu hỏi thường gặp</Link>
              </li>
              <li>
                <Link to="/guide">Hướng dẫn sử dụng</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ hỗ trợ</Link>
              </li>
              <li>
                <Link to="/privacy">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">KẾT NỐI VỚI CHÚNG TÔI</h3>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="blockchain-badge">
              <FaCheckCircle />
              <div>
                <div className="badge-title">Đã xác thực bởi</div>
                <div className="badge-subtitle">Blockchain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
