import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
function Reservation() {
  //lang
  const {t} = useTranslation()
  const bookingData = t('booking', {returnObjects:true})
  const [text, setText] = useState(t('reservation.more'))
  const city = t('booking.city', {returnObjects:true})
  const branch = t('booking.branch', {returnObjects:true})
  const room = t('roomHN.hbt1', {returnObjects:true})
  const reservationData = t('reservation', {returnObjects:true})
  const payMethod = t('reservation.method', {returnObjects:true})
  const requireItem = t('reservation.requirement-item', {returnObjects:true})
  const [selectedCity, setSelectedCity] = useState("Ho Chi Minh");
  const [selectedBranch, setSelectedBranch] = useState("Le Thanh Ton");
  const [paymentMethod, setPaymentMethod] = useState()
  const flatBranches = [].concat(...branch)
  const filteredBranches = flatBranches.filter(b => b.city_name == selectedCity)
  const flatRoom = [].concat(...room)
  const filteredRoom = flatRoom.filter(r => r.branch_name == selectedBranch)
  console.log(filteredRoom);

  //validate
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [roomAmount, setRoomAmount] = useState()
  const [guestAmount, seGuestAmount] = useState()
  const [familyName, setFamilyName] = useState()
  const [givenName, setGivenName] = useState()
  const [selectedDay, setSelectedDay] = useState()
  const [selectedMonth, setSelectedMonth] = useState()
  const [selectedYear, setSelectedYear] = useState()
  const [gender, setGender] = useState()
  const [company, setCompany] = useState()
  const [secondFamilyName, setSecondFamilyName] = useState()
  const [secondGivenName, setSecondGivenName] = useState()
  const [secondGender,  setSecondGender] = useState()
  const [sameBooker, setSameBooker] = useState()
  const [bookerName, setBookerName] = useState("Same as person who will stay")
  const [differentBooker, setDifferentBooker] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [roomType, setRoomType] = useState()
  const [contract, setContract] = useState()
  const [vat, setVat] = useState()
  const [request, setRequest] = useState()
  const [specialRequest, setSpecialRequest] = useState()

  //function
  const min = 1;
  const max = 20;
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(value);
  };
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState(0)
  const [statusC, setStatusC] = useState(0)
  const [showButton, setShowButton] = useState(1)

  const handleClick = () => {
    text === t('reservation.more') ? setText(t('reservation.remove')) : setText(t('reservation.more'))
    setShow(!show)
  }
  const handleSelected =(status, e) => {
    setStatus(status)
  }
  const handleSelectedCompany =(statusC) => {
    setStatusC(statusC)
  }
  const validateForm=() => {

        alert(
          selectedCity + ' ' +
          selectedBranch+ ' ' + 
          startDate+ ' ' +
          endDate+ ' ' +
          startTime+ ' ' +
          endTime+ ' ' +
          roomAmount+ ' ' +
          guestAmount+ ' ' +
          familyName+ ' ' +
          givenName+ ' ' +
          gender+ ' ' +
          selectedDay+ ' ' +
          selectedMonth+ ' ' +
          selectedYear+ ' ' +
          secondFamilyName+ ' ' +
          secondGivenName+ ' ' +
          secondGender+ ' ' +
          bookerName+ ' ' +
          differentBooker+ ' ' +
          email+ ' ' +
          phone+ ' ' +
          roomType+ ' ' +
          contract+ ' ' + 
          vat+ ' ' +
          paymentMethod+ ' ' +
          request+ ' ' +
          specialRequest
          )
      
  }
function DayPicker() {
  const minDay = -1
  const maxDay = 29
    const birthDay = new Date().getDay()
    console.log(selectedDay);
    const onHandleChange = (e) => {
      setSelectedDay(e.target.value)
    };
    const options = []
    for (let i = minDay; i <= maxDay; i++) {
      const day = birthDay + i
      options.push(<option value={day} key={day}>{day}</option>)
    }
    return (
        <select 
        className="col-md-2 form__content" 
        value={selectedDay} 
        onChange={onHandleChange}>
          <option className="first-opt" disabled selected>{t('reservation.day')}</option>
          {options}
        </select>
    );
  }
function MonthPicker() {
    const minMonth = -10
    const maxMonth = 1
    const birthMonth = new Date().getMonth()
    console.log(selectedMonth);
   
    const onHandleChange = (e) => {
      setSelectedMonth(e.target.value)
    }
    const options = []
    for(let i = minMonth; i <= maxMonth; i++) {
      const month = birthMonth + i
      options.push(<option value={month} key={month}>{month}</option>)
    }
    return (
      <select 
      className="col-md-2 form__content"
      value={selectedMonth}
      onChange={onHandleChange}>
          <option className="first-opt"  disabled selected>{t('reservation.month')}</option>
        {options}
      </select>
    )

  }
