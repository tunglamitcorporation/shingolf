import React from "react";
import Booking from "../Units/Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import Flatpickr from "react-flatpickr";
import Button from "react-bootstrap/Button";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { format } from "date-fns";
import { sendMassageRequest } from "../../api/reservation";

export default function VietnamService({deviceType}) {
  const [branch, setBranch] = useState('')
  const [city, setCity] = useState('')
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const location = useLocation();
  const language = i18n.language
 
  function MassageLinhLangModal(props) {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [guestName, setGuestName] = useState('');
    const [gender, setGender] = useState('Mr.')
    const [option, setOption] = useState('40 minutes');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const [errors, setErrors] = useState('')
    const validateEmail = (email) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const validate = () => {
      let errors = {}
      let isVaLid = true
    
      if (!startDate) {
        errors.startDate = 'required';
        isVaLid = false
      }
      if (!startTime) {
        errors.startTime = 'required';
        isVaLid = false
      } 
      if (!guestName) {
        errors.guestName = 'required';
        isVaLid = false
      } 
      if (!gender) {
        errors.gender = 'required';
        isVaLid = false
    
      } 
      if (!option) {
        errors.option = 'required';
        isVaLid = false
    
      } 
      else if (!validateEmail(email)) {
        errors.email = 'Invalid email format';
        isVaLid = false
    
      }
      if (!phone) {
        errors.phone = 'required';
        isVaLid = false
    
      } 
      if (!branch) {
        errors.branch = 'required';
        isVaLid = false
    
      }
      setErrors(errors);
      return isVaLid
    }
    const handleStartTimeChange = (selectedDates) => {
      if (selectedDates.length > 0) {
        const selectedDate = new Date(selectedDates[0]);
        const timeString = selectedDate.toTimeString().split(" ")[0];
        setStartTime(timeString);
        errors.startTime = ''
      } else {
        setStartTime(null);
      }
    };
    const handleSubmit = async(e) => {
      const dataObject = {
        startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
        startTime,
        guestName,
        gender,
        option,
        phone,
        email,
        branch,
        specialRequest,
        language,
        deviceType
      }
      console.log(dataObject);
      e.preventDefault()
      if(validate()) {
        const token = "73344833-5b52-4403-9255-695907647688"
      const source = await sendMassageRequest(dataObject, token)
      navigate (`/massage/thank-you/${city}`)
      }else{
        alert(`Please ensure that all required fields are completed`)
      }
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {t("service_massage.modal_titleHN")}
          </Modal.Title>
          <Button variant="light" onClick={props.onHide}>
            <i class="fa-solid fa-xmark purple"></i>
          </Button>
        </Modal.Header>
        <div className="row p-5">
          <div className="col-md-6 massage_reservation">
            <Modal.Body>
        <form onSubmit={handleSubmit}>
              <h2>{t("service_massage.reservation1")}</h2>
              <div className="row pl-3 pr-3">
                <input
                  placeholder={t("service_massage.guest_name")}
                  type="text"
                  className={errors.guestName ? 'col-md-12 form__content mb-0 validate_failed' : 'col-md-12 form__content mb-0'}
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    errors.guestName = ''
                  }}
                />
                
              </div>
              <div className="row pl-3 pr-3">
              <div className="col-md-4">
              <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
                   </div>
              <div className="col-md-4">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
              </div>
              </div>
              <div className="row pl-3 pr-3">
                <input
                  type="text"
                  className={errors.phone ? 'booker-phone form__content col-md-12 validate_failed' : 'booker-phone form__content col-md-12'}
                  id=""
                  value={phone}
                  placeholder={t("service_massage.phone_number")}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    errors.phone = ''
                  }

                  }
                />
                
                  <input
                  type="text"
                  className={errors.email ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                  id=""
                  value={email}
                  placeholder={t("service_massage.email")}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    errors.email = ''
                  }}
                />
               
                <Flatpickr
              value={startDate}
              options={{
                minDate: 'today',
                dateFormat: "Y-m-d",
              }}
              className= {errors.startDate ? 'col-md-6 form__content webkit-appearance mr-0 validate_failed' : 'col-md-6 form__content webkit-appearance mr-0'}
              placeholder={t("service_massage.date")}
              onChange={(dates) => {
                setStartDate(dates[0]);
                errors.startDate = ''
              }}
            />
            
                <Flatpickr
                  value={startTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    maxTime: "21:30",
                    time_24hr: true,
                  }}
                  placeholder={t("service_massage.time")}
                  onChange={handleStartTimeChange}
                  className={errors.startTime ? 'col-md-6 form__content webkit-appearance mr-0 validate_failed' : 'col-md-6 form__content webkit-appearance mr-0'}
                />
               
                <select
                  value={option}
                  className={errors.option ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                  onChange={(e) => {
                    setOption(e.target.value);
                  }}
                >
                  <option value="40 minutes">40 {t("service_massage.minutes")}</option>
                  <option value="70 minutes">70 {t("service_massage.minutes")}</option>
                  <option value="100 minutes">100 {t("service_massage.minutes")}</option>
                </select>
                <textarea
                  className="text-note"
                  cols="40"
                  rows="6"
                  placeholder={t("service_massage.special")}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
  
                <div className="row justify-content-center">
                  <button
                    id="send"
                    class="button-57 send-btn col-3 col-md-6"
                    type="submit"
                  >
                    <span class="text" style={{ color: "#fff" }}>
                      {t('reservation.send')}
                    </span>
                    <span className="d-flex align-item-center">
                      <i
                        class="fa-sharp fa-regular fa-paper-plane green"
                        style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
              </form>
            </Modal.Body>
          </div>
          <div className="col-md-6">
            <div className="space-line">
              <div className="row justify-content-center">
                <div className="col-6 col-md-6">
                  <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png" />
                </div>
              </div>
            </div>
            <Modal.Body>
              <h2>{t("service_massage.reservation2")}</h2>
              <div className="btn_container mt-4">
                <button className="button-57 call-btn p-0">
                  <a className="d-block" href="tel:+84.24.3862 0620">
                    <i
                      class="fa-solid fa-phone purple"
                      style={{ lineHeight: "3.8rem" }}
                    ></i>
                  </a>
                  <span className="w-100">
                    <a className="d-block call-after" href="tel:+84.24.3862 0620">
                      +84.24.3862 0620
                    </a>
                  </span>
                </button>
              </div>
              <div className="room__container mt-5">
                <div className="gg-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.90076034504!2d105.74832752067798!3d21.03543478734608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab149718acdb%3A0xb77ce3d86ae19183!2sAzumaya%20Hotel%20Linh%20Lang!5e0!3m2!1sen!2s!4v1704439192351!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer>
          <button
            class="button-57 close-btn"
            role="button"
            onClick={props.onHide}
          >
            <span class="text" style={{ color: "#fff" }}>
              {t('service_massage.close')}
            </span>
            <span>
              <i
                class="fa-solid fa-xmark red"
                style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
              ></i>
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MassageDaNangModal(props) {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [guestName, setGuestName] = useState('');
    const [option, setOption] = useState('40 minutes');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [gender, setGender] = useState('Mr.');
    const [errors, setErrors] = useState('')
    const validateEmail = (email) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const validate = () => {
      let errors = {}
      let isVaLid = true
    
      if (!startDate) {
        errors.startDate = 'required';
        isVaLid = false
      }
      if (!startTime) {
        errors.startTime = 'required';
        isVaLid = false
      } 
      if (!guestName) {
        errors.guestName = 'required';
        isVaLid = false
      } 
      if (!gender) {
        errors.gender = 'required';
        isVaLid = false
    
      } 
      if (!option) {
        errors.option = 'required';
        isVaLid = false
    
      } 
      else if (!validateEmail(email)) {
        errors.email = 'Invalid email format';
        isVaLid = false
    
      }
      if (!phone) {
        errors.phone = 'required';
        isVaLid = false
    
      } 
      if (!branch) {
        errors.branch = 'required';
        isVaLid = false
    
      }
      setErrors(errors);
      return isVaLid
    }
    const handleStartTimeChange = (selectedDates) => {
      if (selectedDates.length > 0) {
        const selectedDate = new Date(selectedDates[0]);
        const timeString = selectedDate.toTimeString().split(" ")[0];
        setStartTime(timeString);
      } else {
        setStartTime(null);
      }
    };
    const handleSubmit = async(e) => {
      const dataObject = {
        startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
        startTime,
        guestName,
        gender,
        option,
        phone,
        email,
        branch,
        specialRequest,
        language,
        deviceType
      }
      console.log(dataObject);
      e.preventDefault()
      if(validate()){
        const token = "73344833-5b52-4403-9255-695907647688"
        const source = await sendMassageRequest(dataObject, token)
        navigate (`/massage/thank-you/${city}`)
      }else{
        alert(`Please ensure that all required fields are completed`)
      }
      
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {t("service_massage.modal_titleDN")}
          </Modal.Title>
          <Button variant="light" onClick={props.onHide}>
            <i class="fa-solid fa-xmark purple"></i>
          </Button>
        </Modal.Header>
        <div className="row p-5">
          <div className="col-md-6 massage_reservation">
            <Modal.Body>
            <form onSubmit={handleSubmit}>
              <h2>{t("service_massage.reservation1")}</h2>
              <div className="row pl-3 pr-3">
              <input
                  placeholder={t("service_massage.guest_name")}
                  type="text"
                  className={errors.guestName ? 'col-md-12 form__content mb-0 validate_failed' : 'col-md-12 form__content mb-0'}
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    errors.guestName = ''
                  }}
                />
                
              </div>
              <div className="row pl-3 pr-3">
              <div className="col-md-4">
              <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
                   </div>
              <div className="col-md-4">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
              </div>
              </div>
              <div className="row pl-3 pr-3">
                <input
                  type="text"
                  className={errors.phone ? 'booker-phone form__content col-md-12 validate_failed' : 'booker-phone form__content col-md-12'}
                  id=""
                  value={phone}
                  placeholder={t("service_massage.phone_number")}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    errors.phone = ''
                  }

                  }
                />
                
                  <input
                  type="text"
                  className={errors.email ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                  id=""
                  value={email}
                  placeholder={t("service_massage.email")}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    errors.email = ''
                  }}
                />
               
                <Flatpickr
              value={startDate}
              options={{
                minDate: 'today',
                dateFormat: "Y-m-d",
              }}
              className= {errors.startDate ? 'col-md-6 form__content webkit-appearance mr-0 validate_failed' : 'col-md-6 form__content webkit-appearance mr-0'}
              placeholder={t("service_massage.date")}
              onChange={(dates) => {
                setStartDate(dates[0]);
                errors.startDate = ''
              }}
            />
            
                <Flatpickr
                  value={startTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    maxTime: "21:30",
                    time_24hr: true,
                  }}
                  placeholder={t("service_massage.time")}
                  onChange={handleStartTimeChange}
                  className={errors.startTime ? 'col-md-6 form__content webkit-appearance mr-0 validate_failed' : 'col-md-6 form__content webkit-appearance mr-0'}
                />
               
                <select
                  value={option}
                  className={errors.option ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                  onChange={(e) => {
                    setOption(e.target.value);
                  }}
                >
                  <option value="40 minutes">40 {t("service_massage.minutes")}</option>
                  <option value="70 minutes">70 {t("service_massage.minutes")}</option>
                  <option value="100 minutes">100 {t("service_massage.minutes")}</option>
                </select>
                <textarea
                  className="text-note"
                  cols="40"
                  rows="6"
                  placeholder={t("service_massage.special")}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
  
                <div className="row justify-content-center">
                  <button
                    id="send"
                    class="button-57 send-btn col-3 col-md-6"
                    type="submit"
                  >
                    <span class="text" style={{ color: "#fff" }}>
                    {t('reservation.send')}
                    </span>
                    <span className="d-flex align-item-center">
                      <i
                        class="fa-sharp fa-regular fa-paper-plane green"
                        style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
              </form>
            </Modal.Body>
          </div>
          <div className="col-md-6">
            <div className="space-line">
              <div className="row justify-content-center">
                <div className="col-6 col-md-6">
                  <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png" />
                </div>
              </div>
            </div>
            <Modal.Body>
              <h2>{t("service_massage.reservation2")}</h2>
              <div className="btn_container mt-4">
                <button className="button-57 call-btn p-0">
                  <a className="d-block" href="tel:+84.236.3743 888">
                    <i
                      class="fa-solid fa-phone purple"
                      style={{ lineHeight: "3.8rem" }}
                    ></i>
                  </a>
                  <span className="w-100">
                    <a className="d-block call-after" href="tel:+84.236.3743 888">
                      +84.236.3743 888
                    </a>
                  </span>
                </button>
              </div>
              <div className="room__container mt-5">
                <div className="gg-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.607453222497!2d108.21247711425566!3d16.08584744326651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142181558c6ded1%3A0xd9b07e55bf351cab!2sAzumaya+Hotel+Da+Nang!5e0!3m2!1svi!2s!4v1480501419661"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer>
          <button
            class="button-57 close-btn"
            role="button"
            onClick={props.onHide}
          >
            <span class="text" style={{ color: "#fff" }}>
              {t('service_massage.close')}
            </span>
            <span>
              <i
                class="fa-solid fa-xmark red"
                style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
              ></i>
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MassageThaiVanLung1Modal(props) {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [guestName, setGuestName] = useState('');
    const [option, setOption] = useState('40 minutes');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [gender, setGender] = useState('Mr.');
    const [errors, setErrors] = useState('')
    const validateEmail = (email) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const validate = () => {
      let errors = {}
      let isVaLid = true
    
      if (!startDate) {
        errors.startDate = 'required';
        isVaLid = false
      }
      if (!startTime) {
        errors.startTime = 'required';
        isVaLid = false
      } 
      if (!guestName) {
        errors.guestName = 'required';
        isVaLid = false
      } 
      if (!gender) {
        errors.gender = 'required';
        isVaLid = false
    
      } 
      if (!option) {
        errors.option = 'required';
        isVaLid = false
    
      } 
      else if (!validateEmail(email)) {
        errors.email = 'Invalid email format';
        isVaLid = false
    
      }
      if (!phone) {
        errors.phone = 'required';
        isVaLid = false
    
      } 
      if (!branch) {
        errors.branch = 'required';
        isVaLid = false
    
      }
      setErrors(errors);
      return isVaLid
    }
    const handleStartTimeChange = (selectedDates) => {
      if (selectedDates.length > 0) {
        const selectedDate = new Date(selectedDates[0]);
        const timeString = selectedDate.toTimeString().split(" ")[0];
        setStartTime(timeString);
      } else {
        setStartTime(null);
      }
    };
    const handleSubmit = async(e) => {
      const dataObject = {
        startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
        startTime,
        guestName,
        option,
        gender,
        phone,
        email,
        branch,
        specialRequest,
        language,
        deviceType
      }
      console.log(dataObject);
      e.preventDefault()
      if(validate()){
        const token = "73344833-5b52-4403-9255-695907647688"
        const source = await sendMassageRequest(dataObject, token)
        navigate (`/massage/thank-you/${city}`)
      }else{
        alert(`Please ensure that all required fields are completed`)
      }
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {t("service_massage.modal_titleHCM")}
          </Modal.Title>
          <Button variant="light" onClick={props.onHide}>
            <i class="fa-solid fa-xmark purple"></i>
          </Button>
        </Modal.Header>
        <div className="row p-5">
          <div className="col-md-6 massage_reservation">
            <Modal.Body>
            <form onSubmit={handleSubmit}>
              <h2>{t("service_massage.reservation1")}</h2>
              <div className="row pl-3 pr-3">
              <input
                  placeholder={t("service_massage.guest_name")}
                  type="text"
                  className={errors.guestName ? 'col-md-12 form__content mb-0 validate_failed' : 'col-md-12 form__content mb-0'}
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    errors.guestName = ''
                  }}
                />
                
              </div>
              <div className="row pl-3 pr-3">
              <div className="col-md-4">
              <input
                   type="radio"
                   name="gender"
                   id="gMale"
                   value="Mr."
                   checked={gender === "Mr."}
                   onChange={(e) => setGender(e.target.value)}
                   
                 />
                 <label htmlFor="gMale">{t("reservation.mr")}</label>
                   </div>
              <div className="col-md-4">
                 <input
                   type="radio"
                   name="gender"
                   id="gFemale"
                   value="Ms."
                   checked = {gender === "Ms."}
                   onChange={(e) => setGender(e.target.value)}
                 />
                 <label htmlFor="gFemale">{t("reservation.ms")}</label>
              </div>
              </div>
              <div className="row pl-3 pr-3">
                <input
                  type="text"
                  className={errors.phone ? 'booker-phone form__content col-md-12 validate_failed' : 'booker-phone form__content col-md-12'}
                  id=""
                  value={phone}
                  placeholder={t("service_massage.phone_number")}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    errors.phone = ''
                  }

                  }
                />
                
                  <input
                  type="text"
                  className={errors.email ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                  id=""
                  value={email}
                  placeholder={t("service_massage.email")}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    errors.email = ''
                  }}
                />
               
                <Flatpickr
              value={startDate}
              options={{
                minDate: 'today',
                dateFormat: "Y-m-d",
              }}
              className= {errors.startDate ? 'col-md-6 form__content webkit-appearance mr-0 validate_failed' : 'col-md-6 form__content webkit-appearance mr-0'}
              placeholder={t("service_massage.date")}
              onChange={(dates) => {
                setStartDate(dates[0]);
                errors.startDate = ''
              }}
            />
            
                <Flatpickr
                  value={startTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    maxTime: "21:30",
                    time_24hr: true,
                  }}
                  placeholder={t("service_massage.time")}
                  onChange={handleStartTimeChange}
                  className={errors.startTime ? 'col-md-6 form__content webkit-appearance mr-0 validate_failed' : 'col-md-6 form__content webkit-appearance mr-0'}
                />
               
                <select
                  value={option}
                  className={errors.option ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                  onChange={(e) => {
                    setOption(e.target.value);
                  }}
                >
                  <option value="40 minutes">40 {t("service_massage.minutes")}</option>
                  <option value="70 minutes">70 {t("service_massage.minutes")}</option>
                  <option value="100 minutes">100 {t("service_massage.minutes")}</option>
                </select>
                <textarea
                  className="text-note"
                  cols="40"
                  rows="6"
                  placeholder={t("service_massage.special")}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
  
                <div className="row justify-content-center">
                  <button
                    id="send"
                    class="button-57 send-btn col-3 col-md-6"
                    type="submit"
                  >
                    <span class="text" style={{ color: "#fff" }}>
                    {t('reservation.send')}
                    </span>
                    <span className="d-flex align-item-center">
                      <i
                        class="fa-sharp fa-regular fa-paper-plane green"
                        style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
              </form>
            </Modal.Body>
          </div>
          <div className="col-md-6">
            <div className="space-line">
              <div className="row justify-content-center">
                <div className="col-6 col-md-6">
                  <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png" />
                </div>
              </div>
            </div>
            <Modal.Body>
              <h2>{t("service_massage.reservation2")}</h2>
              <div className="btn_container mt-4">
                <button className="button-57 call-btn p-0">
                  <a className="d-block" href="tel:+84.236.3743 888">
                    <i
                      class="fa-solid fa-phone purple"
                      style={{ lineHeight: "3.8rem" }}
                    ></i>
                  </a>
                  <span className="w-100">
                    <a className="d-block call-after" href="tel:+84.236.3743 888">
                      +84.236.3743 888
                    </a>
                  </span>
                </button>
              </div>
              <div className="room__container mt-5">
                <div className="gg-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4155081221156!2d106.70226331420403!3d10.779454062086852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48e8ac8da7%3A0xdf1add902008fcb9!2sAzumaya+Hotel!5e0!3m2!1svi!2s!4v1480500414644"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer>
          <button
            class="button-57 close-btn"
            role="button"
            onClick={props.onHide}
          >
            <span class="text" style={{ color: "#fff" }}>
              {t('service_massage.close')}
            </span>
            <span>
              <i
                class="fa-solid fa-xmark red"
                style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
              ></i>
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    );
  }   
  const [selectedTab, setSelectedTab] = useState(0)
  const serviceTitle = t('service.service_name', {returnObjects: true})
  const a = t("header.service")
  const b = t("header.title")
  const c = a + " | " + b
  const d = t("header.breakfast")
  const e = t("header.title")
  const f = d + " | " + e 
  const g = t("header.roten")
  const h = t("header.title")
  const i = g + " | " + h
  const j = t("header.massage")
  const k = t("header.title")
  const l = j + " | " + k
  const [title, setTitle] = useState('')
  const [pageTitle, setPageTitle] = useState('');
  
  useEffect(() => {
    switch (location.pathname) {
      case '/breakfast/':
        setSelectedTab(0);
        setTitle(f)
        setPageTitle(d)
        break;
      case '/rotenburo/':
        setSelectedTab(1);
        setTitle(i)
        setPageTitle(g)
        break;
        case '/massage/':
        setTitle(l)
        setSelectedTab(2);
        setPageTitle(j)
        break;
      default:
        setSelectedTab(0);
        setTitle(c)
        setPageTitle(a)
         
    }
  }, []);
  console.log(pageTitle);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  }
  const breakfast_hour = t("service_breakfast.table1", { returnObjects: true });
  const breakfast_price = t("service_breakfast.table2", { returnObjects: true });
  const rotenHCM_hour = t("service_roten.table_hcm1", { returnObjects: true });
  const rotenHCM_price = t("service_roten.table_hcm2", { returnObjects: true });
  const rotenHN_hour = t("service_roten.table_hn1", { returnObjects: true });
  const rotenHN_price = t("service_roten.table_hn2", { returnObjects: true });
  const rotenDN_hour = t("service_roten.table_dn1", { returnObjects: true });
  const rotenDN_price = t("service_roten.table_dn2", { returnObjects: true });
  const rotenHP_hour = t("service_roten.table_hp1", { returnObjects: true });
  const rotenHP_price = t("service_roten.table_hp2", { returnObjects: true });
  const specialNote = t("service_roten.special_note", { returnObjects: true });
  const massageHN_hour = t("service_massage.table_ll1", { returnObjects: true  });
  const massageHN_price = t("service_massage.table_ll2", {returnObjects: true });
  const massageDN_hour = t("service_massage.table_dn1", {returnObjects: true });
  const massageDN_price = t("service_massage.table_dn2", {returnObjects: true});
  const massageHCM_hour = t("service_massage.table_tvl1", {returnObjects: true});
  const massageHCM_price = t("service_massage.table_tvl2", {returnObjects: true});
  const specialNoteMassage = t("service_massage.special_note", {returnObjects: true});

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  

  return (
    <>
    <HelmetLayout title = {title}/>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{pageTitle}</h1>
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
                  <Link to="/">
                    <i className="fa-solid fa-house" />
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/service/">
                    {t('header.service')}
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
            className="col-md-12 p-0"
            selectedIndex={selectedTab}
            onSelect={handleTabSelect}
            selectedTabClassName="service__active"
            style={{ marginTop: 20 }}
          >
            <TabList className="service__list">
              {serviceTitle.map((item)=>(
              <Tab className="service">
                {item.name}
              </Tab>
              ))}
              {/* <Tab className="service">
                <a
                  href="http://localhost:3000/service"
                  className="location_link"
                >
                  {t('header.cambodia')}
                </a>
              </Tab> */}
            </TabList>
            <TabPanel>
              <div className="service__content pt-0">
                <div className="row justify-content-center">
                  <Link className="image-holder p-0" to="">
                    <img src={t("service_breakfast.image")} alt="breakfast azumaya hotel" />
                  </Link>
                  <div className="row">
                    <div
                      className="col-md-6 left"
                      style={{ borderRight: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_breakfast.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {breakfast_hour.map((item) => (
                            <tr>
                              <td width="20%">{item.row1}</td>
                              <td width="30%" className="right">
                                {item.row2}
                              </td>
                              <td>{item.row4}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 left">
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_breakfast.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {breakfast_price.map((item) => (
                            <tr>
                              <td className="left" width="30%">
                                {item.row1}
                              </td>
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
                  <Link className="image-holder p-0" to="">
                    <img
                      style={{ padding: "5px 22px" }}
                      src={t("service_roten.image")}
                      alt="rotenburo open air bath azumaya hotel"
                    />
                  </Link>
                  <div className="row">
                    <div
                      className="col-md-6 left pb-5"
                      style={{ borderBottom: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="service_branch">{t("header.hcm")}</div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table mt-5">
                          {rotenHCM_hour.map((item) => (
                            <tr>
                              <td width="10%">{item.row1}</td>
                              <td width="20%">{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="service_table-note mt-3">
                          {t("service_roten.hcm_note")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table
                          className="service_table"
                          style={{ width: "500px" }}
                        >
                          {rotenHCM_price.map((item) => (
                            <tr>
                              <td width="50%">{item.row1}</td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div
                      className="col-md-6 left service_roten-area"
                      style={{ borderBottom: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="service_branch">{t("header.hn")}</div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="row service_roten">
                          <div
                            style={{ paddingLeft: "10%" }}
                            className="col-md-6"
                          >
                            <div className="service_table-note">
                              {t("service_roten.hn_note1")}
                            </div>
                            <table className="service_table">
                              {rotenHN_hour.map((item) => (
                                <tr>
                                  <td width="1%">{item.row1}</td>
                                  <td width="10%">{item.row2}</td>
                                </tr>
                              ))}
                            </table>
                          </div>
                          <div
                            style={{ paddingLeft: "10%" }}
                            className="col-md-6 service_roten-female"
                          >
                            <div className="service_table-note">
                              {t("service_roten.hn_note2")}
                            </div>
                            <table className="service_table">
                              <tr></tr>
                              {rotenHN_hour.map((item) => (
                                <tr>
                                  <td width="1%">{item.row3}</td>
                                  <td width="10%">{item.row4}</td>
                                </tr>
                              ))}
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="service_table-note">
                          {t("service_roten.hn_note4")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table mb-5">
                          {rotenHN_price.map((item) => (
                            <tr>
                              <td width="20%" className="left">
                                {item.row1}
                              </td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-md-6 left pb-5"
                      style={{ borderBottom: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="service_branch">{t("header.dn")}</div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {rotenDN_hour.map((item) => (
                            <tr>
                              <td width="20%">{item.row1}</td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {rotenDN_price.map((item) => (
                            <tr>
                              <td>{item.row1}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div
                      className="col-md-6 left pb-5 service_roten-area"
                      style={{ borderBottom: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="service_branch">{t("header.hp")}</div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {rotenHP_hour.map((item) => (
                            <tr>
                              <td width="20%">{item.row1}</td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header mt-5"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {rotenHP_price.map((item) => (
                            <tr>
                              <td>{item.row1}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div
                      className="service_table-note"
                      style={{
                        borderBottom: "solid 3px #482979",
                        width: "550px",
                        paddingBottom: "2rem",
                      }}
                    >
                      {specialNote.map((item) => (
                        <div className="left">{item.content}</div>
                      ))}
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div
                      className="service_table-note"
                      style={{ width: "550px", paddingBottom: "2rem" }}
                    >
                      {specialNote.map((item) => (
                        <div>{item.fe_content}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content p-0">
                <div className="row justify-content-center">
                  <Link className="image-holder p-0" to="">
                    <img
                      style={{ padding: "5px 22px" }}
                      className="image-holder"
                      src={t('service_massage.image')}
                      alt="massage azumaya hotel"
                    />
                  </Link>
                  <div className="row">
                    <div
                      className="col-md-4 mt-5"
                      style={{ borderRight: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="service_branch mb-0">
                          {t("header.hn")}
                        </div>
                      </div>
                      <div className="massage_branch-note mt-2">
                        ({t("branch.ll")})
                      </div>
                      <div className="d-flex justify-content-start">
                        <div className="service_header">
                          {t("service_massage.openHour")}
                        </div>
                      </div>
                      <table className="massage_table">
                        {massageHN_hour.map((item) => (
                          <tr>
                            <td>{item.row1}</td>
                            <td>{item.row2}</td>
                          </tr>
                        ))}
                      </table>
                      <div className="d-flex justify-content-start">
                        <div
                          className="service_header"
                          style={{ marginTop: "20px" }}
                        >
                          {t("service_massage.price")}
                        </div>
                      </div>
                      <table className="massage_table">
                        {massageHN_price.map((item) => (
                          <tr>
                            <td>{item.row1}</td>
                            <td>{item.row2}</td>
                          </tr>
                        ))}
                      </table>
                      <div className="d-flex justify-content-center mt-5">
                        <button
                          class="button-57 call-btn"
                          role="button"
                          onClick={() => {
                            setModalShow(true)
                            setBranch('Linh Lang')
                            // setBranch('Test')
                            setCity('hotel-hn')
                          }}
                        >
                          <span class="text">
                            {t("service_massage.reserve")}
                          </span>
                          <span><i class="fa-solid fa-circle-chevron-right"></i></span>
                        </button>
                        <MassageLinhLangModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-4 mt-5"
                      style={{ borderRight: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div className="service_branch mb-2">
                          {t("header.dn")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <div
                          className="service_header"
                          style={{ marginTop: "25px" }}
                        >
                          {t("service_massage.openHour")}
                        </div>
                      </div>
                      <table className="massage_table">
                        {massageDN_hour.map((item) => (
                          <tr>
                            <td>{item.row1}</td>
                            <td>{item.row2}</td>
                          </tr>
                        ))}
                      </table>
                      <div className="d-flex justify-content-start">
                        <div
                          className="service_header"
                          style={{ marginTop: "20px" }}
                        >
                          {t("service_massage.price")}
                        </div>
                      </div>
                      <table className="massage_table">
                        {massageDN_price.map((item) => (
                          <tr>
                            <td>{item.row1}</td>
                            <td>{item.row2}</td>
                          </tr>
                        ))}
                      </table>
                      <div className="d-flex justify-content-center mt-5">
                        <button
                          class="button-57 call-btn"
                          role="button"
                          onClick={() => {
                            setModalShow1(true)
                            setBranch('Da Nang')
                            setCity('hotel-dn')
                          }}
                        >
                          <span class="text">
                            {t("service_massage.reserve")}
                          </span>
                          <span><i class="fa-solid fa-circle-chevron-right"></i></span>
                        </button>
                        <MassageDaNangModal
                          show={modalShow1}
                          onHide={() => setModalShow1(false)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mt-5">
                      <div className="d-flex justify-content-center">
                        <div className="service_branch mb-0">
                          {t("header.hcm")}
                        </div>
                      </div>
                      <div className="massage_branch-note mt-2">
                        ({t("branch.tvl1")})
                      </div>
                      <div className="d-flex justify-content-start">
                        <div className="service_header">
                          {t("service_massage.openHour")}
                        </div>
                      </div>
                      <table className="massage_table">
                        {massageHCM_hour.map((item) => (
                          <tr>
                            <td>{item.row1}</td>
                            <td>{item.row2}</td>
                          </tr>
                        ))}
                      </table>
                      <div className="d-flex justify-content-start">
                        <div
                          className="service_header"
                          style={{ marginTop: "20px" }}
                        >
                          {t("service_massage.price")}
                        </div>
                      </div>
                      <table className="massage_table">
                        {massageHCM_price.map((item) => (
                          <tr>
                            <td>{item.row1}</td>
                            <td>{item.row2}</td>
                          </tr>
                        ))}
                      </table>
                      <div className="d-flex justify-content-center mt-5">
                        <button
                          class="button-57 call-btn"
                          role="button"
                          onClick={() => {
                            setModalShow2(true)
                            setBranch('Thai Van Lung 1')
                            setCity('hotel-hcm')
                          }}
                        >
                          <span class="text">
                            {t("service_massage.reserve")}
                          </span>
                          <span><i class="fa-solid fa-circle-chevron-right"></i></span>
                        </button>
                        <MassageThaiVanLung1Modal
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div
                      className="service_table-note"
                      style={{ width: "360px", borderTop: "3px solid #482979"}}
                    >
                     <br /> 
                      {specialNoteMassage.map((item) => (
                        <div className="left">{item.content}</div>
                       
                      ))}
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
}
