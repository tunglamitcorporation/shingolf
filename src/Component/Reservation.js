import {Link} from 'react-router-dom'
import Booking from './Booking'
function Reservation() {
    return(
        <div>
            <div className="reservation__content">
            <div className="container">
                <div className="row">
                    <div className="col offset-4">
                        <div className="reservation__title">Reservation</div>
                    </div>
                </div>
            </div>
    </div>

    <div className="re__breadcrumb">
        <div className="container">
            <div className="row">
                <div className="col-md-12"></div>
                <ul className="breadcrumb__list">
                           <li className = "breadcrumb__item">
                               <Link to = '/'>
                                   <i className="fa-solid fa-house"></i>
                               </Link>
                           </li>
                           <li className = "breadcrumb__item">
                               /
                           </li>
                           <li className = "breadcrumb__item">
                               <Link className ="breadcrumb__title">Reservation</Link>
                           </li>
               </ul>
            </div>
        </div>
    </div>

    <div className="reservation">
        <div className="reservation__container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hotel__location-select">
                            <div className="hotel__location-select-city">
                            <input type="radio" name="rCity" className = "radioBoxCity" id="rbcHCM" value="HCM" checked />
                                <label className = "rbcLabel" for="rbcHCM">
                                    <b>Ho Chi Minh City</b> 
                                </label>
                                </div>
                            <div className="hotel__location-select-city">
                                    <input type="radio" name="rCity" className = "radioBoxCity" id="rbcHN" value="HN"  />
                                    <label className = "rbcLabel" for="rbcHN">
                                        <b>Ha Noi City</b> 
                                    </label>
                                </div>
                            <div className="hotel__location-select-city">
                                    <input type="radio" name="rCity" className = "radioBoxCity" id="rbcDN" value="DN"  />
                                    <label className = "rbcLabel" for="rbcDN">
                                        <b>Da Nang City</b> 
                                    </label>
                                </div>
                            <div className="hotel__location-select-city">
                                    <input type="radio" name="rCity" className = "radioBoxCity" id="rbcHP" value="HP"  />
                                    <label className = "rbcLabel" for="rbcHP">
                                        <b>Hai Phong City</b> 
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <div className="branch__choice">
                            <div className="base__form">
                                <div className="name__title">Choice of Branch
                                    <span className="required__note">*</span>
                                </div>
                                    <div className="brand__choice-name">
                                        <ul>
                                            <li className="brand__hcm-hotel-name">
                                                <input type="radio" name="rbHotelName" id="rbHotelName__LTT" className ="hcm__hotel-name" value="Le Thanh Ton" />
                                                <label for="rbHotelName__LTT">Le Thanh Ton Hotel</label>
                                            </li>
                                            <li className="brand__hcm-hotel-name">
                                                <input type="radio" name="rbHotelName" id="rbHotelName__TVL1"  className ="hcm__hotel-name" value="Thai Van Lung 1" />
                                                <label for="rbHotelName__LTT">Thai Van Lung 1</label>
                                            </li>
                                            <li className="brand__hcm-hotel-name">
                                                <input type="radio" name="rbHotelName" id="rbHotelName__TVL2"  className ="hcm__hotel-name" value="Thai Van Lung 2" />
                                                <label for="rbHotelName__LTT">Thai Van Lung 2</label>
                                            </li>
                                            <li className="brand__hcm-hotel-name">
                                                <input type="radio" name="rbHotelName" id="rbHotelName__Annex"  className ="hcm__hotel-name" value="Azumaya Annex" />
                                                <label for="rbHotelName__LTT">Azumaya Annex</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            </div>
            <div className="booking__information">
                <div className="booking__information-container">
                    <div className="base__form">
                        <div className="name__title">Check-in date
                            <span className = "required__note">*</span>
                        </div>
                        <div className="form__content">
                            <input placeholder="Check-in date" type="text" id="myID" className = "check-in-date" />
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Check-out date
                            <span className = "required__note">*</span>
                        </div>
                        <div className="form__content">
                            <input placeholder="Check-out date" type="text" id="myID" className = "check-out-date" />
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Check-in time: 
                        <small style={{fontWeight: '600'}}>
                        (Normal check-in : from 3pm)
                        </small>
                        </div>
                        <div className="form__content">
                            <select className="check-in-time">
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
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Check-out time
                            <small style={{fontWeight: 600}}>
                                (Normal check-in : from 3pm)
                                </small>
                        </div>
                        <div className="form__content">
                            <select className="check-out-time">
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
                    </div>
                    <div className="base__form">
                        <div className="name__title">Number of rooms
                            <span className = "required__note">*</span>
                        </div>
                        <div className="form__content">
                            <select className="number-of-room">
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
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Number of guests per room
                            <span className = "required__note">*</span>
                        </div>
                        <div className="form__content">
                            <select className="guest-per-room">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="guest__information">
                        <div className="guest__name-title">Guest Information</div>
                    
                    <div className="base__form">
                        <div className="name__title">Name
                            <span className = "required__note">*</span>
                            <small>(Please fill in the name of all the members stay)</small>
                        </div>
                    <div className="form__content">
                            <div className="form__input">
                                <input placeholder="Family Name" type="text" name="fName" className="familyName" />
                            </div>
                            <div className ="form__input">
                                <input placeholder="Given Name"  type="text" name="gName" className="givenName" />
                            </div> 
                            <span className = "required__note" style={{fontSize:'1.4rem'}}>Please write in Alphabet</span>
                    </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Gender
                            <span className="required__note">*</span>
                        </div>
                        <div className="form__content">
                                <input type="radio" name="gender" id="gMale" className="guest-gender" value="male" checked />
                                <label for="gMale" >Mr.</label>
                                <input type="radio" name="gender" id ="gFemale" className="guest-gender" value="female" />
                                <label for="gFemale" >Ms.</label> 
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Birth Date
                            <span className="required__note">*</span>
                        </div>
                        <div className="form__content">
                            <div className="form__input">
                                <select className="day">
                                    <option className ="guest-birthday" value="" disabled selected hidden>Day</option>
                                </select>
                            </div>
                                <div className="form__input">
                                    <select className="month">
                                        <option className ="guest-birthMonth" value="" disabled selected hidden>Month</option>
                                    </select>
                                </div>
                                <div className="form__input">
                                    <select className="year">
                                        <option className = "guest-birthYear" value=""disabled selected hidden>Year</option>
                                    </select>
                                </div>

                            </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Kind of Room
                            <span className="required__note">*</span>
                        </div>
                        <div className="form__content">
                            <select className="room-kind">
                                <option className="kind-of-room" value=""disabled selected hidden>Select your kind of room</option>
                            </select>
                            <span className="required__note" style={{fontWeight:600}}>Not included 8% VAT</span>
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Room type</div>
                    <div className="form__content">
                        <input type="radio" name="roomType" id="smk" className="roomType" value="Smoking" checked />
                        <label for="smk">Smoking</label>
                        <input type="radio" name="roomType" id="no-smk" className="roomType" value="Non-Smoking" />
                <label for="no-smk">Non-Smoking</label>
                    </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Contract</div>
                    <div className="form__content">
                            <input type="radio" name="contract" id = "hContract" className="Contract" value="No Contract" checked />
                            <label for="hContract">No Contract</label>
                            <input type="radio" name="contract" id="hContract" className="Contract" value="Contract" />
                            <label for="hContract">Have Contract</label>
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">VAT Invoice</div>
                        <div className="form__content">
                            <input type="radio" name="vatInvoice" id="no-need" className="VATInvoice" value="No Necessarily" checked />
                            <label for="no-need">No Necessarily</label>
                            <input type="radio" name="vatInvoice" id="need" className="VATInvoice" value="Necessarily" />
                            <label for="need">Necessarily</label><br />
                            <span className="required__note">VAT is Value Added tax. It is a tax on the sale of most goods and services. VAT revenues are collected through businesses who are registered for VAT</span>

                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Payment Method</div>
                        <div className="form__content">
                            <select className="payMethod">
                                <option  value="By cash at counter (VND/ USD/ JPY)">By cash at counter (VND/ USD/ JPY)</option>
                                <option  value="By credit card at counter (VND only)">By credit card at counter (VND only)</option>
                                <option  value="By company transfer before check in">By company tranfer before check in</option>
                                <option  value="By company transfer after check out">By company tranfer after check out</option>
                                <option  value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="booking__information-special">
                    <div className="base__form">
                        <div className="name__title">Any special requirement
                            <small>(late"checkout pick"up, etc...)</small>
                        </div>
                    <div className="form__content">
                        <input type="checkbox" className="special" id="spcRequire" value="Pick-up" />
                        <label for="spcRequire">Pick-up</label><br />
                        <input type="checkbox" className="special" id="spcRequire" value="Drop-off" />
                        <label for="spcRequire">Drop-off</label><br />
                        <input type="checkbox" className="special" id="spcRequire" value="Early check-in" />
                        <label for="spcRequire">Early check-in</label><br />
                        <input type="checkbox" className="special" id="spcRequire" value="Late check-out" />
                        <label for="spcRequire">Late check-out</label><br />
                    </div>
                    <div className="form__content">
                        <textarea className="text-note" cols="80" rows="10" placeholder="Please let us know if you have any request"></textarea>
                    </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Name of person who makes reservation:</div>
                        <div className="form__content">
                            <input type="radio" name="Booker" id="booker" checked value="Same as person who will stay" />
                            <label for="booker">Same as person who will stay</label><br />
                            <input type="radio" name="Booker" id="booker" value="Different with who will stay" />
                            <label for="booker"> Different with who will stay</label>
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Name</div>
                        <div className="form__content">
                            <input type="text" className="booker-name" id="" placeholder="Name" />
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Email address
                            <span className="required__note">*</span>
                        </div>
                        <div className="form__content">
                            <input type="text" className="booker-email" id="" placeholder="Email" />
                            <span className="required__note">Please leave your exact email address for our soon confirmation or contact</span>
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="name__title">Phone number
                        </div>
                        <div className="form__content">
                            <input type="text" className="booker-phone" id="" placeholder="Phone number" />
                            <span className="required__note">Please input country code if it's not Vietnamese or Japanese telephone's number
                            </span>
                        </div>
                    </div>
                    <div className="base__form">
                        <div className="form__content">
                            <button id = "send"  className="base__btn btn__send">Send
                            </button>
                    </div>
                    </div>
                    <div className="base__form">
                        <span className="required__note">*Please Attention<br />
                            It will take a little time to transition to the Reservation Completion Page after press "Send" button, please wait a moment.</span>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
        
    </div>
        </div>
    )
}
export default (Reservation)