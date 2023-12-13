import { Link } from "react-router-dom";
import Booking from "./Booking";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
export default function Feature() {
  const { t } = useTranslation();
  const massageService = t("massage", { returnObjects: true });
  const massageBranch = t("massage.branch", { returnObjects: true });
  const serviceName = t("service.service_name", { returnObjects: true });
  const branchHCM = t("service.hcm-branch", { returnObjects: true });
  const branchDN = t("service.dn-branch", { returnObjects: true });
  const branchHN = t("service.hn-branch", { returnObjects: true });
  const branchHP = t("service.hp-branch", { returnObjects: true });
  return (
    <div>
      <div className="massage__header ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Massage Service</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="is-sticky">
        <Booking />
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
                  <Link className="breadcrumb__title" to="/Component/Massage">
                    Massage Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Tabs selectedTabClassName="service__active" className="container">
        <TabList className="row" style={{ justifyContent: "space-evenly" }}>
          {massageBranch.map((item) => (
            <Tab className="service__location col-md-3">{item.name}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list">
              <Tab className="service">{t("massage.title")}</Tab>
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hcm-massage-title")}
                </div>
                <div className="service__content-body">
                  {branchHCM.map((item) => (
                    <p className="pre-line">{item.massage}</p>
                  ))}
                </div>
                <div className="container-fluid mb-5">
                  <div className="row pt-0">
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432024/AzumayaWeb/uwegghxowr6h6axhpexj.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/mwmb4i2drcaap6z0as3l.avif")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/nxyptzcjc0s3dsg2owdv.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/ovhug7mop5b58fwbdpdu.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702433609/AzumayaWeb/dr2c0mx59odilnqguttj.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{backgroundImage: 'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702433609/AzumayaWeb/azv8jgeksmiaiosa0cvf.webp")'}}></div>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list ">
              
                <Tab className="service">{t("massage.title")}</Tab>
           
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.dn-massage-title")}
                </div>
                <div className="service__content-body">
                  {branchDN.map((item) => (
                    <p className="pre-line">{item.massage}</p>
                  ))}
                </div>
                <div className="container-fluid mb-5">
                  <div className="row pt-0">
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432024/AzumayaWeb/uwegghxowr6h6axhpexj.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/mwmb4i2drcaap6z0as3l.avif")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/nxyptzcjc0s3dsg2owdv.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/ovhug7mop5b58fwbdpdu.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702433609/AzumayaWeb/dr2c0mx59odilnqguttj.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{backgroundImage: 'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702433609/AzumayaWeb/azv8jgeksmiaiosa0cvf.webp")'}}></div>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list ">
              
                <Tab className="service">{t("massage.title")}</Tab>
           
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hn-massage-title")}
                </div>
                <div className="service__content-body pre-line">
                  {branchHN.map((item) => (
                    <p style={{ textAlign: "center" }}>{item.massage}</p>
                  ))}
                </div>
                <div className="container-fluid mb-5">
                  <div className="row pt-0">
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432024/AzumayaWeb/uwegghxowr6h6axhpexj.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/mwmb4i2drcaap6z0as3l.avif")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/nxyptzcjc0s3dsg2owdv.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702432022/AzumayaWeb/ovhug7mop5b58fwbdpdu.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                       style={{backgroundImage:'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702433609/AzumayaWeb/dr2c0mx59odilnqguttj.jpg")'}}></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="content__feature-item massage-image">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{backgroundImage: 'url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1702433609/AzumayaWeb/azv8jgeksmiaiosa0cvf.webp")'}}></div>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        {/* <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list ">
              {serviceName.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hp-roten-title")}
                </div>
                <div className="service__content-body pre-line">
                  {branchHP.map((item) => (
                    <p>{item.roten}</p>
                  ))}
                </div>
                <div className="service__content-note ">
                  {t("service.hp-roten-female")}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hp-breakfast-title")}
                </div>
                <table className="service__table pre-line">
                  <tr>
                    {branchHP.map((item) => (
                      <td>{item.breakfast}</td>
                    ))}
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hp-massage-title")}
                </div>
                <div className="service__content-body">
                  {branchHP.map((item) => (
                    <p>{item.massage}</p>
                  ))}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel> */}
      </Tabs>
    </div>
  );
}
