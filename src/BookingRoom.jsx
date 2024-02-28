import {useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function BookingRoom (){
    const {t} = useTranslation()
    const bookingData = t('booking', {returnObjects:true})
    const city = t('booking.city', {returnObjects:true})
    const branch = t('booking.branch', {returnObjects:true})
    const header = t('header', {returnObjects:true})
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [selectedCity, setSelectedCity] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    const flatBranches = [].concat(...branch)
    const filteredBranches = flatBranches.filter(b => b.city_id == selectedCity)

    useEffect(() => {
        if(selectedBranch == undefined) {
            setSelectedBranch(selectedBranch)
        }
    }, [selectedBranch])

    return(
        <div>              
        <div className="content__booking">
        <div className="container">
            <div className="row gx-3 p-0 justify-content-center">
                <div className="col-md-12 ">
                <div className="content__booking-title">{t('booking.title')}</div>
                </div>
                <div className="col-md-2">
                  <Flatpickr 
                  value={startDate}
                  options={{
                    minDate:'today'}} 
                  className="col-md-12 content__booking-date webkit-appearance" 
                  placeholder={t('booking.date_in')} 
                  onChange={(startDate)=>{
                    setStartDate(startDate);
                    }} />
                    </div>
                <div className="col-md-2">
                  <Flatpickr 
                  value={endDate}
                  options={{minDate:new Date(startDate)}} 
                  className="col-md-12 content__booking-date webkit-appearance" 
                  placeholder={t('booking.date_out')} 
                  onChange={(endDate) =>{
                    setEndDate(endDate)
                  }} />
                  </div>
            
                {/* <div className="col-md-2 offset-md-1">
                    <div className="content__booking-date-in">
                        <Flatpickr 
                        value={startDate}
                        options={{
                            minDate:'today',
                        }}
                        className="form__content webkit-appearance" 
                        placeholder={t('booking.date_in')} 
                        onChange={(startDate) => setStartDate(startDate)}/>
                </div>
                </div>
                <div className="col-md-2">
                <div className="content__booking-date-out">
                <Flatpickr 
                value={endDate}
                options={{
                    minDate:new Date(startDate),
                  }}
                className="flatpickr webkit-appearance" 
                placeholder={t('booking.date_out')} 
                onChange = {(endDate) => setEndDate(endDate)} />
                </div>
                </div> */}

                <div className="col-md-2">
                <div className="content__booking-branch">
                    <select className="content__booking-branch-select"
                    id={selectedCity}
                    value={selectedCity}
                    onChange={(e)=>setSelectedCity(e.target.value)}>
                        {city.map(item => (
                            <option key={item.id} value={item.id}>{item.city_name}</option>
                        ))}
                        <option value="" disabled selected hidden>
                        {t('booking.placeHolder')}
                        </option>
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <div className="content__booking-hotel-select">
                    <select className="content__booking-hotel-name-select"
                    disabled={!selectedCity}
                    value={selectedBranch}
                    onChange={(e)=>setSelectedBranch(e.target.value)}>
                        {filteredBranches.map((item, index) => (
                            <option key = {item.branch_id} value={item.branch_id} hidden = {index === 0}>{item.branch_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <button
                className="base__btn btn--mobile" style={{marginTop:10}}>{t('booking.reserve')}
                {startDate == undefined && endDate == undefined && selectedBranch == undefined ? <Link to = {`/Reservation`} ></Link> :  <Link to = {`/${selectedBranch}/room`} ></Link> }
                </button> 
                </div>  
                </div>
            </div>
         </div>
        </div>
    )
    
}