function YearPicker() {
    const minYear = -98
    const maxYear = -18
    const birthYear = new Date().getFullYear()
    console.log(selectedYear);
   
    const onHandleChange = (e) => {
      setSelectedYear(e.target.value)
    }
    const options = []
    for(let i = minYear; i <= maxYear; i++) {
      const year = birthYear + i
      options.push(<option value={year} key={year}>{year}</option>)
    }
    return (
      <select 
      className="col-md-2 form__content"
      value={selectedYear}
      onChange={onHandleChange}>
        <option className="first-opt" disabled selected>{t('reservation.year')}</option>
        {options}
      </select>
    )

  }
function MoreButton() {
    return(
      <div className="row">
                  <div className="col-md-12 offset-4">
                    <button className="base__btn btn__send" onClick={handleClick}>{text}</button>
                  </div>
                  {show && <SecondGuest />}
                </div>
    )
  }
function SecondGuest() {
    return(
      <div className="container">
      <div className="row guest-information">
        <div className="col-md-2 name__title">
          {t('reservation.name')}
        </div>
        <input
          placeholder={t('reservation.family-name')}
          type="text"
          className="col-md-2 form__content"
          onChange={(e)=> setSecondFamilyName(e.target.value)}
        />

        <input
          placeholder={t('reservation.given-name')}
          type="text"
          className=" col-md-2 form__content"
          onChange={(e)=> setSecondGivenName(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col-md-2 name__title">
          {t('reservation.gender')}
        </div>
        <div className="col-md-2">
          <input
            type="radio"
            name="gender"
            id="gMale"
            value="male"
            onChange={(e)=>setGender(e.target.value)}
          />
          <label htmlFor="gMale">
            {t('reservation.mr')}
          </label>
        </div>
        <div className="col-md-2">
          <input type="radio" name="gender" id="gFemale" value="female" />
          <label htmlFor="gFemale">
          {t('reservation.ms')}
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 name__title">
        {t('reservation.birth-date')}
        </div>
        {<DayPicker />}
        {<MonthPicker />}
        {<YearPicker />}
      </div>
      </div>
    )
  }
function ShowBooker() {
  return(
    <div className="row">
    <div className="col-md-2 name__title">{t('reservation.name')}</div>
      <input
        type="text"
        className="booker-name form__content col-md-2"
        placeholder={t('reservation.name')}
        onChange={(e) => setBookerName(e.target.value)}
      />
      </div>
  )
  }
function ShowCompanyName() {
    return (
      <div className="row">
      <div className="col-md-2 name__title">{t('reservation.company')}</div>
        <input
          type="text"
          className="booker-name form__content col-md-2"
          id=""
          placeholder={t('reservation.company')}
          onChange={(e) => setCompany(e.target.value)}
        />
        <span className="required__note">{t('reservation.company-note')}</span>
        </div>
    )
  }
return (
      <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('reservation.title')}</h1>
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
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
              <div className="container">
                <div className=" reservation__container">
              <div className="reserve-container">
                <div className="row">
                  <div className="col-md-2 name__title">
                  {t('reservation.choice')}
                    <span className="required__note">*</span>
                  </div>
                  <select
                    value={selectedCity}
                    className="col-md-2 form__content" 
                    id={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value)
                    }}
                  >
                    {city.map((item) => (
                      <option key={item.id} value={item.city_name}>
                        {item.city_name}
                      </option>
                    ))}
                  </select>
                  <select 
                  value={selectedBranch}
                  className="col-md-2 form__content" 
                  disabled={!selectedCity}  
                  onChange={(e)=>setSelectedBranch(e.target.value)}>
                    {/* <option></option> */}
                    {filteredBranches.map((item) => (
                      <option key={item.branch_id} value={item.branch_name}>{item.branch_name}</option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">
                  {t('reservation.check-in')}
                    <span className="required__note">*</span>
                  </div>
                  <Flatpickr 
                  value={startDate}
                  options={{
                    minDate:'today'}} 
                  className="col-md-2 form__content webkit-appearance" 
                  placeholder={t('booking.date_in')} 
                  onChange={(startDate)=>{
                    setStartDate(startDate);
                    }} />
                  <div className="col-md-2 offset-2 name__title check-out-date">
                  {t('reservation.check-out')}
                    <span className="required__note">*</span>
                  </div>
                  <Flatpickr 
                  value={endDate}
                  options={{minDate:new Date(startDate)}} 
                  className="col-md-2 form__content webkit-appearance" 
                  placeholder={t('booking.date_out')} 
                  onChange={(endDate) =>{
                    setEndDate(endDate)
                  }} />
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">
                  {t('reservation.in-time')}
                    <small style={{ fontWeight: "600" }}>
                    {t('reservation.in-note')}
                    </small>
                  </div>
                  <Flatpickr 
                  value={startTime}
                  options={{
                  enableTime:true,
                  noCalendar: true,
                  minTime:'15:00',
                  time_24hr:true
                  }}
                  placeholder="Check in time"
                  onChange={(startTime)=> setStartTime(startTime)}
                  className="col-md-2 form__content webkit-appearance" />
                  <div className="col-md-2 offset-2 name__title check-out-time">
                  {t('reservation.out-time')}
                    <small style={{ fontWeight: 600 }}>
                    {t('reservation.out-note')}
                    </small>
                  </div>
                  <Flatpickr 
                  value={endTime}
                  options={{
                    enableTime:true,
                    noCalendar: true,
                    minTime:'00:00',
                    maxTime:'12:00',
                    time_24hr:true
                  }}
                  placeholder="Check out time"
                  onChange={(endTime => setEndTime(endTime))}
                  className="col-md-2 form__content webkit-appearance" />
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">
                  {t('reservation.room-kind')}
                    <span className="required__note">*</span>
                  </div>
                  <select 
                  className="col-md-2 form__content"
                  disabled={!selectedBranch}>
                  {filteredRoom.map((item)=>(
                    <option key={item.branch_id} value={item.name}>{item.name}</option>
                  ))}
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">
                  {t('reservation.room-amount')}
                    <span className="required__note">*</span>
                  </div>
                  <input 
                  type="number" 
                  value={value}
                  onChange={handleChange}
                  className="col-md-2 form__content" />
                  <div className="col-md-2 offset-0 offset-md-2 name__title">
                  {t('reservation.guest-amount')}
                    <span className="required__note">*</span>
                  </div>
                  <input 
                  type="number" 
                  min={1} 
                  max={4} 
                  value={showButton}
                  className="col-md-2 form__content"
                  onChange={(e)=>{
                  seGuestAmount(e.target.value)
                  setShowButton(e.target.value)}} />
                </div>
              </div>
              <div className="guest-container">
                <div className="row">
                  <div className="guest__information">
                  <div className="col-md-12 guest__name-title">{t('reservation.guest-info')}</div>
                  <div className="row">
                    <div className="col-md-2 name__title">
                    {t('reservation.name')}
                      <span className="required__note">*</span>
                      <small>{t('reservation.name-note')}</small>
                    </div>
                    <input
                      placeholder={t('reservation.family-name')}
                      type="text"
                      className="col-md-2 form__content"
                      onChange={(e) => {
                        setFamilyName(e.target.value)}}
                    />
                    <input
                      placeholder={t('reservation.given-name')}
                      type="text"
                      name="gName"
                      className=" col-md-2 form__content"
                      onChange={(e) => setGivenName(e.target.value)}
                    />
                    <span
                      className="col-md-4 required__note"
                    >
                      {t('reservation.name-required')}
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-md-2 name__title">
                    {t('reservation.gender')}
                      <span className="required__note">*</span>
                    </div>
                    <div className="col-md-2 form__group">
                      <input
                        type="radio"
                        name="gender"
                        id="gMale"
                        value="male"
                        onClick={(e)=>setGender(e.target.value)}
                      />
                      <label htmlFor="gMale">
                      {t('reservation.mr')}
                      </label>
                    </div>
                    <div className="col-md-2">
                      <input 
                      type="radio" 
                      name="gender" 
                      id="gFemale" 
                      value="female" 
                      onClick={(e)=>setGender(e.target.value)}
                      />
                      <label htmlFor="gFemale">
                      {t('reservation.ms')}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2 name__title">
                    {t('reservation.birth-date')}
                      <span className="required__note">*</span>
                    </div>
                       {<DayPicker />}
                       {<MonthPicker />}
                       {<YearPicker />}
                    </div>
                  {showButton >= 2 && <MoreButton />}
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.booker')}</div>
                  <div className="col-md-6">
                    <input
                      type="radio"
                      name="Booker"
                      id="booker"
                      value="Same as person who will stay"
                      checked = {status === 0}
                      onClick={(e) => {
                        handleSelected(0)
                        setSameBooker(e.target.value)
                      }}
                        
                    />
                    <label htmlFor="booker">{t('reservation.same-person')}</label>
                    <br />
                    <input
                      type="radio"
                      name="Booker"
                      id="booker"
                      value="Different with who will stay"
                      checked = {status === 1}
                      onClick={(e) => {
                        handleSelected(1)
                        setDifferentBooker(e.target.value)
                      }}
                    />
                    <label htmlFor="booker">{t('reservation.diff-person')}</label>
                  </div>
                </div>
                {status === 1 && <ShowBooker />}
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.email')}
                    <span className="col-md-2 required__note">*</span>
                  </div>
                    <input
                      type="text"
                      className="booker-email form__content col-md-2"
                      placeholder={t('reservation.email')}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                    <span className="col-md-8 required__note">
                        {t('reservation.email-note')}
                    </span>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.phone')}</div>
                    <input
                      type="text"
                      className="booker-phone form__content col-md-2"
                      id=""
                      placeholder={t('reservation.phone')}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span className="col-md-8 required__note">
                    {t('reservation.phone-note')}
                    </span>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.room-type')}</div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="roomType"
                      id="smk"
                      value={t('reservation.smk')}
                      onClick={(e)=> setRoomType(e.target.value)}
                    />
                    <label htmlFor="smk">{t('reservation.smk')}</label>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="roomType"
                      id="no-smk"
                      value={t('reservation.non-smk')}
                      onClick={(e)=> setRoomType(e.target.value)}   
                    />
                    <label htmlFor="no-smk">{t('reservation.non-smk')}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.contract')}</div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      id="hContract"
                      className="Contract"
                      value={t('reservation.n-cont')}
                      checked = {statusC == 0}
                      onClick={(e) => {
                        setContract(e.target.value);
                        handleSelectedCompany(0)
                      }}
                    />
                    <label htmlFor="hContract">{t('reservation.n-cont')}</label>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="contract"
                      id="hContract"
                      className="Contract"
                      value={t('reservation.h-cont')}
                      checked = {statusC == 1}
                      onClick={(e) => {
                        setContract(e.target.value);
                        handleSelectedCompany(1)
                      }}
                    />
                    <label htmlFor="hContract">{t('reservation.h-cont')}</label>
                  </div>
                </div>
                {statusC == 1 && <ShowCompanyName />}
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.vat-invoice')}</div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="vatInvoice"
                      id="no-need"
                      className="VATInvoice"
                      value={t('reservation.n-need')}
                      onClick={(e)=>setVat(e.target.value)}
                    />
                    <label htmlFor="no-need">{t('reservation.n-need')}</label>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="vatInvoice"
                      id="need"
                      className="VATInvoice"
                      value={t('reservation.need')}
                      onClick={(e)=>setVat(e.target.value)}
                    />
                    <label htmlFor="need">{t('reservation.need')}</label>
                    <br />
                  </div>
                  <span className="required__note">
                  {t('reservation.vat-note')}
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">{t('reservation.pay-method')}</div>
                  <select
                    style={{width:"350px"}}
                    value={paymentMethod}
                    className="col-md-2 form__content" 
                    id={paymentMethod}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value)
                    }}
                  >
                    {payMethod.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                </div>
              </div>
              </div>
              <div className="other-container">
                <div className="row">
                  <div className="col-md-2 name__title">
                  {t('reservation.requirement')}<br />
                    <small>{t('reservation.requirement-note')}</small>
                    </div>
                    <div className="col-md-6">
                    {requireItem.map(item => (
                        <>
                        <input
                        type="checkbox"
                        className="special"
                        id="spcRequire"
                        value={item.name}
                        onClick={(e)=>setRequest(e.target.value)}
                      />
                      <label htmlFor="spcRequire">{item.name}</label><br />
                      </>
                      ))}
                      <textarea
                      className="text-note"
                      cols="40"
                      rows="6"
                      placeholder={t('reservation.request')}
                      onChange={(e)=>setSpecialRequest(e.target.value)}
                    ></textarea>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12 offset-4">
                    <button
                    id="send"
                    className="base__btn btn__send"
                    onClick={()=>validateForm()}>
                      {t('reservation.send')}
                    </button>
                    </div>
                </div>
                <div className="row">
                  <span className="required__note pre-line">
                  {t('reservation.attention-note')}
                  </span>
                </div>
              </div>
              </div>
              </div> 
              </div> 
  );
}
export default Reservation;
