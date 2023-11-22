import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Booking (){
    const {t} = useTranslation()
    const bookingData = t('booking', {returnObjects:true})
    const city = t('booking.city', {returnObjects:true})
    const branch = t('booking.branch', {returnObjects:true})
    const [startDate, setStartDate] = useState(new Date());
    const [selectedCity, setSelectedCity] = useState();
    const flatBranches = [].concat(...branch)
    const filteredBranches = flatBranches.filter(b => b.city_id == selectedCity)
    console.log(filteredBranches)
    return(
        <div>              
        <div className="content__booking">
        <div className="container">
            <div className="row gx-3">
                <div className="col-md-12 ">
                <div className="content__booking-title">{t('booking.title')}</div>
                </div>
                <div className="col-12 col-md-2 offset-md-1">
                <div className="content__booking-date-in">
                <Flatpickr className="flatpickr" placeholder={t('booking.date_in')} onChange={([date]) => {setStartDate({ date }); }} />
                </div>
                </div>
                <div className="col-12 col-md-2">
                <div className="content__booking-date-out">
                <Flatpickr className="flatpickr" placeholder={t('booking.date_out')} onChange={([date]) => {setStartDate({ date }); }} />
                </div>
                </div>
                <div className="col-12 col-md-2">
                <div className="content__booking-branch">
                    <select className="content__booking-branch-select"
                    id={selectedCity}
                    value={selectedCity}
                    onChange={(e)=>setSelectedCity(e.target.value)}>
                        {city.map(item => (
                            <option key={item.id} value={item.id}>{item.city_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className="col-12 col-md-2">
                <div className="content__booking-hotel-select">
                    <select className="content__booking-hotel-name-select"
                    id='branchSelect'
                    disabled={!selectedCity}>
                        {filteredBranches.map(item =>(
                            <option key = {item.branch_id} value={item.branch_id}>{item.branch_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className="col-12 col-md-2">
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
