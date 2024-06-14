import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from '../../image/logo.jpg'
export default function Footer() {
    const {t} = useTranslation();
    const footer = t("footer.branch", {returnObjects: true})
    return(
        <div className="footer">
        <div className="footer__container">
            <div className="container">
                <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="header__logo">
                  <Link to="/">
                    <img 
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                    </div>
                  <div className="slogan">ĐƠN VỊ ORDER GẬY GOLF UY TÍN HÀNG ĐẦU VIỆT NAM <br /> GIAO HÀNG TỪ 3-5 NGÀY SAU KHI NHẬN CỌC </div>
                </div>
                <div className="col-md-6 pb-5 left">
                  <div className="footer__branch-location">
                    <p>ĐỊA CHỈ KHO NHẬT</p>
                    <p>ĐỊA CHỈ KHO VIỆT</p>
                    <p>ĐƠN VỊ VẬN CHUYỂN</p>
                    <p>ĐƠN VỊ HỢP TÁC</p>
                  </div>
                <div className="policies d-flex flex-column align-items-start">
                    <Link to = ''>Chính sách</Link>
                    <Link to = ''>Chính sách</Link>
                    <Link to = ''>Chính sách</Link>
                    <Link to = ''>Chính sách</Link>
                    <Link to = ''>Chính sách</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
        {/* <div className="bottom-bar-container container">
                <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <i class="fa-solid fa-home bottom-bar-icon"></i>
                    <div to ='/' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Trang Chủ</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-magnifying-glass bottom-bar-icon"></i>
                    <div to ='/search/' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Tìm kiếm</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-chart-simple bottom-bar-icon"></i>
                    <div to ='/rate/' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Bảng xếp hạng</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-clock-rotate-left bottom-bar-icon"></i>
                    <div to ='' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Lịch sử</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-regular fa-money-bill-trend-up bottom-bar-icon"></i>
                    <div to ='' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Bảng giá</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
