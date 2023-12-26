import {useState } from "react";
import Flatpickr from "react-flatpickr";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Booking (){
    const {t} = useTranslation()
    const bookingData = t('booking', {returnObjects:true})
    const city = t('booking.city', {returnObjects:true})
    const branch = t('booking.branch', {returnObjects:true})
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    console.log(startDate);
    console.log(endDate); 
    const [selectedCity, setSelectedCity] = useState("Ho Chi Minh");
    const [selectedBranch, setSelectedBranch] = useState("Le Thanh Ton");
    const flatBranches = [].concat(...branch)
    const filteredBranches = flatBranches.filter(b => b.city_name == selectedCity)
    return(
        <div>              
        <div className="content__booking">
        <div className="container">
            <div className="row gx-3">
                <div className="col-md-12 ">
                <div className="content__booking-title">{t('booking.title')}</div>
                </div>
                <div className="col-md-2 offset-md-1">
                <div className="content__booking-date-in">
                <Flatpickr 
                value={startDate}
                options={{
                    minDate:'today',
                  }}
                className="flatpickr check-in-time webkit-appearance" 
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
                className="flatpickr check-out-time webkit-appearance" 
                placeholder={t('booking.date_out')} 
                onChange = {(endDate) => setEndDate(endDate)} />
                </div>
                </div>
                <div className="col-md-2">
                <div className="content__booking-branch">
                    <select className="content__booking-branch-select"
                    id={selectedCity}
                    value={selectedCity}
                    onChange={(e)=>setSelectedCity(e.target.value)}>
                        {city.map(item => (
                            <option key={item.id} value={item.city_name}>{item.city_name}</option>
                        ))}
                        {/* <option value="" disabled selected hidden>
                        Please select a city
                        </option> */}
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <div className="content__booking-hotel-select">
                    <select className="content__booking-hotel-name-select"
                    disabled={!selectedCity}
                    value={selectedBranch}
                    onChange={(e)=>setSelectedBranch(e.target.value)}>
                        {filteredBranches.map(item =>(
                            <option key = {item.branch_id} value={item.branch_name}>{item.branch_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <button className="base__btn btn--mobile">{t('booking.reserve')}
                    <Link to = '/Component/Reservation'></Link>
                </button> 
                </div>  
                </div>
            </div>
         </div>
        </div>
    )
    
}
