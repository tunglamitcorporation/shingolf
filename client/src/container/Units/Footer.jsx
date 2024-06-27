import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from '../../image/logo.jpg'
export default function Footer() {
    const {t} = useTranslation();
    const footer = t("footer.branch", {returnObjects: true})
    const policies = t("policies_content", {returnObjects: true})
    return(
        <div className="footer">
        <div className="footer__container">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-2">
                    <div className="header__logo">
                  <Link to="/">
                    <img 
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                    </div>
                </div>
                <div className="col-12 col-md-10 mb-4">
                  <div className="slogan mt-5">ĐƠN VỊ ORDER GẬY GOLF UY TÍN HÀNG ĐẦU VIỆT NAM </div>
                  <div className="slogan mt-2">GIAO HÀNG TỪ 3-5 NGÀY SAU KHI NHẬN CỌC </div>
                </div>
                <div className="container">
                  <div className="row">
                <div className="col-md-6 col-12 pb-5 left">
                  <div className="footer__branch-location">
                    <h2 style={{color: '#ff3131', fontWeight:'bold'}}>KHO NHẬT BẢN</h2>
                    <p>KHO SAITAMA</p>
                    <p><i class="fa-solid fa-location-dot"></i> Địa chỉ: 333-0866 埼玉県川口市芝3丁目1-19</p>
                    <p><i class="fa-solid fa-phone"></i> 08090930496</p>
                    <p>KHO OSAKA</p>
                    <p><i class="fa-solid fa-location-dot"></i> Địa chỉ: 581-0018 大阪府八尾市青山町3-3-11 セトン旭106号室</p>
                    <p><i class="fa-solid fa-phone"></i> 07085861274</p>
                    <h2 style={{color: '#ff3131', fontWeight:'bold'}}>KHO VIỆT NAM</h2>
                    <p><i class="fa-solid fa-location-dot"></i> Địa chỉ: SỐ 41 – NGÕ 69 – VẠN XUÂN – LAI XÁ – KIM CHUNG – HOÀI ĐỨC – HÀ NỘI</p>
                    <p><i class="fa-solid fa-phone"></i> 0868623499</p>
                    <h2>ĐƠN VỊ VẬN CHUYỂN: Vận chuyển MCS – SAGAWA EXPRESS – VIETTEL POST</h2>
                    <h2>ĐƠN VỊ HỢP TÁC: Vận chuyển MCS – GOLF Partner – GOLF DO</h2>
                  </div>
                </div>
                 <div className="col-md-6 col-12">
                <div className="policies d-flex flex-column align-items-start">
                  {policies.map(item => (
                    <Link style={{color: '#ff3131', fontWeight:'bold', fontSize: '1.6rem'}}to = {`/policies/${item.title.replace(/\s/g, '-')}/`}>{item.title}</Link>
                  ))}
                </div>
                  </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
