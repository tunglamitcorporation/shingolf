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
                <div className="col-md-6">
                    <div className="header__logo">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                  <div className="slogan">SLOGAN</div>
                  <div className="footer__branch-location">
                    <p>Dia chi</p>
                    <p>Dien thoai</p>
                    <p>Email</p>
                  </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Chính sách</li>
                        <li>Chính sách</li>
                        <li>Chính sách</li>
                        <li>Chính sách</li>
                        <li>Chính sách</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
