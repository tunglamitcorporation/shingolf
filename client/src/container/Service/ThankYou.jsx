import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function ThankYouService() {
    const {t} = useTranslation()    
    return(
        <div>
      <div className="reservation__content" style={{ backgroundImage: 'url(/webp/golf-bg.jpg)'}}>
            <h1>Cảm ơn quý khách đã đặt hàng !</h1>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">Cảm ơn</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>Đơn hàng của Quý khách đã được chúng tôi tiếp nhận và đang trong quá trình xử lý.</h1>
                <br />
                <h4>Để đảm bảo Quý khách có thể nhận được thông tin cập nhật về đơn hàng một cách nhanh chóng và chính xác, vui lòng kiểm tra tin nhắn trên điện thoại (Zalo)
                <br />
                <br />
                Nếu Quý khách có bất kỳ thắc mắc hay cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi qua số điện thoại 0564.545.545 hoặc email shingolf@gmail.com 
                <br />
                Chúng tôi luôn sẵn lòng hỗ trợ Quý khách
                <br />
                <br />
                Một lần nữa, xin chân thành cảm ơn Quý khách</h4>
                </div>
            </div>
        </div>
      </div>
    )
}