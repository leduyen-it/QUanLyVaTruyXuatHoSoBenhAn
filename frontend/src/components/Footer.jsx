import { Link } from 'react-router-dom'
import { 
  FaShieldAlt, 
  FaFacebook, 
  FaYoutube, 
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle
} 
from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <FaShieldAlt />
                </div>
                <div>
                  <div className="footer-logo-title">HỆ THỐNG QUẢN LÝ & TRUY XUẤT</div>
                  <div className="footer-logo-subtitle">HỒ SƠ BỆNH ÁN</div>
                </div>
              </div>
              <p className="footer-brand-text">Hệ thống an toàn giúp quản lý, truy xuất và xác thực văn bằng nhanh chóng với độ tin cậy cao.</p>
            </div>

            {/* Links 1 */}
            <div className="footer-col">
              <h4 className="footer-col-title">LIÊN KẾT NHANH</h4>
              <ul className="footer-links">
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/verify">Xác thực văn bằng</Link></li>
                <li><Link to="/guide">Hướng dẫn</Link></li>
                <li><Link to="/about">Giới thiệu</Link></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="footer-col">
              <h4 className="footer-col-title">HỖ TRỢ</h4>
              <ul className="footer-links">
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><Link to="/guide">Hướng dẫn sử dụng</Link></li>
                <li><a href="#">Liên hệ hỗ trợ</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
              </ul>
            </div>

            {/* Social & Blockchain Badge */}
            <div className="footer-col">
              <h4 className="footer-col-title">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className="footer-socials">
                <a href="#" className="social-btn facebook" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-btn youtube" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" className="social-btn linkedin" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-btn email" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
              <div className="blockchain-badge">
                <FaCheckCircle className="badge-icon" />
                <span>Đã xác thực bởi<br /><strong>Blockchain</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2026, Bản quyền thuộc về hệ thống.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
