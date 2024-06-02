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
        </div>
    )
}
