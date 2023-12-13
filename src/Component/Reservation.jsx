import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
function Reservation() {
  const {t} = useTranslation()
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null)
  console.log(startDate);
  const [dateIn, setDateIn] = useState('')
  const [dateOut, setDateOut] = useState('')
  const [roomKind, setRoomKind] = useState('')
  const [roomAmount, setRoomAmount] = useState('')
  const [guestAmount, setGuestAmount] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [givenName, setGivenName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [birthdayMonth, setBirthdayMonth] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [email, setEmail] = useState('')

  const validateForm = () => {
    if(selectedCity.length == 0) {
      alert('Location can not be empty')
      return
    }
    if (familyName.length == 0) {
      alert('Family name can not be empty')
      return
    }
    if (givenName.length == 0) {
      alert('Given name can not be empty')
      return
  }
  alert("Form is valid");
}
  const min = 1;
  const max = 20;
  const [value, setValue] = useState(1);
  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  };
  const city = [
    {
      id: 1,
      name: "Ha Noi",
    },
    {
      id: 2,
      name: "Ho Chi Minh",
    },
    {
      id: 3,
      name: "Da Nang",
    },
    {
      id: 4,
      name: "Hai Phong",
    },
  ];
  const branch = [
    {
      branch_id: 1,
      city_id: 1,
      branch_name: "Azumaya Hai Ba Trung 1",
    },
    {
      branch_id: 2,
      city_id: 1,
      branch_name: "Azumaya Kim Ma 2",
    },
    {
      branch_id: 3,
      city_id: 1,
      branch_name: "Azumaya Kim Ma 3",
    },
    {
      branch_id: 4,
      city_id: 1,
      branch_name: "Azumaya Linh Lang",
    },
    {
      branch_id: 5,
      city_id: 2,
      branch_name: "Azumaya Le Thanh Ton",
    },
    {
      branch_id: 6,
      city_id: 2,
      branch_name: "Azumaya Thai Van Lung 1",
    },
    {
      branch_id: 7,
      city_id: 2,
      branch_name: "Azumaya Thai Van Lung 2",
    },
    {
      branch_id: 8,
      city_id: 2,
      branch_name: "Azumaya Annex",
    },
    {
      branch_id: 9,
      city_id: 3,
      branch_name: "Azumaya Da Nang Hotel",
    },
    {
      branch_id: 10,
      city_id: 4,
      branch_name: "Azumaya Hai Phong Hotel",
    },
  ];
  const [selectedCity, setSelectedCity] = useState("");
  const filteredBranches = branch.filter((b) => b.city_id == selectedCity);
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState(0)
  const [text, setText] = useState('More +')

  const handleSelected =(status) => {
    setStatus(status)
  }
  const handleClick = () => {
    text === 'More +' ? setText('Remove') : setText('More +')
    setShow(!show)
    
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  function SecondGuest() {
    return(
      <div className="container">
      <div className="row guest-information">
        <div className="col-md-2 name__title">
          Full Name
        </div>
        <input
          placeholder="Family Name"
          type="text"
          name="fName"
          className="col-md-2 form__content"
        />
        <input
          placeholder="Given Name"
          type="text"
          name="gName"
          className=" col-md-2 form__content"
        />
      </div>
      <div className="row">
        <div className="col-md-2 name__title">
          Gender
        </div>
        <div className="col-md-2">
          <input
            type="radio"
            name="gender"
            id="gMale"
            value="male"
            defaultChecked
          />
          <label htmlFor="gMale">
            Mr.
          </label>
        </div>
        <div className="col-md-2">
          <input type="radio" name="gender" id="gFemale" value="female" />
          <label htmlFor="gFemale">
            Ms.
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 name__title">
          Birth Date
        </div>
        <select className="col-md-2 form__content day">
          <option
            className="guest-birthday"
            value=""
            disabled
            selected
            hidden
          >
            Day
          </option>
        </select>
        <select className="col-md-2 form__content month">
          <option
            className="guest-birthMonth"
            value=""
            disabled
            selected
            hidden
          >
            Month
          </option>
        </select>
        <select className="col-md-2 form__content year">
          <option
            className="guest-birthYear"
            value=""
            disabled
            selected
            hidden
          >
            Year
          </option>
        </select>
      </div>
      </div>
    )
  }

  function ShowBooker() {
  return(
    <div className="row">
    <div className="col-md-2 name__title">Name</div>
      <input
        type="text"
        className="booker-name form__content col-md-2"
        id=""
        placeholder="Name"
      />
      </div>
  )
  }
  return (
      <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Reservation</h1>
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
                <Link className="breadcrumb__title">Reservation</Link>
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
                    Choice of Branch:
                    <span className="required__note">*</span>
                  </div>
                  <select
                    required
                    value={selectedCity}
                    className="col-md-2 form__content" 
                    id={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value)
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Please select a city
                    </option>
                    {city.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select className="col-md-2 form__content" disabled={!selectedCity}>
                    {filteredBranches.map((item) => (
                      <option key={item.branch_id}>{item.branch_name}</option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">
                    Check-in date
                    <span className="required__note">*</span>
                  </div>
                  <Flatpickr 
                  required
                  value={startDate}
                  options={{
                    minDate:'today'}} 
                  className="col-md-2 form__content webkit-appearance" 
                  placeholder={t('booking.date_in')} 
                  onChange={(startDate)=>{
                    setStartDate(startDate);
                    }} />
                  <div className="col-md-2 offset-2 name__title check-out-date">
                    Check-out date
                    <span className="required__note">*</span>
                  </div>
                  <Flatpickr 
                  required
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
                    Check-in time:
                    <small style={{ fontWeight: "600" }}>
                      (Normal check-in : from 3pm)
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
                    Check-out time
                    <small style={{ fontWeight: 600 }}>
                      (Normal check-in : from 3pm)
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
                    Kind of rooms
                    <span className="required__note">*</span>
                  </div>
                  <select className="col-md-2 form__content">
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">
                    Number of rooms
                    <span className="required__note">*</span>
                  </div>
                  <input 
                  type="number" 
                  value={value}
                  onChange={handleChange}
                  className="col-md-2 form__content" />
                  <div className="col-md-2 offset-0 offset-md-2 name__title">
                    Number of guests per room
                    <span className="required__note">*</span>
                  </div>
                  <input 
                  type="number" 
                  min={1} 
                  max={4} 
                  className="col-md-2 form__content" />
                </div>
              </div>
              <div className="guest-container">
                <div className="row">
                  <div className="guest__information">
                  <div className="col-md-12 guest__name-title">Guest Information</div>
                  <div className="row">
                    <div className="col-md-2 name__title">
                      Name
                      <span className="required__note">*</span>
                      <small>(Please fill in the name of all the members stay)</small>
                    </div>
                    <input
                      placeholder="Family Name"
                      type="text"
                      className="col-md-2 form__content"
                      onChange={(e) => {
                        setFamilyName(e.target.value)}}
                    />
                    <input
                      placeholder="Given Name"
                      type="text"
                      name="gName"
                      className=" col-md-2 form__content"
                      onChange={(e) => setGivenName(e.target.value)}
                    />
                    <span
                      className="col-md-2 required__note"
                      style={{ fontSize: "1.4rem" }}
                    >
                      Please write in Alphabet
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-md-2 name__title">
                      Gender
                      <span className="required__note">*</span>
                    </div>
                    <div className="col-md-2 form__group">
                      <input
                        type="radio"
                        name="gender"
                        id="gMale"
                        value="male"
                        defaultChecked
                      />
                      <label htmlFor="gMale">
                        Mr.
                      </label>
                    </div>
                    <div className="col-md-2">
                      <input type="radio" name="gender" id="gFemale" value="female" />
                      <label htmlFor="gFemale">
                        Ms.
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2 name__title">
                      Birth Date
                      <span className="required__note">*</span>
                    </div>
                    <input 
                    required
                    type="number"
                    min={1} 
                    max={31} 
                    placeholder="Day" 
                    className="col-md-2 form__content day" />
                    <input 
                    required
                    type="number" 
                    min={1} 
                    max={12} 
                    placeholder="Month"
                    className="col-md-2 form__content month" />
                    <input 
                    required
                    type="number" 
                    min={1925} 
                    max={2005} 
                    placeholder="Year"
                    className="col-md-2 form__content year" />
                  </div>
                <div className="row">
                  <div className="col-md-12 offset-4">
                    <button className="base__btn btn__send" onClick={handleClick}>{text}</button>
                  </div>
                  {show && <SecondGuest />}
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">Name of person who makes reservation:</div>
                  <div className="col-md-6">
                    <input
                      type="radio"
                      name="Booker"
                      id="booker"
                      defaultChecked
                      value="same"
                      checked = {status === 0}
                      onClick={(e) => handleSelected(0)}
                    />
                    <label htmlFor="booker">Same as person who will stay</label>
                    <br />
                    <input
                      type="radio"
                      name="Booker"
                      id="booker"
                      value="different"
                      checked = {status === 1}
                      onClick={(e) => handleSelected(1)}
                    />
                    <label htmlFor="booker"> Different with who will stay</label>
                  </div>
                </div>
                {status === 1 && <ShowBooker />}
                <div className="row">
                  <div className="col-md-2 name__title">Email address
                    <span className="col-md-2 required__note">*</span>
                  </div>
                    <input
                      required  
                      type="text"
                      className="booker-email form__content col-md-2"
                      id=""
                      placeholder="Email"
                    />
                    <span className="col-md-8 required__note">
                      Please leave your exact email address for our soon confirmation or
                      contact
                    </span>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">Phone number</div>
                    <input
                      type="text"
                      className="booker-phone form__content col-md-2"
                      id=""
                      placeholder="Phone number"
                    />
                    <span className="col-md-8 required__note">
                      Please input country code if it's not Vietnamese or Japanese
                      telephone's number
                    </span>
                </div>
                {/* <div className="row">
                  <div className="col-md-2 name__title">
                    Kind of Room
                    <span className="required__note">*</span>
                  </div>
                  <select className="col-md-2 form__content room-kind">
                    <option className="kind-of-room" value="" disabled selected hidden>
                      Select your kind of room
                    </option>
                  </select>
                  <span className="col-md-2 required__note" style={{ fontWeight: 600 }}>
                    Not included 8% VAT
                  </span>
                </div> */}
                <div className="row">
                  <div className="col-md-2 name__title">Room type</div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="roomType"
                      id="smk"
                      value="Smoking"
                      defaultChecked
                    />
                    <label htmlFor="smk">Smoking</label>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="roomType"
                      id="no-smk"
                      value="Non-Smoking"
                    />
                    <label htmlFor="no-smk">Non-Smoking</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">Contract</div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="contract"
                      id="hContract"
                      className="Contract"
                      value="No Contract"
                      defaultChecked
                    />
                    <label htmlFor="hContract">No Contract</label>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="contract"
                      id="hContract"
                      className="Contract"
                      value="Contract"
                    />
                    <label htmlFor="hContract">Have Contract</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">VAT Invoice</div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="vatInvoice"
                      id="no-need"
                      className="VATInvoice"
                      value="No Necessarily"
                      defaultChecked
                    />
                    <label htmlFor="no-need">No Necessarily</label>
                  </div>
                  <div className="col-md-2">
                    <input
                      type="radio"
                      name="vatInvoice"
                      id="need"
                      className="VATInvoice"
                      value="Necessarily"
                    />
                    <label htmlFor="need">Necessarily</label>
                    <br />
                  </div>
                  <span className="required__note">
                    VAT is Value Added tax. It is a tax on the sale of most goods and
                    services. VAT revenues are collected through businesses who are
                    registered for VAT
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-2 name__title">Payment Method</div>
                  <select style={{ width: "300px" }} className="col-md-2 form__content">
                    <option value="By cash at counter (VND/ USD/ JPY)">
                      By cash at counter (VND/ USD/ JPY)
                    </option>
                    <option value="By credit card at counter (VND only)">
                      By credit card at counter (VND only)
                    </option>
                    <option value="By company transfer before check in">
                      By company tranfer before check in
                    </option>
                    <option value="By company transfer after check out">
                      By company tranfer after check out
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                </div>
              </div>
              </div>
              <div className="other-container">
                <div className="row">
                  <div className="col-md-2 name__title">
                    Any special requirement (late"checkout pick"up, etc...)
                    </div>
                    <div className="col-md-6">
                      <input
                        type="checkbox"
                        className="special"
                        id="spcRequire"
                        value="Pick-up"
                      />
                      <label htmlFor="spcRequire">Pick-up</label><br />
                      <input
                        type="checkbox"
                        className="special"
                        id="spcRequire"
                        value="Drop-off"
                      />
                      <label htmlFor="spcRequire">Drop-off</label><br />
                      <input
                        type="checkbox"
                        className="special"
                        id="spcRequire"
                        value="Early check-in"
                      />
                      <label htmlFor="spcRequire">Early check-in</label><br />
                      <input
                        type="checkbox"
                        className="special"
                        id="spcRequire"
                        value="Late check-out"
                      />
                      <label htmlFor="spcRequire">Late check-out</label><br />
                      <textarea
                      className="text-note"
                      cols="40"
                      rows="6"
                      placeholder="Please let us know if you have any request"
                    ></textarea>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12 offset-4">
                    <button 
                    id="send"
                    className="base__btn btn__send"
                    onClick={()=>validateForm()}>
                      Send
                    </button>
                    </div>
                </div>
                <div className="row">
                  <span className="required__note">
                    *Please Attention
                    <br />
                    It will take a little time to transition to the Reservation
                    Completion Page after press "Send" button, please wait a moment.
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
