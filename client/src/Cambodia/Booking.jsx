import {useState } from "react";
import Flatpickr from "react-flatpickr";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Booking (){
    const {t} = useTranslation()
    const bookingData = t('booking', {returnObjects:true})
    const city = t('booking.city_pp')
    const branch = t('booking.branch_pp')
    const header = t('header', {returnObjects:true})
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [selectedCity, setSelectedCity] = useState(city);
    const [selectedBranch, setSelectedBranch] = useState(branch);

    console.log(selectedCity);
    console.log(selectedBranch); 
    return(
        <div>              
        <div className="content__booking">
        <div className="container">
            <div className="row gx-3 justify-content-center">
                <div className="col-md-12 ">
                <div className="content__booking-title">{t('booking.title')}</div>
                </div>
                <div className="col-md-2">
                <Flatpickr 
                value={startDate}
                options={{
                    minDate:'today',
                  }}
                className="col-md-12 content__booking-date webkit-appearance" 
                placeholder={t('booking.date_in')} 
                onChange={(startDate) => setStartDate(startDate)}/>
                </div>
                <div className="col-md-2">
                <Flatpickr 
                value={endDate}
                options={{
                    minDate:new Date(startDate),
                  }}
                className="col-md-12 content__booking-date webkit-appearance" 
                placeholder={t('booking.date_out')} 
                onChange = {(endDate) => setEndDate(endDate)} />
                </div>
                <div className="col-md-2">
                <div className="content__booking-branch">
                    <select className="content__booking-branch-select"
                    defaultValue={selectedCity}>
                    <option value={city}>{city}</option>
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <div className="content__booking-hotel-select">
                    <select className="content__booking-hotel-name-select"
                    defaultValue={selectedBranch}>
                            <option value={branch}>{branch}</option>
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <button className="base__btn btn--mobile">{t('booking.reserve')}
                    <Link to = {`/${selectedCity}/${selectedBranch}`}></Link>
                </button> 
                </div>  
                </div>
            </div>
         </div>
        </div>
    )
    
}
