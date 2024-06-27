import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function PoliciesContent() {
  const { t, i18n } = useTranslation();
  const policies = t("policies_content", { returnObjects: true });
    const {policiesTitle} = useParams()
    useEffect(() => {
      if (policiesTitle !== undefined) {
        const elementToScroll = document.getElementById(`${policiesTitle}`);
        if (elementToScroll) {
          elementToScroll.scrollIntoView({ behavior: 'smooth', block:'center', inline:'nearest' });
        }
        
      }
    }, [policiesTitle]);
    // const a = t("header.feature")
    // const b = t("header.title2")
    // const c = a + " | "+ b
  return (
    <div>
      <HelmetLayout />
      <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Chính sách và quy trình</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <i className="fa-solid fa-house"></i>
                  <Link to="/"></Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/policies/">
                    Chính sách và quy trình
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__type-list">
        <div className="container" id="containerID">
          {policies.map((item) => 
                <div key={item.title} className="feature__type-item" id={item.title}>
                <div className="card mb-3" style={{ border: "none" }}>
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div className="card-body pre-line" style={{ padding: 0 }}>
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text mt-3">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                )
            }
        </div>
      </div>
    </div>
  );
}