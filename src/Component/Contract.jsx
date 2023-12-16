import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import ReCAPTCHA from "react-google-recaptcha";
export default function Contract() {
  const {t} = useTranslation();
  const contract  = t("contract", {returnObjects:true})
  const contractFeature  = t("contract.feature", {returnObjects:true})
  const contractBranch  = t("contract.contract-branch", {returnObjects:true})
  const contractJP = t("contract.contractJP", {returnObjects:true})
  const faqQ = t("contract.FAQ-trigger", {returnObjects:true})
  const cancel = t("contract.cancel-content", {returnObjects:true})
  const key = '6LefXSUpAAAAAO2hfwoAu_7cdRoXRhIp1o8wIkwW'
  console.log(contractFeature);
  return (
    <div>
      <div className="contract__background"></div>
      <div className="container pl-5 pr-5">
        <div className="row">
        <div className="contract__title">
        <div className="col-md-12">
       {t('contract.title')}
        </div>
      </div>
      <div className="container">
        <div className="row">
                {contractFeature.map((item)=>(
            <div className="col-md-4">
            <div className="content__feature-item content__contract-item">
              <div className="content__feature-container">
                <div
                  className="content__feature-img"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
              </div>
              <div className="content__feature-name mt-1">
                <a href="">{item.title}</a>
              </div>
              <div className="content__feature-text mt-1">
                <p className="mt-0">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
          ))}
          {/* <div className="col-md-4">
            <div className="content__feature-item content__contract-item">
              <div className="content__feature-container">
                <div
                  className="content__feature-img"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1701664675/AzumayaWeb/f-ctr4_lgseiu.jpg")`,
                  }}
                ></div>
              </div>
              <div className="content__feature-name mt-1">
                <a href="">和朝食</a>
              </div>
              <div className="content__feature-text mt-1">
                <p className="mt-0">
                  1日の活力は美味しい朝食から、東屋が誇る自慢の朝食です。長期滞在の方でも飽きることのないようメニュー構成に気をつけております。
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content__feature-item content__contract-item">
              <div className="content__feature-container">
                <div
                  className="content__feature-img"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1701664675/AzumayaWeb/f-ctr4_lgseiu.jpg")`,
                  }}
                ></div>
              </div>
              <div className="content__feature-name mt-1">
                <a href="">和朝食</a>
              </div>
              <div className="content__feature-text mt-1">
                <p className="mt-0">
                  1日の活力は美味しい朝食から、東屋が誇る自慢の朝食です。長期滞在の方でも飽きることのないようメニュー構成に気をつけております。
                </p>
              </div>
            </div>
          </div> */}
          <div className="contract-text col-md-12">
            <p>
              {t('contract.additional')}。
            </p>
          </div>
          <div className="col-md-12 center">
            <button className="btn-contract">{t('contract.contact')}</button>
          </div>
          <div className="content__feature-title" style={{marginTop:'50px'}}>
            {t('contract.benefit')}
          </div>
          <div className="contract-benefit contract-title">
            {t('contract.benefit_1')}
          </div>
          <div className="contract-text">
            <p>
              {t('contract.benefit-content')}
            </p>
          </div>
          <div className="container">
            <div className="row">
              {contractBranch.map((item)=> (
          <div className="col-6 col-md-2 p-0">
            <div className="content__branch-item">
              <img
                className="content__branch-img"
                src={item.url}
                alt=""
              />
            </div>
          </div>
              ))}
            </div>
          </div>
          <div className="contract-benefit contract-title">
            {t('conrtact.receipt')}
          </div>
          <div className="contract-text">
            <p>
              {t('contract.receipt-content')}
            </p>
          </div>
          <div className="contract-text text-modify">
            <h4 style={{ fontWeight: "bold" }}>{t('contract.contractJP-title')}</h4>
            {contractJP.map((item)=>(
              <p>{item.content}</p>
            ))}
            <h4 style={{ fontWeight: "bold" }}>{t('contract.contractVN-title')}</h4>
            <p>{t('contract.contractVN-content')}</p>
          </div>
          <div className="contract-benefit contract-title">
            {t('contract.about')}
          </div>
          <div className="contract-text pre-line">
            <p>
             {t('contract.about-content')}
            </p>
          </div>
          <div className="contract-benefit contract-title">
          {t('contract.FAQ')}
          </div>
          {faqQ.map((item)=>(
          <Collapsible trigger={item.content}>
            <div className="contract-text pre-line">
            <p>{item.answer}</p>
          </div>
          </Collapsible>
          ))}
          <div className="col-md-12 center">
            <button className="btn-contract">{t('contract.contact')}</button>
          </div>
          <div className="contract-benefit contract-title" style={{marginTop:'50px'}}>
          {t('contract.cancel')}
          </div>
          <ul class="cancel-contract contract-text">
              {cancel.map((item)=>(
                <li>{item.content}</li>
              ))}
          </ul>
          <div className="col-md-12 center">
                  <form className="contract-form">
                    <div className="contract-title pre-line">
                      <h1>CONTACT</h1>
                      <h1>{t('contract.contact')}</h1>
                      <h4 className="pt-4">{t('contract.form-title')}</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-3 p-0 m-0">
                      <label htmlFor="">{t('contract.company-name')}</label>
                      </div>
                      <input type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.address')}</label>
                      </div>
                      <input type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.company-URL')}</label>
                      </div>
                      <input type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.in-charge')}</label>
                      </div>
                      <div className="col-md-6">
                      <input 
                      type="text"
                      placeholder={t('contract.first-name')}/> 
                      </div>
                      <div className="col-md-6">
                      <input 
                      type="text"
                      placeholder={t('contract.last-name')}/> 
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.email')}</label>
                      </div>
                      <input type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.phone')}</label>
                      </div>
                      <input type="text" className="col-md-2" /> 
                    </div>
                    <div className="d-flex justify-content-center">
                    <ReCAPTCHA
                    sitekey={key}
                    />
                    </div>
                    <button className="base__btn btn__send">{t('contract.send')}</button>
                  </form>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
