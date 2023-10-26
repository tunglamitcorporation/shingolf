import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";

export default function Booking (){
    const [startDate, setStartDate] = useState(new Date());
    // const [sticky, setSticky] = useState("");
    // useEffect(()=>{
    //     window.addEventListener('scroll', isSticky);
    //     return() => {
    //     window.removeEventListener('scroll', isSticky);
    //     }
    // },[])
    // const isSticky = () => {
    //     const scrollTop = window.scrollY;
    //     const stickyClass = scrollTop >= 200 ? "is-sticky" : "";
    //     setSticky(stickyClass)
    // }
    // const classes = `content__booking ${sticky}`
    // {classes}
    return(
        <div>              
        <div class="content__booking">
        <div class="container">
            <div class="row gx-3">
                <div class="col-md-12 ">
                <div class="content__booking-title">Book Here</div>
                </div>
                <div class="col-12 col-md-2 offset-md-1">
                <div class="content__booking-date-in">
                <Flatpickr class="flatpickr" placeholder="Check in date" onChange={([date]) => {setStartDate({ date }); }} />
                </div>
                </div>
                <div class="col-12 col-md-2">
                <div class="content__booking-date-out">
                <Flatpickr class="flatpickr" placeholder="Check out date"onChange={([date]) => {setStartDate({ date }); }} />
                </div>
                </div>
                <div class="col-12 col-md-2">
                <div class="content__booking-branch">
                    <select class="content__booking-branch-select">
                        <option value="Hanoi Capital">Hanoi Capital</option>
                        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                        <option value="Haiphong City">Haiphong City</option>
                        <option value="Danang City">Danang City</option>
                    </select>
                </div>
                </div>
                <div class="col-12 col-md-2">
                <div class="content__booking-hotel-select">
                    <select class="content__booking-hotel-name-select">
                        <option value="Hanoi Capital">Azumaya Linh Lang</option>
                        <option value="Ho Chi Minh City">Azumaya Hai Ba Trung</option>
                        <option value="Haiphong City">Azumaya Kim Ma I</option>
                        <option value="Danang City">Azumaya Kim Ma II</option>
                    </select>
                </div>
                </div>
                <div class="col-12 col-md-2">
                <button class="base__btn btn--mobile">Reserve
                    <a> 
                        
                    </a>
                </button> 
                </div>  
                </div>
            </div>
    </div>
        </div>
    )
    
}
