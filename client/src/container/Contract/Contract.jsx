import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import ReCAPTCHA from "react-google-recaptcha";
import {useRef, useState} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import FormComponent from "../../Test2";

export default function Contract() {
  const {t} = useTranslation();
  const contractFeature  = t("contract.feature", {returnObjects:true})
  const contractBranch  = t("contract.contract-branch", {returnObjects:true})
  const contractJP = t("contract.contractJP", {returnObjects:true})
  const faqQ = t("contract.FAQ-trigger", {returnObjects:true})
  const cancel = t("contract.cancel-content", {returnObjects:true})
  const key = '6Lc3_a8pAAAAAMnaVRbd8CZQCO7-PwpoDh-xB83c'
  const ref = useRef(null);
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [companyURL, setCompanyURL] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
 const handleSubmit = (e) => {
  const dataObject = {
        companyName,
        address,
        companyURL,
        firstName,
        lastName,
        email,
        phoneNumber
  }
  console.log(dataObject)
  e.preventDefault();
 }
  return (
    <div>
      <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
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
          <div className="contract-text col-md-12">
            <p>
              {t('contract.additional')}。
            </p>
          </div>
          <div className="col-md-12 center">
            <button className="btn-contract" onClick={handleClick}>{t('contract.contact')}</button>
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
              <Link to = {item.link}>
              <img
                className="content__branch-img"
                src={item.url}
                alt='azumaya hotel branch ho chi minh ha noi da nang hai phong cambodia'
              />
              </Link>
            </div>
          </div>
              ))}
            </div>
          </div>
          <div className="contract-benefit contract-title">
            {t('contract.receipt')}
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
            <button className="btn-contract" onClick={handleClick}>{t('contract.contact')}</button>
          </div>
          <div className="contract-benefit contract-title" style={{marginTop:'50px'}}>
          {t('contract.cancel')}
          </div>
          <ul class="cancel-contract contract-text">
              {cancel.map((item)=>(
                <li>{item.content}</li>
              ))}
          </ul>
          <div ref={ref} className="col-md-12 center">
                  <form onSubmit={handleSubmit} className="contract-form">
                    <div className="contract-title pre-line">
                      <h1>CONTACT</h1>
                      <h1>{t('contract.contact')}</h1>
                      <h4 className="pt-4">{t('contract.form-title')}</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-3 p-0 m-0">
                      <label htmlFor="">{t('contract.company-name')}</label>
                      </div>
                      <input 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.address')}</label>
                      </div>
                      <input 
                      value={address}
                      onChange={(e)=> setAddress(e.target.value)}
                      type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.company-URL')}</label>
                      </div>
                      <input 
                      value={companyURL}
                      onChange={(e) => setCompanyURL(e.target.value)}
                      type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.in-charge')}</label>
                      </div>
                      <div className="col-md-6">
                      <input 
                      value={firstName}
                      onChange={(e)=> setFirstName(e.target.value)}
                      type="text"
                      placeholder={t('contract.first-name')}/> 
                      </div>
                      <div className="col-md-6">
                      <input 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder={t('contract.last-name')}/> 
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.email')}</label>
                      </div>
                      <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text" className="col-md-2" /> 
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-0 m-0">
                      <label htmlFor="">{t('contract.phone')}</label>
                      </div>
                      <input 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }}}
                      type="text" className="col-md-2" /> 
                    </div>
                    <div className="d-flex justify-content-center">
                    {/* <ReCAPTCHA
                    sitekey={key}
                    /> */}
                    </div>
                    <button 
                    id='send'
                    type="submit"
                    className="base__btn btn__send">{t('contract.send')}</button>
                  </form>
          </div>
        </div>
      </div>
      <FormComponent />
        </div>
      </div>
    </div>
  );
}
