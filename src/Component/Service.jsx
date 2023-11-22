import { useState } from "react";
import Booking from "./Booking";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
export default function Service() {
    return (
        
        <div>
            <div className="service__header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Service</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-sticky">
                <Booking />
            </div>
            <div className="re__breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                        <ul className="breadcrumb__list">
                                   <li className = "breadcrumb__item">
                                       <a href="/AzumayaClone/index.html">
                                           <i className="fa-solid fa-house"></i>
                                       </a>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                        <a className ="breadcrumb__title" href="/AzumayaClone/html/service.html">Service</a>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
            <Tabs selectedTabclassName="service__active" className="container"> 
                <TabList className="row"style={{justifyContent:'space-around'}}>
                    <Tab className="service__location col-md-2">Ho Chi Minh</Tab> 
                    <Tab className="service__location col-md-2">Da Nang</Tab> 
                    <Tab className="service__location col-md-2">Ha Noi</Tab> 
                    <Tab className="service__location col-md-2">Hai Phong</Tab> 
                </TabList> 

                <TabPanel> 
                    <Tabs selectedTabclassName="service__active" className="col-md-10 offset-md-1"> 
                        <TabList className="service__list"> 
                            <Tab className="service">Rotenburo</Tab> 
                            <Tab className="service">Breakfast</Tab> 
                            <Tab className="service">Massage</Tab> 
                        </TabList> 
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title col-md-12">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <table className="service__content-body--table">
                                    <tr>
                                        <th>Thai Van Lung 1</th>
                                        <th>Thai Van Lung 2</th>
                                        <th>Le Thanh Ton</th>
                                    </tr>
                                    <tr>
                                        <td>From Mon - Fri : 6:00 to 10:00 - 17:00 to 24:00 <br />
                                            Weekend & Holiday: 7:00 to 24:00 <br />
                                            Price (from Feb 2023) <br />
                                            Azumaya Thai Văn Lung 1: 250.000vnd/1pax</td> 
                                        <td> From Mon - Fri : 6:00 to 10:00 - 19:00 to 24:00 <br />
                                            Weekend & Holiday: 7:00 to 24:00 <br />
                                            Price (from Jan 2019) <br />
                                            Azumaya Thái Văn Lung 2: 200.000/pax</td>
                                        <td>From Mon - Fri : 6:00 to 10:00 - 17:00 to 24:00 <br />
                                            Weekend & Holiday: 7:00 to 24:00 <br />
                                            Price (from Jan 2019) <br />    
                                            Azumaya Lê Thánh Tôn : 150.000/pax</td>
                                    </tr>
                                </table>
                                <div className="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    <br />※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    <br />Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    <br />Female customer also can use. Booking a day before is required.</div>
                            </div>
                        </TabPanel> 
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <table className="service__content-body--table">
                                    <tr>
                                        <th>Thai Van Lung 1</th>
                                        <th>Thai Van Lung 2</th>
                                        <th>Le Thanh Ton</th>
                                    </tr>
                                    <tr>
                                        <td>Buffet: 200.000VND <br />
                                            Set menu: from 100.000VND/set <br />
                                            
                                            Serving time: <br /> 
                                            From Mon to Sat: <br />
                                            Buffet (from 6:00 to 8:00) <br />
                                            Set menu (from 8:00 to 10:00) <br />
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                        <td>Buffet: 200.000VND <br />
                                            Set menu: from 100.000VND/set <br />
                                            
                                            Serving time: <br />
                                            From Mon to Sat: <br />
                                            Buffet (from 6:00 to 8:00) <br />
                                            Set menu (from 8:00 to 10:00) <br />
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                        <td>Buffet 200.000 VND <br />
                                            Set menu: from 100.000/set <br />
                                            
                                            Serving time: <br />
                                            From Mon to Sat: <br />
                                            Buffet (from 6:00 to 8:00) <br />
                                            Set menu (from 8:00 to 10:00) <br />
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                    </tr>
                                </table>
                            </div>
  
                        </TabPanel> 
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title">
                                    Foot tis open daily at Azumaya Thai Van Lung 1, 1st floor, are also available for visitor.</div>
                                    <div className="service__content-body">
                                        <p>Opening hours 10:00 - 23:00 (last entry 22: 45)</p>

                                        <p>The course and fee are as follows. <br />
                                        ・40 minutes course 250,000 VND <br />
                                        ・70 minutes course 300,000 VND (Hotel guest: 270,000 VND) <br />
                                        ・100 minutes course 400,000 VND (Hotel guest: 360,000 VND)</p>

                                        <p>Rotenburo Set for Visitor <br />
                                        ・Set Rotenburo + Massage 40' ：400,000 VND <br />
                                        ・Set Rotenburo + Massage 70' : 450,000 VND <br />
                                        ・Set Rotenburo + Massage 100' : 550,000 VND</p>
                                        
                                        <p>* 10% discount for Hotel guests <br />
                                        * Tip is excluded, your satisfaction is our pleasure. <br />
                                        * Advance reservation is highly recommended. <br />
                                        Please call for booking Azumaya Thai Van Lung 1 (028) 3824 6835</p>
                                        </div> 
                                </div>
                        </TabPanel> 
                    </Tabs> 
                </TabPanel> 

                <TabPanel>
                    <Tabs selectedTabclassName="service__active" className="col-md-10 offset-md-1">
                    <TabList className="service__list "> 
                            <Tab className="service">Rotenburo</Tab> 
                            <Tab className="service">Breakfast</Tab> 
                            <Tab className="service">Massage</Tab> 
                        </TabList> 
                        <TabPanel>
                        <div className="service__content">
                                <div className="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <div className="service__content-body">AM: Mon - Fri: 6am - 9am (last entry 8:30am) / Sat - Sun : 7am - 12pm (last entry 11:30am) <br />
                                    PM: Mon - Sun : 5:30pm - 11pm (last entry 10:30pm)</div> 
                                <div className="service__content-note">
                                            ※Female can use Rotenburo if there is any reservation booked at reception counter before:<br />
                                            AM: Mon ~ Fri: 9:15am - 10:15am / Sat - Sun: 10:15pm - 11:15pm<br />
                                            PM: Sun ~ Fri: 22:30 ~23:30<br /><br />

                                            ※Private - Rotenburo is available at Weekday from 9:15am to 4pm and Weekend from 10:15am~4pm(last order 3pm)<br />
                                            Price: 800.000 VND/ hour for 1~4pax<br />
                                            1.000.000 VND/hour for 5~8pax<br />
                                            Female customer also can use. Booking a day before is required.</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="service__content">
                                <div className="service__content-title">
                                Azumaya Breakfast is open daily from 6:00 to 10:00 with Set menu <br />
                                Visitor are also welcoming. Price for visitor is ： 120.000VND/ pax</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="service__content">
                                <div className="service__content-title">
                                    Foot massage is open daily at Azumaya Da Nang, are also available for visitor.</div>
                                    <div className="service__content-body">
                                    Opening hours:<br /><br />

                                        Mon ~ Fri: 14:00 - 22:30 (last entry: 22:15)<br />
                                        Weekend: 12:00 - 22:30 (last entry: 22:15)<br />
                                        The course and fee are as follows.<br />
                                        * 40 minutes course: 200,000 VND<br />
                                        * 70 minutes course: 250,000 VND (Hotel guest: 225,000 VND)<br />
                                        * 100 minutes course: 350,000 VND (Hotel guest: 315,000 VND)<br /><br />

                                        * There is a 10% discount for Hotel guests.<br />
                                        * The tip is excluded, your satisfaction is our pleasure.<br /><br />

                                        Advance reservation is highly recommend.<br />
                                        Please call for booking: Azumaya Da Nang: (0236) 3743 888<br />
                                </div>
                                </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel> 
                    <Tabs selectedTabclassName="service__active" className="col-md-10 offset-md-1"> 
                        <TabList className="service__list "> 
                            <Tab className="service">Rotenburo</Tab> 
                            <Tab className="service">Breakfast</Tab> 
                            <Tab className="service">Massage</Tab> 
                        </TabList> 
                        <TabPanel> 
                            <div className="service__content">
                                <div className="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <div className="service__content-body">
                                    Mon - Fri: 6:00 - 9:00 & 17:00 - 23:00 <br />
                                    Sat & Sun: 7:00 - 23:00 <br />
                                    Price: 120.000VND/1pax (Hai Ba Trung 1) <br />
                                    150.000VND/1pax (Kim Ma 2, Kim Ma 3, Linh Lang)</div>
                                <div className="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    ※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    Female customer also can use. Booking a day before is required.</div>
                            </div>
                           
                        </TabPanel> 
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <table className="service__content-body--table">
                                    <tr>
                                        <th>Kim Ma 2's serving time</th>
                                        <th>Hai Ba Trung 1, Kim Ma 3 & Linh Lang's serving time</th>
                                        
                                    </tr>
                                    <tr>
                                        <td>Mon-Sat: 6:00 - 8:00 (Buffet) & 8:00 - 10:00 (Set Menu)<br />
                                            Sun: 6:00 - 10:00 (Set Menu Only)<br />
                                            Price: 200.000VND/1pax<br />
                                            Combo Breakfast + Rotenburo: 300.000VND/1pax</td>
                                        <td>Mon-Sat: 6:00 ~ 10:00 (Buffet) & 8:00 - 10:00 (Set Menu)<br />
                                            Sun: 6:00 - 10:00 (Set Menu Only)<br />
                                            Price: 150.000VND/pax<br />
                                            Azumaya Hai Ba Trung: Combo Breakfast + Rotenburo: 250.000VND/px<br />
                                            Azumaya Linh Lang & Kim Ma 3: Combo Breakfast + Rotenburo: 260.000VND/pax</td>
                                    </tr>
                                </table>
                            </div>
                            </TabPanel>
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title">
                                    Foot Massage service open daily at Azumaya Linh Lang, is also available for visitor.</div>
                                    <div className="service__content-body">
                                        Opening hour<br />
                                        Monday ~ Friday 13:00 - 22:00 (last entry 21: 30)<br />
                                        Sun & Sat 10:00 – 22:00(last entry 21: 30)<br /><br />
                                        
                                        The course and fee are as follows.<br />
                                        ・40 minutes course 200,000 VND<br />
                                        ・70 minutes course 250,000 VND (Hotel guest: 225,000 VND)<br />
                                        ・100 minutes course 350,000 VND (Hotel guest: 315,000 VND)<br /><br />
                                        
                                        Rotenburo Set for Visitor<br />
                                        ・Set Rotenburo + Massage 40' ：330,000 VND<br />
                                        ・Set Rotenburo + Massage 70' : 370,000 VND<br />
                                        ・Set Rotenburo + Massage 100' : 470,000 VND<br /><br />
                                        
                                        * 10% discount for Hotel guests<br />
                                        * Tip is excluded, your satisfaction is our pleasure.<br />
                                        * Advance reservation is highly recommended.<br />
                                        Please call for booking Azumaya Linh Lang (024) 38620620</div>
                                </div>
                        </TabPanel> 
                    </Tabs> 
                </TabPanel> 

                <TabPanel>
                    <Tabs selectedTabclassName="service__active" className="col-md-10 offset-md-1">
                        <TabList className="service__list ">
                            <Tab className="service">Rotenburo</Tab> 
                            <Tab className="service">Breakfast</Tab> 
                            <Tab className="service">Massage</Tab> 
                        </TabList>
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <div className="service__content-body">AM: Mon - Fri: 6am - 9am (last entry 8:30am) / Sat - Sun : 7am - 12pm (last entry 11:30am)<br />
                                    PM: Mon - Sun : 5:30pm - 11pm (last entry 10:30pm)</div>
                                <div className="service__content-note">
                                    ※Female can use Rotenburo if there is any reservation booked at reception counter before:<br />
                                    AM: Mon - Fri: 9:15am - 10:15am / Sat - Sun: 12:15pm - 13:15pm<br />
                                    PM: Sun ~ Fri: 11:15pm - 12:15am<br /><br />
                                    ※Private - Rotenburo is available at Weekday from 9:15am to 4:30pm and Weekend from 12:15pm to 4:30pm (last order 3:30pm)<br />
                                    Price: 800.000 VND/ hour for 1~4pax<br />
                                    1.000.000 VND/ hour for 5~8pax<br />
                                    Female customer also can use. Booking a day before is required.</div>
                            </div>
                        </TabPanel> 
                        <TabPanel> 
                        <div className="service__content">
                                {/* <div className="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div> */}
                                <table className="service__table">
                                    <tr>
                                        <td>Open Hour: 6am~10am</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Mon-Sat:<br />
                                            6am~8am: Buffet<br />
                                            8am~10am: Set menu</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Sun: 6am~10am: Set menu
                                        </td>
                                </tr>
                                </table>
                                <div className="service__content-note" >
                                    Price for visitor is: 150.000 VND/pax<br />
                                    Combo Breakfast + Rotenburo: 230.000 VND/pax</div>
                            </div>
                            </TabPanel>
                        <TabPanel> 
                        <div className="service__content">
                                <div className="service__content-title">
                                    Sorry for the inconvenience</div>
                                    <div className="service__content-body">The massage business is also temporarily suspended
                                </div>
                                </div>
                        </TabPanel> 
                    </Tabs>
                </TabPanel>
            </Tabs> 
        </div>
    )   
}