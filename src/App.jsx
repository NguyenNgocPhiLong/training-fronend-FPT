import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  const [selectedItem, setSelectedItem] = useState('TRANG CHỦ');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: '../src/assets/Images/đn-trường-phái-đầu-tư-theo-phân-tích-kỹ-thuật.png',
    },
    {
      id: 2,
      image: '../src/assets/Images/giảm-phí-giao-dịch-chủ-động-tháng-72024.png',
    },
    {
      id: 3,
      image: '../src/assets/Images/đọc-hiểu-báo-cáo-tài-chính-cho-nhà-đầu-tư.png',
    },
    {
      id: 4,
      image: '../src/assets/Images/siêu-khuyến-mại-cho-khách-hàng-mở-mới-tài-khoản-1.png',
    }
  ];
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Dọn dẹp interval khi component bị gỡ bỏ
  }, []);

  return (
    <div className='home'>
      <div className="topsection1">
        <div className="row">
          <div className="left">
            <span className="hotline-label">HOTLINE :</span>
            <span className="hotline-number">1900 6446</span>
          </div>
          <div className="right">
            <img src="/src/assets/Images/icon-EN.png" alt="Hình ảnh ở bên phải" />
          </div>
        </div>
      </div>
      <div className="topsection2">
        <div className="header2">
          <img src="/src/assets/Images/logo_ngang.png" alt="FPT Securities" />
          <span className="tagline">Nơi bạn đặt niềm tin</span>
          <div className="search">
            <input type="text" placeholder="Tìm theo tên hoặc mã CK" />
          </div>
        </div>
      </div>
      <div className="topmenu">
        <div className="topcontainer">
          <ul>
            {['TRANG CHỦ', 'GIAO DỊCH TRỰC TUYẾN', 'SẢN PHẨM DỊCH VỤ', 'CƠ HỘI NGHỀ NGHIỆP', 'HỖ TRỢ KHÁCH HÀNG', 'QUAN HỆ CỔ ĐÔNG', 'VỀ FPTS'].map(item => (
              <li
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                className={selectedItem === item ? 'active' : ''}
              >
                <a
                  href="#"
                  className={selectedItem === item ? 'active' : ''}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </a>
                {item === 'GIAO DỊCH TRỰC TUYẾN' && hoveredItem === item && (
                  <ul className="dropdown-menu" style={{ position: 'absolute', width: 600, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                      <li style={{ margin: 0 }}>
                        <a className="dropdown-item" href="https://accounts.fpts.com.vn/Login?href=eztrade" target="_blank" rel="noopener noreferrer">
                          Giao dịch CK cơ sở
                        </a>
                      </li>
                      {['Giao dịch CK phái sinh', 'Đặt lệnh điều kiện', 'Thực hiện quyền', 'Lưu ký chứng khoán', 'Ứng trước tổ tức'].map((subItem, index) => (
                        <li style={{ margin: 0 }} key={index}>
                          <a className="dropdown-item" href={subItem}>{subItem}</a>
                        </li>
                      ))}
                    </div>
                    <div style={{ flex: 1 }}>
                      {['Cầm cố chứng khoán', 'Quản lý HĐ Ký quỹ', 'Quản lý tài sản', 'Tra cứu phí lưu ký', 'Tra cứu chứng quyền', 'Chuyển tiền ngân hàng '].map((subItem, index) => (
                        <li style={{ margin: 0 }} key={index}>
                          <a className="dropdown-item" href={subItem}>{subItem}</a>
                        </li>
                      ))}
                    </div>
                    <div style={{ flex: 1 }}>
                      {['Chuyển tiền ký quỹ CKPS', 'Bảng giá chứng khoán', 'Bảng giá HNX Pro', 'Phân tích kỹ thuật', 'Thông tin doanh nghiệp'].map((subItem, index) => (
                        <li style={{ margin: 0 }} key={index}>
                          <a className="dropdown-item" href={subItem}>{subItem}</a>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
                {item === 'SẢN PHẨM DỊCH VỤ' && hoveredItem === item && (
                  <ul className="dropdown-menu" style={{ position: 'absolute', width: 200, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                      {['Giao dịch chứng khoán', 'Tư vấn doanh nghiệp'].map((subItem, index) => (
                        <li style={{ margin: 0 }} key={index}>
                          <a className="dropdown-item" href={subItem}>{subItem}</a>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="slide-container" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            style={{
              display: currentSlide === index ? 'block' : 'none',
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={currentSlide === index ? 'active' : ''}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      {/* Other components and sections */}

      <div className="thumbnail">
        <div className="thumbnail-container">
          <div style={{ borderLeft: 'none' }} className="box">
            <div className="content">
              <img src="/src/assets/Images/icon-logo1.png" alt="Image" />
              <p> giao dịch trực tuyến </p>
              <i> Dành cho khách hàng đã có tài khoản </i>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <img src="/src/assets/Images/icon-logo2.png" alt="Image" />
              <p> mở tài khoản</p>
              <i> dành cho khách hàng chưa có tài khoản </i>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <img src="/src/assets/Images/icon-logo3.png" alt="Image" />
              <p>tư vấn đầu tư</p>
              <i>Hỗ trợ khách hàng</i>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <img src="/src/assets/Images/icon-logo4.png" alt="Image" />
              <p>tư vấn doanh nghiệp </p>
              <i>dành cho khách hàng doanh nghiệp</i>
            </div>
          </div>
        </div>
      </div>
      <div className="maincontent">
        <div className="maincontent-container">
          <div className="box1">
            <ul className="ul-bullet">
              <li>
                <p className="contactHoline">
                  Gọi tới Tổng đài
                  <a href=""> 1900 6446</a>
                </p>
                <p className="contactHoline"> để được hỗ trợ </p>
              </li>
              <li>
                <p className="where"> Dịch vụ khách hàng, tài khoản </p>
                <p className="contactnumber"> Nhấn phím 1</p>
              </li>
              <li>
                <p className="where"> Thông tin nộp, rút tiền </p>
                <p className="contactnumber"> Nhấn phím 2</p>
              </li>
              <li>
                <p className="where"> Đặt lệnh, tư vấn đầu tư </p>
                <p className="contactnumber"> Nhấn phím 3</p>
              </li>
              <li>
                <p className="where"> Lưu ký, quản lý cổ đông </p>
                <p className="contactnumber"> Nhấn phím 4</p>
              </li>
              <li>
                <p className="where"> Khách hàng gọi cho FPTS từ nước ngoài </p>
                <p className="contactnumber"> +84 24 73073889</p>
              </li>
              <li
                style={{
                  display: "flex",
                  marginTop: 18,
                  paddingBottom: 18,
                  alignItems: "center",
                  borderBottom: 0,
                }}
              >
                <p
                  className="where"
                  style={{ marginTop: 0, whiteSpace: "nowrap" }}
                >
                  Kết nối với FPTS
                </p>
                <div className="item-social">
                  <div className="item-fb"></div>
                  <div className="item-yt"></div>
                  <div className="item-zl"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="box2">
            <div class="ezMobileTrading">
              <span class="ez">Ez</span>
              <span class="mobileTrading">MobileTrading</span>
            </div>
            <div className="exmobiletrading">
              <img src="/src/assets/Images/ezmobile_vn_2.jpg" alt="" />
            </div>
            <div className="dowloadapp">
              <p style={{ color: "#646464", textAlign: 'center', paddingTop: "20px" }}>TẢI & CÀI ĐẶT</p>
              <div className="dowload-row">
                <div className="dlr1">
                  <img src="/src/assets/Images/icon-gooleplay.png" alt="Google Play Icon" />
                </div>
                <div className="dlr2">
                  <img src="/src/assets/Images/icon-appStore.png" alt="App Store Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="tab">
              <div className="tab1"><p>FPTS <br /> thông báo</p></div>
              <div className="tab2"><p>FPTS <br /> công bố thông tin</p></div>
              <div className="tab3"><p>Tin Tức</p></div>
              <div className="tab4"><p>IPO, đấu giá,<br />chào mua</p></div>
            </div>
            <div className="tabcontent">
              <ul>
                <li>
                  <a href="https://fpts.com.vn/ve-fpts/thong-bao-tu-fpts/?id=1399234">
                    <h3 className="menutab-title">
                      FPTS thông báo nâng cấp hệ thống từ 17h00 ngày 26/07/2024 đến 19h00 ngày 28/07/2024
                    </h3>
                    <p className="nemutab-content">
                      Công ty Cổ phần Chứng khoán FPT (FPTS) trân trọng thông báo Công ty sẽ tiến hành nâng cấp hệ thống trong khoảng
                      thời gian từ 17h00 ngày 26/07/2024 đến 19h00 ngày 28/07/2024.
                    </p>
                  </a>
                  <p className="menutab-date">
                    26/7/2024 13: 56
                  </p>
                </li>
                <li>
                  <a href="">
                    <h3 className="menutab-title">
                      Yêu cầu cập nhật thông tin Căn cước công dân/Căn cước để chuẩn hóa dữ liệu nhà đầu tư
                    </h3>
                    <p className="nemutab-content">
                      Theo công văn số 4501/UBCK-CNTT của Ủy ban Chứng khoán Nhà nước ngày 19/07/2024 về việc rà soát,
                      chuẩn hóa dữ liệu nhà đầu tư, kể từ ngày 01/10/2024, để đảm bảo nguyên tắc giao dịch điện tử trên thị trường chứng
                    </p>
                  </a>
                  <p className="menutab-date">
                    25/7/2024 09: 08
                  </p>
                </li>
                <li>
                  <a href="">
                    <h3 className="menutab-title">
                      CTCP Chứng khoán FPT tăng lãi suất EzSaving
                    </h3>
                    <p className="nemutab-content">
                      Công ty Cổ phần Chứng khoán FPT (FPTS) thông báo tăng lãi suất FPTS vay tiền trên tài khoản
                      chứng khoán của nhà đầu tư EzSaving, áp dụng từ ngày 01/08/2024.
                    </p>
                  </a>
                  <p className="menutab-date">
                    23/7/2024 16: 30
                  </p>
                </li>
              </ul>
              <div className="btn btn1 btn2">XEM TẤT CẢ</div>
            </div>
          </div>
        </div>
      </div>

      <section className="indext">
        <div className="fix-container">
          <div className="owl-item-active" style={{ width: '190px' }}>
            <div className="name-index">
              <span>VNXALL  </span>
              <span className="font-yellow">0</span>
            </div>
            <div className="font-yellow">0-0%</div>
          </div>
          <div className="owl-item-active" style={{ width: '190px' }}>
            <div className="name-index">
              <span>VN-Index   </span>
              <span className="font-yellow" >0</span>
            </div>
            <div className="font-yellow" >0-0%</div>
          </div>
          <div className="owl-item-active" style={{ width: '190px' }}>
            <div className="name-index">
              <span>VN30-Index   </span>
              <span className="font-yellow" >0</span>
            </div>
            <div className="font-yellow" >0-0%</div>
          </div>
          <div className="owl-item-active" style={{ width: '190px' }}>
            <div className="name-index">
              <span>HNX-Index   </span>
              <span className="font-yellow" >236.66</span>
            </div>
            <div className="font-yellow" >0-0%</div>
          </div>
          <div className="owl-item-active" style={{ width: '190px' }}>
            <div className="name-index">
              <span>HNX30-Index   </span>
              <span className="font-yellow" >517.65</span>
            </div>
            <div className="font-yellow" >0-0%</div></div>
          <div className="owl-item-active" style={{ width: '190px' }}>
            <div className="name-index">
              <span>UPCOM-Index   </span>
              <span className="font-yellow" >95.18</span>
            </div>
            <div className="font-yellow">0-0%</div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'white' }} className="indext">
        <div className="fix-container">
          <div className="owl-item-active1" style={{ width: '190px' }}>
            <div className="name-index1">
              <span>EZ </span>
              <span style={{ color: "#50ac48" }}>GMS</span>
            </div>
            <div className="font-bomtom">Đại hội cổ đông trực tuyến</div>
          </div>
          <div className="owl-item-active1" style={{ width: '190px' }}>
            <div className="name-index1">
              <span>EZ   </span>
              <span style={{ color: "#337ab7" }} >Advance</span>
            </div>
            <div className="font-bomtom" >Quản lý cổ đông </div>
          </div>
          <div className="owl-item-active1" style={{ width: '190px' }}>
            <div className="name-index1">
              <span>EZ </span>
              <span style={{ color: "#50ac48" }} >MaginPro</span>
            </div>
            <div className="font-bomtom" >Quản lý cổ đông </div>
          </div>
          <div className="owl-item-active1" style={{ width: '190px' }}>
            <div className="name-index1">
              <span>EZ   </span>
              <span style={{ color: "#337ab7" }} >Transfer</span>
            </div>
            <div className="font-bomtom" >Đại hội cổ đông trực tuyến</div>
          </div>
          <div className="owl-item-active1">
            <div className="name-index1">
              <span>EZ   </span>
              <span style={{ color: "#b49c06" }} >MobileTrading</span>
            </div>
            <div className="font-bomtom" >Ứng trước Tiền bán CK và tiền cổ tức </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>


  );
}

export default App;
