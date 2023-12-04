import { Link } from "react-router-dom";
import { useState } from "react";
function Reservation() {
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
      <div className="container">
        <div className=" reservation__container">
      <div className="reserve-container">
        <div className="row">
          <div className="col-md-2 name__title">
            Choice of Branch:
            <span className="required__note">*</span>
          </div>
          <select
            className="col-md-2 form__content" 
            id={selectedCity}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
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
          <input
            className="col-md-2 form__content"
            placeholder="Check-in date"
            type="text"
          />
          <div className="col-md-2 offset-2 name__title check-out-date">
            Check-out date
            <span className="required__note">*</span>
          </div>
          <input
            placeholder="Check-out date"
            type="text"
            className="col-md-2 form__content"
          />
        </div>
        <div className="row">
          <div className="col-md-2 name__title">
            Check-in time:
            <small style={{ fontWeight: "600" }}>
              (Normal check-in : from 3pm)
            </small>
          </div>
          <select className="col-md-2 form__content">
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            <option value="24:00">24:00</option>
          </select>
          <div className="col-md-2 offset-2 name__title check-out-time">
            Check-out time
            <small style={{ fontWeight: 600 }}>
              (Normal check-in : from 3pm)
            </small>
          </div>
          <select className="col-md-2 form__content">
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
          </select>
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
          <select className="col-md-2 form__content">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
          <div className="col-md-2 offset-2 name__title">
            Number of guests per room
            <span className="required__note">*</span>
          </div>
          <select className="col-md-2 form__content">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
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
              name="fName"
              className="col-md-2 form__content"
            />
            <input
              placeholder="Given Name"
              type="text"
              name="gName"
              className=" col-md-2 form__content"
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
        <div className="row">
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
        </div>
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
            <button id="send" className="base__btn btn__send">
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
      </div>
  );
}
export default Reservation;
