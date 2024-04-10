import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import ReCAPTCHA from "react-google-recaptcha";
import {useRef, useState, useEffect} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function Contract() {
  const {t} = useTranslation();
  const contractFeature  = t("contract.feature", {returnObjects:true})
  const contractBranch  = t("contract.contract-branch", {returnObjects:true})
  const contractJP = t("contract.contractJP", {returnObjects:true})
  const faqQ = t("contract.FAQ-trigger", {returnObjects:true})
  const cancel = t("contract.cancel-content", {returnObjects:true})
  const city = t("booking.city", {returnObjects:true})
  const key = '6Lc3_a8pAAAAAMnaVRbd8CZQCO7-PwpoDh-xB83c'
  const ref = useRef(null);
  const navigate = useNavigate()
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [companyURL, setCompanyURL] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [note, setNote] = useState('')
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const a = t("header.contract")
  const b = t("header.title")
  const c = a + " | "+ b
  console.log(c);

  const [errors, setErrors] = useState({});
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const validateError = document.querySelector('.validate_failed');
      if (validateError) {
        validateError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
}, [errors]);
const validate = () => {
  let errors = {}
  let isVaLid = true

  if (!companyName) {
    errors.companyName = 'required';
    isVaLid = false
  }
  if (!address) {
    errors.address = 'required';
    isVaLid = false
  } 
  if (!companyURL) {
    errors.companyURL = 'required';
    isVaLid = false
  } 
  if (!firstName) {
    errors.firstName = 'required';
    isVaLid = false

  } 
  if (!lastName) {
    errors.lastName = 'required';
    isVaLid = false

  } 
  if (!email) {
    errors.email = 'required';
    isVaLid = false
  } 
  else if (!validateEmail(email)) {
    errors.email = 'Invalid email format';
    isVaLid = false

  }
  if (!phoneNumber) {
    errors.phoneNumber = 'required';
    isVaLid = false

  } 
  setErrors(errors);
  return isVaLid
}
 const handleSubmit = async (e) => {
  const dataObject = {
        companyName,
        address,
        companyURL,
        firstName,
        lastName,
        email,
        phoneNumber,
        selectedCity,
        note
  }
  if(validate()){
    const token = ''
    const source = ''
    navigate(`/thank-you/${selectedCity}`)
    
    console.log(dataObject)
  }else{
    alert(`Please ensure that all required fields are completed`)
  }
  e.preventDefault();
 }
  return (
    <div>
      <HelmetLayout title={c} />
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
          <div ref={ref} className="col-md-6">
                  <form onSubmit={handleSubmit} className="contract-form">
                    <div className="contract-title pre-line">
                      <h1>{t('contract.contact')}</h1>
                      <h4 className="pt-4">{t('contract.form-title')}</h4>
                    </div>
                    <div className="row pl-3 pr-3">
                      <div className="col-md-12">
                      <label >{t('contract.company-name')}</label>
                      </div>
                      <input 
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value)
                        errors.companyName = ''
                      }}
                      type="text" 
                      className={errors.companyName ? 'col-md-2 validate_failed' : 'col-md-2'} /> 
                    </div>
                    {errors.companyName && 
                    <p className="col-md-1 error_message-contract">{errors.companyName}</p>}
                    <div className="row pl-3 pr-3">
                      <div className="col-md-12">
                      <label >{t('contract.address')}</label>
                      </div>
                      <input 
                      value={address}
                      onChange={(e)=> {
                        setAddress(e.target.value)
                        errors.address = ''
                      }}
                      type="text" 
                      className={errors.address ? 'col-md-2 validate_failed' : 'col-md-2'} /> 
                    </div>
                    {errors.address && 
                    <p className="col-md-1 error_message-contract">{errors.address}</p>}
                    <div className="row pl-3 pr-3">
                      <div className="col-md-12">
                      <label >{t('contract.company-URL')}</label>
                      </div>
                      <input 
                      value={companyURL}
                      onChange={(e) => {
                        setCompanyURL(e.target.value)
                        errors.companyURL = ''
                      }}
                      type="text" 
                      className={errors.companyURL ? 'col-md-2 validate_failed' : 'col-md-2'} /> 
                    </div>
                    {errors.companyURL && 
                    <p className="col-md-1 error_message-contract">{errors.companyURL}</p>}
                    <div className="row">
                      <div className="col-md-12">
                      <label style={{marginLeft: '10px'}}>{t('contract.in-charge')}</label>
                      </div>
                      <div className="col-md-6 pl-0 pr-3">
                      <input 
                      value={firstName}
                      onChange={(e)=> {
                        setFirstName(e.target.value)
                        errors.firstName = ''
                      }}
                      type="text"
                      placeholder={t('contract.first-name')}
                      className={errors.firstName ? 'validate_failed' : ''}
                      /> 
                      {errors.firstName && 
                    <p className="col-md-2 error_message-contract" style={{width:'120px'}}>{errors.firstName}</p>}
                      </div>
                      <div className="col-md-6 pl-3 pr-0">
                      <input 
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value)
                        errors.lastName = ''
                      }}
                      type="text"
                      placeholder={t('contract.last-name')}
                      className = {errors.lastName ? 'validate_failed' : ''}
                      /> 
                      {errors.lastName && 
                    <p className="col-md-2 error_message-contract">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pl-0 pr-3">
                      <label style={{marginLeft: '20px'}} >{t('contract.email')}</label>
                      <input 
                     value={email}
                     onChange={(e) => {
                      setEmail(e.target.value)
                      errors.email = ''
                     }}
                     type="text"
                      placeholder={t('contract.email')}
                      className={errors.email ? 'validate_failed' : ''}
                      /> 
                      {errors.email && 
                    <p className="col-md-2 error_message-contract">{errors.email}</p>}
                      </div>
                      <div className="col-md-6 pl-3 pr-0">
                      <label style={{marginLeft: '20px'}} >{t('contract.phone')}</label>
                      <input 
                     value={phoneNumber}
                     onChange={(e) => {
                      setPhoneNumber(e.target.value)
                      errors.phoneNumber = ''
                     }}
                     onKeyPress={(event) => {
                       if (!/[0-9]/.test(event.key)) {
                         event.preventDefault();
                       }}}
                     type="text"
                      placeholder={t('contract.phone')}
                      className={errors.phoneNumber ? 'validate_failed' : ''}
                      /> 
                      {errors.phoneNumber && 
                    <p className="col-md-2 error_message-contract">{errors.phoneNumber}</p>}
                      </div>
                    </div>
                    <div className="row pl-3 pr-3">
                        <label >{t('contract.area')}</label>
                        <select
                        className="col-md-12"
                        value={selectedCity}
                        onChange={(e) => {
                          setSelectedCity(e.target.value)
                          errors.selectedCity = ''
                        }}
                        >
                          {city.map((item) => (
                            <option value={item.id}>{item.city_name}</option>
                          ))}
                        </select>
                    </div>
                    {errors.selectedCity && 
                    <p className="col-md-1 error_message-contract">{errors.selectedCity}</p>}
                    <div className="row pl-3 pr-3 justify-content-center">
                        <div className="col-md-12 p-0">
                        <label style={{marginLeft: '20px'}}>{t("contract.note")}</label>
                        <textarea
                          className="text-note"
                          cols="40"
                          rows="6"
                          value={note}
                          placeholder={t("reservation.request")}
                          style={{border: '1px solid #482979'}}
                          onChange={(e) => {
                            setNote(e.target.value)
                            errors.note = ''
                          }}
                        ></textarea>
                        </div>
                    </div>
                    {errors.note && 
                    <p className="col-md-1 error_message-contract">{errors.note}</p>}
                    <div className="d-flex justify-content-center p-2">
                    <ReCAPTCHA
                    sitekey={key}
                    />
                    </div>
                    <div className="d-flex justify-content-center p-2">
                    <button 
                    id='send'
                    type="submit" 
                    className="base__btn btn__send">{t('contract.send')}</button>
                    </div>
                  </form>
          </div>
          <div className="col-md-6 mt-4">
            <div className="row">
              <iframe className="mt-2" src="https://www.google.com/maps/d/u/0/embed?mid=1QMxA8dLrhI-he9H429u_CFCQL7myn_I&ehbc=2E312F&noprof=1" width="640" height="285"></iframe>
              <iframe className="mt-2" src="https://www.google.com/maps/d/u/0/embed?mid=1IbX3RphsmKKTQeIb87e-R7z_7YqmCqo&ehbc=2E312F&noprof=1" width="640" height="285"></iframe>
              <iframe className="mt-2" src="https://www.google.com/maps/d/u/0/embed?mid=1bnhiroPzAPKRKZ8-_XLlAIkVsQ_uPWo&ehbc=2E312F&noprof=1" width="640" height="285"></iframe>
              <iframe className="mt-2" src="https://www.google.com/maps/d/u/0/embed?mid=1ih1rXZ_1HTPkEDXzOeEttIwP8CPMHp4&ehbc=2E312F&noprof=1" width="640" height="285"></iframe>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}