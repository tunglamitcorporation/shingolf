import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { sendReservationRequest } from "../../api/reservation";
function Reservation() {
  const { t } = useTranslation();
  const location = useLocation();
  const receivedData = location.state || {};

  const [text, setText] = useState(`${t("reservation.more")}`);
  const city = t("booking.city", { returnObjects: true });
  const branch = t("booking.branch", { returnObjects: true });
  const room = t("booking.room", { returnObjects: true });
  const payMethod = t("reservation.method", { returnObjects: true });
  const earlyInNote =t("reservation.earlyIn_note", { returnObjects: true });
  const lateOutNote =t("reservation.lateOut_note", { returnObjects: true });
  const [selectedCity, setSelectedCity] = useState(
    receivedData ? receivedData.selectedCity : ""
  );
  const [selectedBranch, setSelectedBranch] = useState(
    receivedData ? receivedData.selectedBranch : ""
  );
  const [selectedRoom, setSelectedRoom] = useState(
    receivedData ? receivedData.selectedRoom : ""
  );
  const [paymentMethod, setPaymentMethod] = useState();

  const flatBranches = [].concat(...branch);
  const filteredBranches = flatBranches.filter(
    (b) => b.city_id == selectedCity
  );
  const flatRoom = [].concat(...room);
  const filteredRoom = flatRoom.filter((r) => r.branch_id == selectedBranch);
  console.log(filteredBranches);
  console.log(filteredRoom);
  const cityParam = selectedCity ? selectedCity.replace(/\s+/g, "-") : "";
  console.log(selectedRoom);
  const [startDate, setStartDate] = useState(
    receivedData ? receivedData.startDate : ""
  );
  const [endDate, setEndDate] = useState(
    receivedData ? receivedData.endDate : ""
  );
  const [startTime, setStartTime] = useState("15:00");
  const [endTime, setEndTime] = useState("12:00");
  const [roomAmount, setRoomAmount] = useState();
  const [guestAmount, seGuestAmount] = useState();
  const [familyName, setFamilyName] = useState();
  const [givenName, setGivenName] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [gender, setGender] = useState();
  const [company, setCompany] = useState();
  const [sameBooker, setSameBooker] = useState("Same as person who will stay");
  const [bookerName, setBookerName] = useState();
  const [differentBooker, setDifferentBooker] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [roomType, setRoomType] = useState();
  const [contract, setContract] = useState("No Contract");
  const [vat, setVat] = useState();
  const [specialRequest, setSpecialRequest] = useState();
  const [pickupTime, setPickupTime] = useState();
  const [pickupNumber, setPickupNumber] = useState();
  const [dropOffTime, setDropOfTime] = useState();
  const [dropOffNumber, setDropOffNumber] = useState();
  const [earlyIn, setEarlyIn] = useState();
  const [lateOut, setLateOut] = useState();

  const handleStartTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setStartTime(timeString);
    } else {
      setStartTime(null);
    }
  };
  const handleEndTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setEndTime(timeString);
    } else {
      setEndTime(null);
    }
  };
  const handlePickUpTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setPickupTime(timeString);
    } else {
      setPickupTime(null);
    }
  };
  const handleDropOffTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setDropOfTime(timeString);
    } else {
      setDropOfTime(null);
    }
  };
  const handleEarlyInTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setEarlyIn(timeString);
    } else {
      setEarlyIn(null);
    }
  };
  const handleLateOutTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const timeString = selectedDate.toTimeString().split(" ")[0];
      setLateOut(timeString);
    } else {
      setLateOut(null);
    }
  };
  const min = 1;
  const max = 20;
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(value);
  };
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const [statusC, setStatusC] = useState(0);
  const [statusPU, setStatusPU] = useState(false);
  const [statusDO, setStatusDO] = useState(false);
  const [statusEI, setStatusEI] = useState(false);
  const [statusLO, setStatusLO] = useState(false);
  const [showButton, setShowButton] = useState(1);
  const [secondFamilyName, setSecondFamilyName] = useState();
  const [secondGivenName, setSecondGivenName] = useState();
  const [secondGender, setSecondGender] = useState();
  const inputRef = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);
  useEffect(() => {
    if (status === 1) {
      input3Ref.current.focus();
    }
  }, [status]);
  useEffect(() => {
    if (statusC === 1) {
      input4Ref.current.focus();
    }
  }, [statusC]);
  const handleChangeBookerName = (e) => {
    setBookerName(e.target.value);
  };
  const handleChangeCompanyName = (e) => {
    setCompany(e.target.value);
  };

  const handleSecondFamilyName = (e) => {
    const newValue = e.target.value;
    setSecondFamilyName(newValue);
  };
  const handleSecondGivenName = (e) => {
    const newValue = e.target.value;
    setSecondGivenName(newValue);
  };
  const handleSecondFamilyNameClick = () => {
    inputRef.current.focus();
  };
  const handleSecondGivenNameClick = () => {
    input2Ref.current.focus();
  };
  const handleClick = () => {
    text === t("reservation.more")
      ? setText(t("reservation.remove"))
      : setText(t("reservation.more"));
    setShow(!show);
  };
  const handleSelected = (status, e) => {
    setStatus(status);
  };
  const handleSelectedCompany = (statusC) => {
    setStatusC(statusC);
  };
  const handlePickupNumber = (e) => {
    const newValue = e.target.value;
    setPickupNumber(newValue);
  };
  const handlePickUpNumberClick = () => {
    input5Ref.current.focus();
  };
  const handleDropOffNumber = (e) => {
    const newValue = e.target.value;
    setDropOffNumber(newValue);
  };
  const handleDropOffNumberClick = () => {
    input6Ref.current.focus();
  };
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [errors, setErrors] = useState({})
  const [isVaLid, setIsValid] = useState()
  const validateForm = () => {
    let errors = {}
    if (!selectedCity) {
      errors.selectedCity = 'City field is required';
    } 
    if (!selectedBranch) {
      errors.selectedBranch = 'Branch field is required';
    } 
    if (!startDate) {
      errors.startDate = 'Check-in date field is required';
    } 
    if (!endDate) {
      errors.endDate = 'Check-out date field is required';
    } 
    if (!selectedRoom) {
      errors.selectedRoom = 'Kind of room field field is required';
    } 
    if (!roomAmount) {
      errors.roomAmount = 'Number of room field field is required';
    } 
    if (!guestAmount) {
      errors.guestAmount = 'Number of guest field field is required';
    } 
    if (!familyName) {
      errors.familyName = 'Name field field is required';
    } 
    if (!givenName ) {
      errors.familyName = 'Name field field is required';
    } 
    if (!gender) {
      errors.familyName = 'Gender field field is required';
    } 
    if (!selectedDay) {
      errors.selectedDay = 'Birthday field field is required';
    } 
    if (!selectedMonth) {
      errors.selectedMonth = 'Birthday field field is required';
    } 
    if (!selectedYear) {
      errors.selectedYear = 'Birthday field field is required';
    } 
    if (!bookerName) {
      errors.bookerName = 'Booker name field field is required';
    } 
    if (!email) {
      errors.email = 'Email field field is required';
    }  else if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!phone) {
      errors.bookerName = 'Phone number field field is required';
    } 
    setErrors(errors);
    return Object.keys(errors).length === 0;

  
  }
  const sendData = async () => {
    const source = await sendReservationRequest([selectedCity,
      selectedBranch,
      startDate,
      endDate,
      selectedRoom,
      roomAmount,
      guestAmount,
      familyName,
      givenName,
      gender,
      selectedDay,
      selectedMonth,
      selectedYear,
      bookerName,
      email,
      phone])
      console.log(source);
  }
  sendData()
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Form data is valid, proceed with submission or further processing
        console.log('Form data:', {
          selectedCity,
          selectedBranch,
          startDate,
          endDate,
          selectedRoom,
          roomAmount,
          guestAmount,
          familyName,
          givenName,
          gender,
          selectedDay,
          selectedMonth,
          selectedYear,
          bookerName,
          email,
          phone
          // Include other form fields here
        });
      } else {
        console.error('Form data is invalid');
      }
    };
  
    // alert(
    //   selectedCity +
    //     " " +
    //     selectedBranch +
    //     " " +
    //     startDate +
    //     " " +
    //     endDate +
    //     " " +
    //     startTime +
    //     " " +
    //     endTime +
    //     " " +
    //     selectedRoom +
    //     " " +
    //     roomAmount +
    //     " " +
    //     guestAmount +
    //     " " +
    //     familyName +
    //     " " +
    //     givenName +
    //     " " +
    //     gender +
    //     " " +
    //     selectedDay +
    //     " " +
    //     selectedMonth +
    //     " " +
    //     selectedYear +
    //     " " +
    //     secondFamilyName +
    //     " " +
    //     secondGivenName +
    //     " " +
    //     secondGender +
    //     " " +
    //     bookerName +
    //     " " +
    //     differentBooker +
    //     " " +
    //     email +
    //     " " +
    //     phone +
    //     " " +
    //     roomType +
    //     " " +
    //     contract +
    //     " " +
    //     company +
    //     " " +
    //     vat +
    //     " " +
    //     paymentMethod +
    //     " " +
    //     pickupTime +
    //     " " +
    //     pickupNumber +
    //     " " +
    //     dropOffTime +
    //     " " +
    //     dropOffNumber +
    //     " " +
    //     earlyIn +
    //     " " +
    //     lateOut +
    //     " " +
    //     specialRequest
    // );

  function DayPicker() {
    const minDay = 1;
    const maxDay = 31;
    const birthDay = 0;
    const onHandleChange = (e) => {
      setSelectedDay(e.target.value);
    };
    const options = [];
    for (let i = minDay; i <= maxDay; i++) {
      const day = birthDay + i;
      options.push(
        <option value={day} key={day}>
          {day}
        </option>
      );
    }
    return (
      <select
        className="col-md-2 form__content"
        value={selectedDay}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.day")}
        </option>
        {options}
      </select>
    );
  }
  function MonthPicker() {
    const minMonth = 0;
    const maxMonth = 11;
    const birthMonth = 1;

    const onHandleChange = (e) => {
      setSelectedMonth(e.target.value);
    };
    const options = [];
    for (let i = minMonth; i <= maxMonth; i++) {
      const month = birthMonth + i;
      options.push(
        <option value={month} key={month}>
          {month}
        </option>
      );
    }
    return (
      <select
        className="col-md-2 form__content"
        value={selectedMonth}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.month")}
        </option>
        {options}
      </select>
    );
  }
  function YearPicker() {
    const minYear = 1925;
    const maxYear = 2005;
    const birthYear = 0;

    const onHandleChange = (e) => {
      setSelectedYear(e.target.value);
    };
    const options = [];
    for (let i = minYear; i <= maxYear; i++) {
      const year = birthYear + i;
      options.push(
        <option value={year} key={year}>
          {year}
        </option>
      );
    }
    return (
      <select
        className="col-md-2 form__content"
        value={selectedYear}
        onChange={onHandleChange}
      >
        <option className="first-opt" disabled selected>
          {t("reservation.year")}
        </option>
        {options}
      </select>
    );
  }
  return (
    <div>
    <div className="reservation__content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{t("reservation.title")}</h1>
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
                <Link className="breadcrumb__title">
                  {t("reservation.title")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="container">
      <div className=" reservation__container">
        <div className="reserve-container">
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.choice")}
              <span className="required__note">*</span>
            </div>
            {errors.selectedCity && <p className="col-md-2 error-message">{errors.selectedCity}</p>}
            <select
                className="col-md-2 form__content"
                value={selectedCity}
                id={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                }}
              >
                <option value="" disabled selected hidden>
                  {t("booking.placeHolder")}
                </option>
                {city.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.city_name}
                  </option>
                ))}
              </select>
              {errors.selectedBranch && <p className=" col-md-2 error-message">{errors.selectedBranch}</p>}
              <select
                className="col-md-2 form__content"
                value={selectedBranch}
                disabled={!selectedCity}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                {filteredBranches.map((item) => (
                  <option key={item.branch_id} value={item.branch_id}>
                    {item.branch_name}
                  </option>
                ))}
              </select>
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.check-in")}
              <span className="required__note">*</span>
            </div>
            <Flatpickr
              value={startDate}
              options={{
                minDate: "today",
                dateFormat: "Y-m-d",
              }}
              className="col-md-2 form__content webkit-appearance"
              placeholder={t("booking.date_in")}
              onChange={(dates) => {
                setStartDate(dates[0]);
              }}
            />
            <div className="col-md-2 offset-2 name__title check-out-date">
              {t("reservation.check-out")}
              <span className="required__note">*</span>
            </div>
            <Flatpickr
              value={endDate}
              options={{
                minDate: new Date(startDate),
                dateFormat: "Y-m-d",
              }}
              className="col-md-2 form__content webkit-appearance"
              placeholder={t("booking.date_out")}
              onChange={(dates) => {
                setEndDate(dates[0]);
              }}
            />
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.in-time")}
              <small style={{ fontWeight: "600" }}>
                {t("reservation.in-note")}
              </small>
            </div>
            <Flatpickr
              value={startTime}
              options={{
                enableTime: true,
                noCalendar: true,
                minTime: "15:00",
                time_24hr: true,
              }}
              placeholder={t("reservation.in-time")}
              onChange={handleStartTimeChange}
              className="col-md-2 form__content webkit-appearance"
            />
            <div className="col-md-2 offset-2 name__title check-out-time">
              {t("reservation.out-time")}
              <small style={{ fontWeight: 600 }}>
                {t("reservation.out-note")}
              </small>
            </div>
            <Flatpickr
              value={endTime}
              options={{
                enableTime: true,
                noCalendar: true,
                minTime: "00:00",
                maxTime: "12:00",
                time_24hr: true,
              }}
              placeholder={t("reservation.out-time")}
              onChange={handleEndTimeChange}
              className="col-md-2 form__content webkit-appearance"
            />
               <span className="col-md-4 required__note offset-md-8">
                {t('reservation.out-timeNote')}
              </span>
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.room-kind")}
              <span className="required__note">*</span>
            </div>
            <select
              value={selectedRoom}
              className="col-md-4 form__content"
              onChange={(e) => {
                setSelectedRoom(e.target.value);
              }}
            >
              {room.map((item) => (
                <option key={item.room_name} value={item.room_name}>
                  {item.room_name} <span>{item.price}</span>{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="col-md-2 name__title">
              {t("reservation.room-amount")}
              <span className="required__note">*</span>
            </div>
            <input
              type="number"
              value={value}
              onChange={handleChange}
              className="col-md-2 form__content"
            />
            <div className="col-md-2 offset-0 offset-md-2 name__title">
              {t("reservation.guest-amount")}
              <span className="required__note">*</span>
            </div>
            <input
              type="number"
              min={1}
              max={4}
              value={showButton}
              className="col-md-2 form__content"
              onChange={(e) => {
                seGuestAmount(e.target.value);
                setShowButton(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="guest-container">
          <div className="row">
            <div className="guest__information">
              <div className="col-md-12 guest__name-title">
                {t("reservation.guest-info")}
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.name")}
                  <span className="required__note">*</span>
                  <small>{t("reservation.name-note")}</small>
                </div>
                <input
                  placeholder={t("reservation.family-name")}
                  type="text"
                  className="col-md-2 form__content"
                  onChange={(e) => {
                    setFamilyName(e.target.value);
                  }}
                />
                <input
                  placeholder={t("reservation.given-name")}
                  type="text"
                  name="gName"
                  className=" col-md-2 form__content"
                  onChange={(e) => setGivenName(e.target.value)}
                />
                <span className="col-md-4 required__note">
                  {t("reservation.name-required")}
                </span>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.gender")}
                  <span className="required__note">*</span>
                </div>
                <div className="col-md-2 form__group">
                  <input
                    type="radio"
                    name="gender"
                    id="gMale"
                    value="male"
                    onClick={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="gMale">{t("reservation.mr")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="gender"
                    id="gFemale"
                    value="female"
                    onClick={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="gFemale">{t("reservation.ms")}</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.birth-date")}
                  <span className="required__note">*</span>
                </div>
                {<DayPicker />}
                {<MonthPicker />}
                {<YearPicker />}
              </div>
              {showButton >= 2 && (
                <div className="row">
                  <div className="col-md-12 offset-4">
                    <button
                      className="base__btn btn__send"
                      onClick={handleClick}
                    >
                      {text}
                    </button>
                  </div>
                  {show && (
                    <div className="container">
                      <div className="row guest-information">
                        <div className="col-md-2 name__title">
                          {t("reservation.name")}
                        </div>
                        <input
                          ref={inputRef}
                          placeholder={t("reservation.family-name")}
                          type="text"
                          className="col-md-2 form__content"
                          value={secondFamilyName}
                          onClick={handleSecondFamilyNameClick}
                          onChange={handleSecondFamilyName}
                        />

                        <input
                          ref={input2Ref}
                          placeholder={t("reservation.given-name")}
                          type="text"
                          className=" col-md-2 form__content"
                          value={secondGivenName}
                          onClick={handleSecondGivenNameClick}
                          onChange={handleSecondGivenName}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-2 name__title">
                          {t("reservation.gender")}
                        </div>
                        <div className="col-md-2">
                          <input
                            type="radio"
                            name="2ndgender"
                            id="2ndgMale"
                            value="male"
                            onChange={(e) => setSecondGender(e.target.value)}
                          />
                          <label htmlFor="gMale">{t("reservation.mr")}</label>
                        </div>
                        <div className="col-md-2">
                          <input
                            type="radio"
                            name="2ndgender"
                            id="2ndgFemale"
                            value="female"
                            onChange={(e) => setSecondGender(e.target.value)}
                          />
                          <label htmlFor="2ndgFemale">
                            {t("reservation.ms")}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 name__title">
                          {t("reservation.birth-date")}
                        </div>
                        {<DayPicker />}
                        {<MonthPicker />}
                        {<YearPicker />}
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.booker")}
                </div>
                <div className="col-md-6">
                  <input
                    type="radio"
                    name="Booker"
                    id="booker"
                    value="Same as person who will stay"
                    checked={status === 0}
                    onClick={(e) => {
                      handleSelected(0);
                      setSameBooker(e.target.value);
                    }}
                  />
                  <label htmlFor="booker">
                    {t("reservation.same-person")}
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="Booker"
                    id="booker"
                    value="Different with who will stay"
                    checked={status === 1}
                    onClick={(e) => {
                      handleSelected(1);
                      setDifferentBooker(e.target.value);
                    }}
                  />
                  <label htmlFor="booker">
                    {t("reservation.diff-person")}
                  </label>
                </div>
              </div>
              {status === 1 && 
               <div className="row">
               <div className="col-md-2 name__title">{t("reservation.name")}</div>
               <input
                 ref={input3Ref}
                 type="text"
                 className="booker-name form__content col-md-2"
                 value={bookerName}
                 placeholder={t("reservation.name")}
                 onChange={handleChangeBookerName}
               />
             </div>}
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.email")}
                  <span className="col-md-2 required__note">*</span>
                </div>
                <input
                  type="text"
                  className="booker-email form__content col-md-2"
                  placeholder={t("reservation.email")}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="col-md-6 required__note">
                  {t("reservation.email-note")}
                </span>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.phone")}
                </div>
                <input
                  type="text"
                  className="booker-phone form__content col-md-2"
                  id=""
                  placeholder={t("reservation.phone")}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="col-md-6 required__note">
                  {t("reservation.phone-note")}
                </span>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.room-type")}
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="roomType"
                    id="smk"
                    value={t("reservation.smk")}
                    onClick={(e) => setRoomType(e.target.value)}
                  />
                  <label htmlFor="smk">{t("reservation.smk")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="roomType"
                    id="no-smk"
                    value={t("reservation.non-smk")}
                    onClick={(e) => setRoomType(e.target.value)}
                  />
                  <label htmlFor="no-smk">{t("reservation.non-smk")}</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.contract")}
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    id="hContract"
                    className="Contract"
                    value={t("reservation.n-cont")}
                    checked={statusC == 0}
                    onClick={(e) => {
                      setContract(e.target.value);
                      handleSelectedCompany(0);
                    }}
                  />
                  <label htmlFor="hContract">{t("reservation.n-cont")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="contract"
                    id="hContract"
                    className="Contract"
                    value={t("reservation.h-cont")}
                    checked={statusC == 1}
                    onClick={(e) => {
                      setContract(e.target.value);
                      handleSelectedCompany(1);
                    }}
                  />
                  <label htmlFor="hContract">{t("reservation.h-cont")}</label>
                </div>
              </div>
              {statusC == 1 && 
               <div className="row">
               <div className="col-md-2 name__title">{t("reservation.company")}</div>
               <input
                 ref={input4Ref}
                 type="text"
                 className="booker-name form__content col-md-2"
                 placeholder={t("reservation.company")}
                 value={company}
                 onChange={handleChangeCompanyName}
               />
               <span className="required__note">{t("reservation.company-note")}</span>
             </div>}
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.vat-invoice")}
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="vatInvoice"
                    id="no-need"
                    className="VATInvoice"
                    value={t("reservation.n-need")}
                    onClick={(e) => setVat(e.target.value)}
                  />
                  <label htmlFor="no-need">{t("reservation.n-need")}</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="vatInvoice"
                    id="need"
                    className="VATInvoice"
                    value={t("reservation.need")}
                    onClick={(e) => setVat(e.target.value)}
                  />
                  <label htmlFor="need">{t("reservation.need")}</label>
                </div>
              </div>
                <span className="col-md-6 p-0 required__note">
                  {t("reservation.vat-note")}
                </span>
              <div className="row">
                <div className="col-md-2 name__title">
                  {t("reservation.pay-method")}
                </div>
                <select
                  style={{ width: "350px" }}
                  value={paymentMethod}
                  className="col-md-2 form__content"
                  id={paymentMethod}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
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
              {t("reservation.requirement")}
              <br />
              <small>{t("reservation.requirement-note")}</small>
            </div>
            <div className="col-md-10">
              <input
                type="checkbox"
                className="special"
                id="pickUp"
                checked={statusPU}
                onChange={(e) => setStatusPU(e.target.checked)}
              />
              <label htmlFor="pickUp">{t('reservation.pickup')}</label>
              <br />
              {statusPU && (
                <div className="row">
                  <Flatpickr
                    value={pickupTime}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.pickupTime')}
                    onChange={handlePickUpTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  <input
                    ref={input5Ref}
                    type="text"
                    className="booker-name form__content col-md-3"
                    value={pickupNumber}
                    placeholder={t('reservation.pickupNumber')}
                    onChange={handlePickupNumber}
                    onClick={handlePickUpNumberClick}
                  />
                  <span className="required__note pre-line col-md-4">
                    {t('reservation.DO_PU_note')}
                  </span>
                </div>
              )}
              <input
                type="checkbox"
                className="special"
                id="dropOff"
                checked={statusDO}
                onChange={(e) => setStatusDO(e.target.checked)}
              />
              <label htmlFor="dropOff">{t('reservation.dropOff')}</label>
              <br />
              {statusDO && (
                <div className="row">
                  <Flatpickr
                    value={dropOffTime}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.dropOffTime')}
                    onChange={handleDropOffTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  <input
                    ref={input6Ref}
                    type="text"
                    className="booker-name form__content col-md-2"
                    value={dropOffNumber}
                    placeholder={t('reservation.dropOffNumber')}
                    onChange={handleDropOffNumber}
                    onClick={handleDropOffNumberClick}
                  />
                  <span className="required__note pre-line col-md-4">
                  {t('reservation.DO_PU_note')}
                  </span>
                </div>
              )}
              <input
                type="checkbox"
                className="special"
                id="earlyIn"
                checked={statusEI}
                onChange={(e) => setStatusEI(e.target.checked)}
              />
              <label htmlFor="earlyIn">{t('reservation.earlyIn')}</label>
              <br />
              {statusEI && (
                <div className="row">
                  <Flatpickr
                    value={earlyIn}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.earlyInTime')}
                    onChange={handleEarlyInTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  {earlyInNote.map((item)=> (
                  <span className="required__note pre-line col-md-12">
                    {item.note}
                  </span>
                  ))}
                </div>
              )}
              <input
                type="checkbox"
                className="special"
                id="lateOut"
                checked={statusLO}
                onChange={(e) => setStatusLO(e.target.checked)}
              />
              <label htmlFor="lateOut">{t('reservation.lateOut')}</label>
              <br />
              {statusLO && (
                <div className="row">
                  <Flatpickr
                    value={lateOut}
                    options={{
                      dateFormat: "H:i",
                      enableTime: true,
                      noCalendar: true,
                      minTime: "00:00",
                      time_24hr: true,
                    }}
                    placeholder={t('reservation.lateOutTime')}
                    onChange={handleLateOutTimeChange}
                    className="col-md-4 form__content webkit-appearance"
                  />
                  {lateOutNote.map((item)=>(
                  <span className="required__note pre-line col-md-12">
                    {item.note}
                  </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <textarea
                className="text-note"
                cols="40"
                rows="6"
                placeholder={t("reservation.request")}
                onChange={(e) => setSpecialRequest(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 offset-4">
              <button
                id="send"
                className="base__btn btn__send"
                type="submit"
                onClick={() => validateForm()}
              >
                {" "}
                {/* <Link to={`/thank-you/${cityParam}`}></Link> */}
                {t("reservation.send")}
              </button>
            </div>
          </div>
          <div className="row">
            <span className="required__note pre-line">
              {t("reservation.attention-note")}
            </span>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
  );
}
export default Reservation;
