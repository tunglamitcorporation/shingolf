import {useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
export default function Booking (){
    const {t} = useTranslation()
    const navigate = useNavigate()
    const city = t('booking.city', {returnObjects:true})
    const branch = t('booking.branch', {returnObjects:true})

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedCity, setSelectedCity] = useState('hotel-hcm');
    const [selectedBranch, setSelectedBranch] = useState('le-thanh-ton-detail');
    const flatBranches = [].concat(...branch)
    const filteredBranches = flatBranches.filter(b => b.city_id == selectedCity)

    const handleBranchValue = (cityId) => {
        switch(cityId) {
          case 'hotel-hn':
            setSelectedBranch('hai-ba-trung-detail')
            break;
          case 'hotel-dn': 
            setSelectedBranch('da-nang');
            break;
          case 'hotel-hp':
            setSelectedBranch('hai-phong');
            break;
          default:
            setSelectedBranch('');
        }
      };

      const handleCityChange = (e) => {
        const cityId = e.target.value;
        setSelectedCity(cityId);
        handleBranchValue(cityId);
      };

    const handleSendData = () => {
        const data = {
            startDate: startDate ? format(startDate, 'yyyy-MM-dd'): '',
            endDate: endDate ? format(endDate,'yyyy-MM-dd'): '',
            selectedCity,
            selectedBranch
        }
        navigate(`/${selectedBranch}/room`,{state: data})
    }
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
                    minDate:'today',
                    dateFormat:'Y-m-d'}} 
                  className="col-md-12 content__booking-date webkit-appearance" 
                  placeholder={t('booking.date_in')} 
                  onChange={(dates)=>{
                    setStartDate(dates[0]);
                    }} />
                    </div>
                <div className="col-md-2">
                  <Flatpickr 
                  value={endDate}
                  options={{
                    minDate:new Date(startDate),
                    dateFormat:'Y-m-d'}} 
                  className="col-md-12 content__booking-date webkit-appearance" 
                  placeholder={t('booking.date_out')} 
                  onChange={(dates) =>{
                    setEndDate(dates[0]);
                  }} />
                  </div>
                <div className="col-md-2">
                <div className="content__booking-branch">
                    <select className="content__booking-branch-select"
                    id={selectedCity}
                    value={selectedCity}
                    onChange= {handleCityChange}>
                        {city.map(item => (
                            <option className="p-3" key={item.id} value={item.id}>{item.city_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <div className="content__booking-hotel-select">
                    <select className="content__booking-hotel-name-select"
                    // disabled={!selectedCity}
                    value={selectedBranch}
                    onChange={(e)=> setSelectedBranch(e.target.value)}>
                        {filteredBranches.map((item, index) => (
                            <option className="p-3" key = {item.branch_id} value={item.branch_id}>{item.branch_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className="col-md-2">
                <button
                onClick={handleSendData}
                className="base__btn btn--mobile" style={{marginTop:10}}>{t('booking.reserve')}
                </button> 
                </div>  
                </div>
            </div>
         </div>
        </div>
    )
    
}
