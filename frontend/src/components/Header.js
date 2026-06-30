import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaQuestionCircle,
  FaInfoCircle,
  FaUser,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const isActive = (path) =>
    path === "/guide"
      ? location.pathname === "/guide" ||
        location.pathname.startsWith("/guide/")
      : location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logoxanh.png" alt="Logo" className="logo-image" />
          <div className="logo-text">
            <div className="logo-title">HỆ THỐNG QUẢN LÝ & TRUY XUẤT</div>
            <div className="logo-subtitle">HỒ SƠ BỆNH ÁN</div>
          </div>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className={`nav-link${isActive("/") ? " active" : ""}`}>
            <FaHome className="nav-icon" />
            <span>Trang chủ</span>
          </Link>
          <Link
            to="/verification"
            className={`nav-link${isActive("/verification") ? " active" : ""}`}
          >
            <FaSearch className="nav-icon" />
            <span>Tra cứu hồ sơ</span>
          </Link>
          <Link
            to="/guide"
            className={`nav-link${isActive("/guide") ? " active" : ""}`}
          >
            <FaQuestionCircle className="nav-icon" />
            <span>Hướng dẫn</span>
          </Link>
          <Link
            to="/introduction"
            className={`nav-link${isActive("/introduction") ? " active" : ""}`}
          >
            <FaInfoCircle className="nav-icon" />
            <span>Giới thiệu</span>
          </Link>
          <Link
            to="/news"
            className={`nav-link${isActive("/news") ? " active" : ""}`}
          >
            <FaInfoCircle className="nav-icon" />
            <span>Tin tức</span>
          </Link>
        </nav>

        <button className="btn-login" onClick={handleLogin}>
          <FaUser />
          <span>Đăng nhập</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
