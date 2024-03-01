import React from 'react';
import BookingRoom from '../../BookingRoom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useLocation, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function VietnamService() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const initialActiveTab = params.get('tab') || 'breakfast';
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const {t} = useTranslation()
  const breakfast_hour = t("service_breakfast.table1", {returnObjects: true})
  const breakfast_price = t("service_breakfast.table2", {returnObjects: true})
  const rotenHCM_hour = t("service_roten.table_hcm1", {returnObjects: true})
  const rotenHCM_price = t("service_roten.table_hcm2", {returnObjects: true})
  const rotenHN_hour = t("service_roten.table_hn1", {returnObjects: true})
  const rotenHN_price = t("service_roten.table_hn2", {returnObjects: true})
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);
  useEffect(() => {
    // Update the selected tab when the URL parameter changes
    const newActiveTab = params.get('tab') || 'breakfast';
    if (newActiveTab !== activeTab) {
      setActiveTab(newActiveTab);
    }
  }, [params, activeTab]);

  const handleTabSelect = (index) => {
    // Update the URL parameter when a tab is selected
    const newParams = new URLSearchParams(search);
    switch (index) {
      case 0:
        newParams.set('tab', 'breakfast');
        break;
      case 1:
        newParams.set('tab', 'rotenburo');
        break;
      case 2:
        newParams.set('tab', 'massage');
        break;
      default:
        break;
    }
    // Replace the current URL without triggering a full page reload
    window.history.replaceState(null, null, `?${newParams.toString()}`);
    // Manually update the activeTab state
    setActiveTab(newParams.get('tab'));
  };
  return (
    <>
     <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Service</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="is-sticky">
      <BookingRoom />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/Home">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/HNBranch">
                  Service
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
  <Tabs className="container p-0">
  <TabPanel>
  <Tabs 
  className = "col-md-12 p-0"
  defaultIndex={activeTab === 'breakfast' ? 0 : activeTab === 'rotenburo' ? 1 : 2}
  onSelect={handleTabSelect}
  selectedTabClassName='service__active'
  style={{marginTop: 20}}>  
    <TabList className="service__list"> 
      <Tab id="breakfast" className="service">Breakfast</Tab>
      <Tab id="rotenburo" className="service">Rotenburo</Tab>
      <Tab id="massage" className="service">Massage</Tab>
      <Tab className="service">
      <a href="/Service/Test/Cambodia/Service" className="location_link">Cambodia</a>
      </Tab>
    </TabList>
    <TabPanel>
    <div className="service__content pt-0">
      <div className="row justify-content-center">
      <Link className ="image-holder p-0" to = "">
      <img src={t("service_breakfast.image")} alt="" />
      </Link>
     <div className="row">
        <div className="col-md-6" style={{borderRight: "solid 3px #482979", textAlign:"left"}}>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <div className="service_header">{t("service_breakfast.openHour")}</div>
          {breakfast_hour.map((item)=>(
             <tr>
             <td>{item.row1}</td>
             <td className='right'>{item.row2}</td>
             <td></td>
             <td>{item.row4}</td>
           </tr>
          ))}
          </table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <div className="service_header left">{t("service_breakfast.price")}</div>
          {breakfast_price.map((item)=>(
            <tr>
            <td className='right'>{item.row1}</td>
            <td>{item.row2}</td>
          </tr>
          ))}
          </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="service__content p-0">
      <div className="row justify-content-center">
      <Link className='image-holder p-0'  to = "">
      <img style={{padding:"5px 22px"}} src={t("service_roten.image")} alt="" />
      </Link>
      <div className="row">
        <div className="col-md-6 left pb-5" style={{borderBottom: "solid 3px #482979"}}>
          <div className="d-flex justify-content-center">
            <div className="service_branch">ホーチミン</div>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header mt-5" style={{width:"500px"}}>{t("service_roten.openHour")}</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          {rotenHCM_hour.map((item)=>(
            <tr>
            <td style={{width:"25%"}}>{item.row1}</td>
            <td style={{width:"25%"}}>{item.row2}</td>
            <td className='service_table-note'>{item.row3}</td>
          </tr>
          ))}
          </table>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header" style={{width:"500px", marginTop:"90px"}}>{t("service_roten.price")}</div>
          </div>
          <div className="d-flex justify-content-start">
          <table className='service_table' style={{width: "410px"}}>
            {rotenHCM_price.map((item)=>(
              <tr>
              <td className='right'>{item.row1}</td>
              <td>{item.row2}</td>
            </tr>
            ))}
          </table>
          </div>
        </div>
        <div className="col-md-6 left" style={{borderBottom: "solid 3px #482979"}}>
        <div className="d-flex justify-content-center">
            <div className="service_branch">ハノイ</div>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header mt-5"style={{width:"500px"}}>《営業時間》</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <tr>
            <td className='service_table-note'>{t("service_roten.hn_note1")}</td>
            <td></td>
            <td className='service_table-note'>{t("service_roten.hn_note2")}</td>
          <td className='service_table-note'>{t("service_roten.hn_note3")}</td>
          </tr>
          {rotenHN_hour.map((item)=>(
             <tr>
             <td style={{width:"20%"}}>{item.row1}</td>
             <td style={{width:"25%"}}>{item.row2}</td> 
             <td style={{width:"20%"}}>{item.row3}</td>
             <td>{item.row4}</td> 
           </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className='service_table-note'>{t("service_roten.hn_note4")}</td>
          </tr>
          </table>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header mt-5" style={{width:"500px"}}>《ビジター料金》</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <tr>
            <td className='left'>男性:</td>
            <td>150.000VND</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='left'>女性:</td>
            <td>100.000VND</td> 
          </tr>
          </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 left pb-5" style={{borderBottom: "solid 3px #482979"}}>
          <div className="d-flex justify-content-center">
            <div className="service_branch">ダナン</div>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header mt-5" style={{width:"500px"}}>《営業時間》</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <tr>
            <td style={{width:"20%"}}> 平日:</td>
            <td>6:00-9:00</td>
          </tr>
          <tr>
            <td></td>
            <td>17:00-22:15</td> 
          </tr>
          <tr>
            <td>週末:</td>
            <td>7:00-10:00</td>
          </tr>
          <tr>
            <td></td>
            <td>17:00-22:15</td> 
          </tr>
          </table>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header" style={{width:"500px", marginTop:"5.2rem"}}>《ビジター料金》</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <tr>
            <td>150.000VND</td>
          </tr>
          </table>
          </div>
        </div>
        <div className="col-md-6 left pb-5" style={{borderBottom: "solid 3px #482979"}}>
          <div className="d-flex justify-content-center">
            <div className="service_branch">ハイフォン</div>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header mt-5" style={{width:"500px"}}>《営業時間》</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <tr>
            <td style={{width:"20%"}}> 平日:</td>
            <td>6:00-9:00</td>
          </tr>
          <tr>
            <td></td>
            <td>17:30-23:00</td> 
          </tr>
          <tr>
            <td>週末:</td>
            <td>7:00-12:00</td>
          </tr>
          <tr>
            <td></td>
            <td>17:30-23:00</td> 
          </tr>
          </table>
          </div>
          <div className="d-flex justify-content-center">
          <div className="service_header" style={{width:"500px", marginTop:"5.2rem"}}>《ビジター料金》</div>
          </div>
          <div className="d-flex justify-content-center">
          <table className='service_table'>
          <tr>
            <td>150.000VND</td>
          </tr>
          </table>
          </div>
        </div>

      </div>
      <div className="row justify-content-center">
          <div className="service_table-note pb-5" style={{borderBottom:"solid 3px #482979", width: "500px"}}>
          ※マッサージ・朝食とお得なセットあり<br/>

※バスタオルは受付でお渡し<br/>

※シャンプー、コンディショナー、ボディソープ、ドライヤー、綿棒あり<br/>

※チェックインチェックアウト当日無料<br/>

※女性専用時間については各店舗までお問い合わせください。<br/>

        </div>
      </div>
      <div className="row justify-content-center">
          <div className="service_table-note pb-5">
          ※貸し切り露天風呂もご利用いただけます。<br/>
          1~4名 / 時間: 800.000VND<br/>
5~8名 / 時間: 1.000.000VND<br/>

        </div>
      </div>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="service__content p-0">
      <div className="row justify-content-center">
      <Link className ="image-holder p-0" to = "">
      <img style={{padding:"5px 22px"}} className='image-holder' src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1709172400/AzumayaWeb/Az_website_service_page_photos-3_c5c7kv.jpg" alt="" />
      </Link>
      <div className="row">
        <div className="col-md-4 mt-5" style={{borderRight: "solid 3px #482979"}}>
          <div className="d-flex justify-content-center">
          <div className="service_branch mb-0">ハノイ</div>
          </div>
          <div className='massage_branch-note'>(東屋リンラン店にて)</div>
          <div className="d-flex justify-content-start">
          <div className="service_header">《営業時間》</div>
          </div>
          <table className='massage_table'>
          <tr>
            <td>平日</td>
            <td>13:00~22:00</td>
          </tr>
          <tr>
            <td>休日</td>
            <td>10:00~22:00</td>
          </tr>
          </table>
          <div className="d-flex justify-content-start">
          <div className="service_header" style={{marginTop: "20px"}}>《料金》</div>
          </div>
          <table className='massage_table'>
          <tr>
            <td>40分コース</td>
            <td>200.000VND</td>
          </tr>
          <tr>
            <td>70分コース</td>
            <td>250.000VND</td>
          </tr>
          <tr>
            <td>100分コース</td>
            <td>350.000VND</td>
          </tr>
          </table>
          <div className="d-flex justify-content-center mt-5">
            <button className="call-btn" onClick = {onOpenModal}>Contact Us</button>
          <Modal open={open} onClose={onCloseModal} center>
            <div className="row mt-5">
              <h2 className='mb-5'>Kindly select a preferred method of contact with us.1</h2>
            <div className="btn_container">
              <a className='mr-5' href='tel:123'><i class="fa-solid fa-phone"></i></a>
              <a className ='ml-5' href='mailto:lam@example.com'><i class="fa-solid fa-envelope"></i></a>
            </div>
            </div>
         </Modal>
          </div>
        </div>
        <div className="col-md-4 mt-5" style={{borderRight: "solid 3px #482979"}}>
        <div className="d-flex justify-content-center">
          <div className="service_branch mb-0">ダナン</div>
        </div>
          <div className="d-flex justify-content-start">
          <div className="service_header" style={{marginTop: "25px"}}>《営業時間》</div>
          </div>
          <table className='massage_table'>
          <tr>
            <td>平日</td>
            <td>14:00~22:30</td>
          </tr>
          <tr>
            <td>休日</td>
            <td>12:00~22:30</td>
          </tr>
          </table>
          <div className="d-flex justify-content-start">
          <div className="service_header" style={{marginTop: "20px"}}>《料金》</div>
          </div>
          <table className='massage_table'>
          <tr>
            <td>40分コース</td>
            <td>200.000VND</td>
          </tr>
          <tr>
            <td>70分コース</td>
            <td>250.000VND</td>
          </tr>
          <tr>
            <td>100分コース</td>
            <td>350.000VND</td>
          </tr>
          </table>
          <div className="d-flex justify-content-center mt-5">
            <button className="call-btn" onClick = {onOpenModal1}>Contact Us</button>
          <Modal open={open1} onClose={onCloseModal1} center>
            <div className="row mt-5">
              <h2 className='mb-5'>Kindly select a preferred method of contact with us.2</h2>
            <div className="btn_container">
              <a className='mr-5' href="tel:456"><i class="fa-solid fa-phone"></i></a>
              <a className ='ml-5' href='mailto:lam@example.com'><i class="fa-solid fa-envelope"></i></a>
            </div>
            </div>
         </Modal>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className="d-flex justify-content-center">
          <div className="service_branch mb-0">ホーチミン</div>
          </div>
          <div className='massage_branch-note'>(東屋タイバンルン1号店にて)</div>
          <div className="d-flex justify-content-start">
          <div className="service_header">《営業時間》</div>
          </div>
          <table className='massage_table'>
          <tr>
            <td>平日</td>
            <td>10:00~23:00</td>
          </tr>
          <tr>
            <td>休日</td>
            <td>10:00~23:00</td>
          </tr>
          </table>
          <div className="d-flex justify-content-start">
          <div className="service_header" style={{marginTop: "20px"}}>《料金》</div>
          </div>
          <table className='massage_table'>
          <tr>
            <td>40分コース</td>
            <td>250.000VND</td>
          </tr>
          <tr>
            <td>70分コース</td>
            <td>300.000VND</td>
          </tr>
          <tr>
            <td>100分コース</td>
            <td>400.000VND</td>
          </tr>
          </table>  
          <div className="d-flex justify-content-center mt-5">
            <button className="call-btn" onClick = {onOpenModal2}>Contact Us</button>
          <Modal open={open2} onClose={onCloseModal2} center>
            <div className="row mt-5">
              <h2 className='mb-5'>Kindly select a preferred method of contact with us.3</h2>
            <div className="btn_container">
              <a className='mr-5' href="tel:789"><i class="fa-solid fa-phone"></i></a>
              <a className= 'ml-5' href='mailto:info@example.com'><i class="fa-solid fa-envelope"></i></a>
            </div>
            </div>
         </Modal>
          </div>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div className="service_table-note">
        ※宿泊者は10%割引<br/>

※チップはお気持ちでいただいております。<br/>

※事前のご予約をおすすめ<br/>

※露天風呂とのお得なセットもあり
        </div>
      </div>
      </div>
    </div>
    </TabPanel>
    </Tabs>
    </TabPanel>
  </Tabs>
    </>
  );
};