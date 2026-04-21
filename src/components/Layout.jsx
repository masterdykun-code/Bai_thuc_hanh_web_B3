import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-content">
          <p>Miễn phí vận chuyển cho đơn hàng trên 5 triệu đồng</p>
          <p>Hotline: 1900-xxxx</p>
        </div>
      </div>

      <header className="header">
        <div className="container header-main">
          <Link className="logo" to="/">
            <div className="logo-box">T</div>
            <span>TechStore</span>
          </Link>

          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <span className="search-icon">🔍</span>
          </div>

          <div className="header-actions">
            <div className="cart">
              🛒
              <span className="cart-count">3</span>
            </div>
            <button className="account-btn">
              <span>👤</span>
              <span>Tài khoản</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-list">
          {/* Sử dụng thẻ Link thay cho thẻ a để chuyển trang mà không bị reload */}
          <Link to="/">Trang chủ</Link>
          <Link to="/about-us">Giới thiệu</Link>
          <Link to="/products">Tất cả sản phẩm</Link>
          <Link to="#">PC/Desktop</Link>
          <Link to="#">Laptop</Link>
        </div>
      </nav>

      {/* Outlet là nơi nội dung của Home, AboutUs sẽ được render vào */}
      <main>
        <Outlet />
      </main>

      <footer className="footer">
        {/* Giữ nguyên toàn bộ code phần <footer className="footer"> của bạn ở đây */}
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo footer-logo">
              <div className="logo-box">T</div>
              <span>TechStore</span>
            </div>
            <p className="footer-desc">
              Chuyên cung cấp thiết bị công nghệ và linh kiện máy tính chính hãng, uy tín hàng đầu Việt Nam.
            </p>
            <div className="socials">
              <a href="#">f</a>
              <a href="#">ig</a>
              <a href="#">yt</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><Link to="/about-us">Về chúng tôi</Link></li>
              <li><Link to="#">Sản phẩm</Link></li>
              <li><Link to="#">Tài khoản</Link></li>
              <li><Link to="#">Liên hệ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Danh mục</h3>
            <ul>
              <li><Link to="#">PC/Desktop</Link></li>
              <li><Link to="#">Laptop</Link></li>
              <li><Link to="#">Chuột</Link></li>
              <li><Link to="#">Bàn phím</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Liên hệ</h3>
            <ul className="contact-list">
              <li>📍 123 Đường ABC, Quận 1, TP.HCM</li>
              <li>📞 1900-xxxx</li>
              <li>✉️ support@techstore.com</li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;