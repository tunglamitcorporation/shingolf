import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import ReCAPTCHA from "react-google-recaptcha";
import {useRef} from 'react';
import { Helmet } from "react-helmet-async"
export default function Contract() {
  const {t} = useTranslation();
  const contract  = t("contract", {returnObjects:true})
  const contractFeature  = t("contract.feature", {returnObjects:true})
  const contractBranch  = t("contract.contract-branch", {returnObjects:true})
  const contractJP = t("contract.contractJP", {returnObjects:true})
  const faqQ = t("contract.FAQ-trigger", {returnObjects:true})
  const cancel = t("contract.cancel-content", {returnObjects:true})
  const key = '6LefXSUpAAAAAO2hfwoAu_7cdRoXRhIp1o8wIkwW'
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <div>
      <Helmet>
      <meta name="description" content="Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity." />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="https://azumayavietnam.com/contract/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Contract - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
      <meta property="og:description" content="Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity." />
      <meta property="og:url" content="https://azumayavietnam.com/contract/" />
      <meta property="og:image" content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701660726/AzumayaWeb/bg-contract_frmwem.jpg" />
      <meta property="article:published_time" content="2020-05-12T07:30:39+00:00" />
      <meta property="article:modified_time" content="2020-07-06T03:51:02+00:00" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Contract - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
      <meta name="twitter:description" content="Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity." />
      <script type="application/ld+json" class="aioseo-schema">
        {`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/contract\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/contract\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/contract\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/contract\/","name":"Contract","description":"Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.","url":"https:\/\/azumayavietnam.com\/contract\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/contract\/#webpage","url":"https:\/\/azumayavietnam.com\/contract\/","name":"Contract - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/contract\/#breadcrumblist"},"datePublished":"2020-05-12T07:30:39+07:00","dateModified":"2020-07-06T03:51:02+07:00"}]`}
      </script>
      </Helmet>
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
