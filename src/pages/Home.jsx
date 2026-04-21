import heroImage from "../assets/hero.png";
import macbookImage from "../assets/macbook.jpg";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content hero-split">
          <div className="hero-text">
            <h1>
              Thiết bị công nghệ
              <br />
              chính hãng, giá tốt nhất
            </h1>
            <p>
              Chuyên cung cấp PC, Laptop, Linh kiện máy tính và phụ kiện gaming
              chất lượng cao
            </p>
            <button className="hero-btn">Khám phá ngay →</button>
          </div>

          <div className="hero-visual">
            <img src={heroImage} alt="Hero sản phẩm công nghệ" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container features-grid">
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div>
              <h3>Chính hãng 100%</h3>
              <p>Bảo hành toàn quốc</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🚚</div>
            <div>
              <h3>Giao hàng nhanh</h3>
              <p>Miễn phí từ 5 triệu</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <div>
              <h3>Giá tốt nhất</h3>
              <p>Cam kết hoàn tiền nếu rẻ hơn</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎧</div>
            <div>
              <h3>Hỗ trợ 24/7</h3>
              <p>Tư vấn nhiệt tình</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Sản phẩm nổi bật</h2>
              <p>Những sản phẩm được lựa chọn kỹ càng cho bạn</p>
            </div>
            <button className="view-all">Xem tất cả →</button>
          </div>

          <div className="product-grid three-cols">
            <div className="product-card">
              <div className="product-image">
                <span className="tag yellow">Bán chạy</span>
                <span className="tag pink second-tag">-7%</span>
                <img src={macbookImage} alt="MacBook Pro" />
              </div>
              <div className="product-info">
                <h3>MacBook Pro M1X 16 inch</h3>
                <p className="product-meta">Apple • Laptop</p>
                <div className="price-box">
                  <span className="price">49.000.000 ₫</span>
                  <span className="old-price">53.000.000 ₫</span>
                </div>
                <div className="product-actions">
                  <button className="detail-btn">Xem chi tiết</button>
                  <button className="cart-btn">🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <h2>Bạn cần tư vấn?</h2>
          <p>Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
          <button className="cta-btn">🎧 Liên hệ ngay: 1900-xxxx</button>
        </div>
      </section>
    </>
  );
}

export default Home;
