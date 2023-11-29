import { useState } from "react";
import Booking from "./Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Service() {
  const { t } = useTranslation();
  const serviceData = t("service", { returnObjects: true });
  const serviceLocation = t("service.location", { returnObjects: true });
  const serviceName = t("service.service_name", { returnObjects: true });
  const branchHCM = t("service.hcm-branch", { returnObjects: true });
  const branchDN = t("service.dn-branch", { returnObjects: true });
  const branchHN = t("service.hn-branch", { returnObjects: true });
  const branchHP = t("service.hp-branch", { returnObjects: true });
  return (
    <div>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("service.name")}</h1>
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
                  <Link to="/Component/Home">
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/Component/Service">
                    Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Tabs selectedTabClassName="service__active" className="container">
        <TabList className="row" style={{ justifyContent: "space-around" }}>
          {serviceLocation.map((item) => (
            <Tab className="service__location col-md-2">{item.name}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list">
              {serviceName.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title col-md-12">
                  {t("service.hcm-roten-title")}
                </div>
                <table className="service__content-body--table col-md-12">
                  <tr>
                    {branchHCM.map((item) => (
                      <th>{item.branch}</th>
                    ))}
                  </tr>
                  <tr>
                    {branchHCM.map((item) => (
                      <td className="pre-line">{item.rotenburo}</td>
                    ))}
                  </tr>
                </table>
                <div className="service__content-note pre-line">
                  {t("service.hcm-roten-female")}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hcm-breakfast-title")}
                </div>
                <table className="service__content-body--table">
                  <tr>
                    <td
                      colSpan={3}
                      style={{ textAlign: "center", height: "20px" }}
                    >
                      All branches
                    </td>
                  </tr>
                  <tr>
                    {branchHCM.map((item) => (
                      <td className="pre-line">{item.breakfast}</td>
                    ))}
                  </tr>
                </table>
              </div>
            </TabPanel>
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
              {serviceName.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.dn-roten-title")}
                </div>
                <div className="service__content-body">
                  {branchDN.map((item) => (
                    <p className="pre-line">{item.roten}</p>
                  ))}
                </div>
                <div className="service__content-note pre-line">
                  {t("service.dn-roten-female")}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.dn-breakfast-title")}
                </div>
                <div className="service__content-body">
                  {branchDN.map((item) => (
                    <p className="pre-line">{item.breakfast}</p>
                  ))}
                </div>
              </div>
            </TabPanel>
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
              {serviceName.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hn-roten-title")}
                </div>
                <div className="service__content-body pre-line">
                  {branchHN.map((item) => (
                    <p>{item.roten}</p>
                  ))}
                </div>
                <div className="service__content-note pre-line">
                  {t("service.hn-roten-female")}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title">
                  {t("service.hn-breakfast-title")}
                </div>
                <table className="service__content-body--table pre-line">
                  <tr>
                    <td
                      colSpan={3}
                      style={{ textAlign: "center", height: "20px" }}
                    >
                      All branches
                    </td>
                  </tr>
                  <tr>
                    {branchHN.map((item) => (
                      <td style={{ textAlign: "center" }}>{item.breakfast}</td>
                    ))}
                  </tr>
                </table>
              </div>
            </TabPanel>
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
        </TabPanel>
      </Tabs>
    </div>
  );
}
