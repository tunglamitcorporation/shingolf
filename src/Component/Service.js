import { useState } from "react";
import Booking from "./Booking";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
export default function Service() {
    const [isActive, setActive] = useState(false)
    const toggleClass = () =>{
        setActive(!isActive);
    }
    return (
        
        <div>
            <div class="service__header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 offset-5">
                            <div class="policies__title">Service</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-sticky">
                <Booking />
            </div>
            <div class="re__breadcrumb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"></div>
                        <ul class="breadcrumb__list">
                                   <li class = "breadcrumb__item">
                                       <a href="/AzumayaClone/index.html">
                                           <i class="fa-solid fa-house"></i>
                                       </a>
                                   </li>
                                   <li class = "breadcrumb__item">
                                       /
                                   </li>
                                   <li class = "breadcrumb__item">
                                        <a class ="breadcrumb__title" href="/AzumayaClone/html/service.html">Service</a>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="service__container">
            <Tabs className="container"> 
                <TabList className="row"style={{justifyContent:'space-around'}}>
                    <Tab className="service__location service__active col-md-2">Ho Chi Minh</Tab> 
                    <Tab className="service__location col-md-2">Ha Noi</Tab> 
                    <Tab className="service__location col-md-2">Hai Phong</Tab> 
                    <Tab className="service__location col-md-2">Da Nang</Tab> 
                </TabList> 
                <TabPanel> 
                    <Tabs  defaultIndex={1} className="col-md-10 offset-md-1"> 
                        <TabList className="service__list "> 
                            <Tab className="service service__active">Rotenburo</Tab> 
                            <Tab className="service">Breakfast</Tab> 
                            <Tab className="service">Massage</Tab> 
                        </TabList> 
                        <TabPanel> 
                        <div class="service__content">
                                <div class="service__content-title col-md-12">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <table class="service__table">
                                    <tr>
                                        <th>Thai Van Lung 1</th>
                                        <th>Thai Van Lung 2</th>
                                        <th>Le Thanh Ton</th>
                                    </tr>
                                    <tr>
                                        <td>From Mon - Fri : 6:00 to 10:00 - 17:00 to 24:00
                                            Weekend & Holiday: 7:00 to 24:00
                                            Price (from Feb 2023)
                                            Azumaya Thai Văn Lung 1: 250.000vnd/1pax</td>
                                        <td> From Mon - Fri : 6:00 to 10:00 - 19:00 to 24:00
                                            Weekend & Holiday: 7:00 to 24:00
                                            Price (from Jan 2019)
                                            Azumaya Thái Văn Lung 2: 200.000/pax</td>
                                        <td>From Mon - Fri : 6:00 to 10:00 - 17:00 to 24:00
                                            Weekend & Holiday: 7:00 to 24:00
                                            Price (from Jan 2019)
                                            Azumaya Lê Thánh Tôn : 150.000/pax</td>
                                    </tr>
                                </table>
                                <div class="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    <br />※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    <br />Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    <br />Female customer also can use. Booking a day before is required.</div>
                            </div>
                        </TabPanel> 
                        <TabPanel> 
                        <div class="service__content">
                                <div class="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <table class="service__table">
                                    <tr>
                                        <th>Thai Van Lung 1</th>
                                        <th>Thai Van Lung 2</th>
                                        <th>Le Thanh Ton</th>
                                    </tr>
                                    <tr>
                                        <td>Buffet: 200.000VND
                                            Set menu: from 100.000VND/set
                                            
                                            Serving time:
                                            From Mon to Sat:
                                            Buffet (from 6:00 to 8:00)
                                            Set menu (from 8:00 to 10:00)
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                        <td>Buffet: 200.000VND
                                            Set menu: from 100.000VND/set
                                            
                                            Serving time:
                                            From Mon to Sat:
                                            Buffet (from 6:00 to 8:00)
                                            Set menu (from 8:00 to 10:00)
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                        <td>Buffet 200.000 VND
                                            Set menu: from 100.000/set
                                            
                                            Serving time:
                                            From Mon to Sat:
                                            Buffet (from 6:00 to 8:00)
                                            Set menu (from 8:00 to 10:00)
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                    </tr>
                                </table>
                            </div>
  
                        </TabPanel> 
                        <TabPanel> 
                        <div class="service__content">
                                <div class="service__content-title">
                                    Foot tis open daily at Azumaya Thai Van Lung 1, 1st floor, are also available for visitor.</div>
                                    <div class="service__content-body">Opening hours 10:00 - 23:00 (last entry 22: 45)

                                        The course and fee are as follows.
                                        ・40 minutes course 250,000 VND
                                        ・70 minutes course 300,000 VND (Hotel guest: 270,000 VND)
                                        ・100 minutes course 400,000 VND (Hotel guest: 360,000 VND)
                                        
                                        Rotenburo Set for Visitor
                                        ・Set Rotenburo + Massage 40' ：400,000 VND
                                        ・Set Rotenburo + Massage 70' : 450,000 VND
                                        ・Set Rotenburo + Massage 100' : 550,000 VND
                                        
                                        * 10% discount for Hotel guests
                                        * Tip is excluded, your satisfaction is our pleasure.
                                        * Advance reservation is highly recommended.
                                        Please call for booking Azumaya Thai Van Lung 1 (028) 3824 6835</div>
                                </div>
  
                        </TabPanel> 
                    </Tabs> 
                </TabPanel> 
                <TabPanel> 
                    <Tabs> 
                        <TabList> 
                            <Tab>Rotenburo</Tab> 
                            <Tab>Breakfast</Tab> 
                            <Tab>Massage</Tab> 
                        </TabList> 
                        <TabPanel> 
                            <p> 
                                Welcome to GeeksforGeeks</p> 
                        </TabPanel> 
                        <TabPanel> 
                            <p> 
                                A computer science portal for geeks.</p> 
                        </TabPanel> 
                        <TabPanel> 
                            <p> 
                                Also known as GFG</p> 
                        </TabPanel> 
                    </Tabs> 
                </TabPanel> 
            </Tabs> 
            {/* <div class="service__container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="service__location service__active">
                                <h2>Ho Chi Minh</h2>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="service__location">
                                <h2>Ha Noi</h2>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="service__location">
                                <h2>Hai Phong</h2>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="service__location">
                                <h2>Da Nang</h2>
                            </div>
                        </div>
                        
                        <div class="service__list-container">
                            <ul class="service__list">
                                <li class="service service__active">Breakfast</li>
                                <li class="service">Rotenburo</li>
                                <li class="service">Massage</li>
                            </ul>
                            <div class="service__content">
                                <div class="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <table class="service__table">
                                    <tr>
                                        <th>Thai Van Lung 1</th>
                                        <th>Thai Van Lung 2</th>
                                        <th>Le Thanh Ton</th>
                                    </tr>
                                    <tr>
                                        <td>From Mon - Fri : 6:00 to 10:00 - 17:00 to 24:00
                                            Weekend & Holiday: 7:00 to 24:00
                                            Price (from Feb 2023)
                                            Azumaya Thai Văn Lung 1: 250.000vnd/1pax</td>
                                        <td> From Mon - Fri : 6:00 to 10:00 - 19:00 to 24:00
                                            Weekend & Holiday: 7:00 to 24:00
                                            Price (from Jan 2019)
                                            Azumaya Thái Văn Lung 2: 200.000/pax</td>
                                        <td>From Mon - Fri : 6:00 to 10:00 - 17:00 to 24:00
                                            Weekend & Holiday: 7:00 to 24:00
                                            Price (from Jan 2019)
                                            Azumaya Lê Thánh Tôn : 150.000/pax</td>
                                    </tr>
                                </table>
                                <div class="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    ※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    Female customer also can use. Booking a day before is required.</div>
                            </div>
                            <div class="service__content"style={{display: 'none'}}>
                                <div class="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <table class="service__table">
                                    <tr>
                                        <th>Thai Van Lung 1</th>
                                        <th>Thai Van Lung 2</th>
                                        <th>Le Thanh Ton</th>
                                    </tr>
                                    <tr>
                                        <td>Buffet: 200.000VND
                                            Set menu: from 100.000VND/set
                                            
                                            Serving time:
                                            From Mon to Sat:
                                            Buffet (from 6:00 to 8:00)
                                            Set menu (from 8:00 to 10:00)
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                        <td>Buffet: 200.000VND
                                            Set menu: from 100.000VND/set
                                            
                                            Serving time:
                                            From Mon to Sat:
                                            Buffet (from 6:00 to 8:00)
                                            Set menu (from 8:00 to 10:00)
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                        <td>Buffet 200.000 VND
                                            Set menu: from 100.000/set
                                            
                                            Serving time:
                                            From Mon to Sat:
                                            Buffet (from 6:00 to 8:00)
                                            Set menu (from 8:00 to 10:00)
                                            Sunday: only set menu (from 6:00 to 10:00)</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="service__content"style={{display:'none'}} >
                                <div class="service__content-title">
                                    Foot tis open daily at Azumaya Thai Van Lung 1, 1st floor, are also available for visitor.</div>
                                    <div class="service__content-body">Opening hours 10:00 - 23:00 (last entry 22: 45)

                                        The course and fee are as follows.
                                        ・40 minutes course 250,000 VND
                                        ・70 minutes course 300,000 VND (Hotel guest: 270,000 VND)
                                        ・100 minutes course 400,000 VND (Hotel guest: 360,000 VND)
                                        
                                        Rotenburo Set for Visitor
                                        ・Set Rotenburo + Massage 40' ：400,000 VND
                                        ・Set Rotenburo + Massage 70' : 450,000 VND
                                        ・Set Rotenburo + Massage 100' : 550,000 VND
                                        
                                        * 10% discount for Hotel guests
                                        * Tip is excluded, your satisfaction is our pleasure.
                                        * Advance reservation is highly recommended.
                                        Please call for booking Azumaya Thai Van Lung 1 (028) 3824 6835</div>
                                </div>
                        </div>
                        <div class="service__list-container" style={{display:'none'}}>
                            <ul class="service__list">
                                <li class="service service__active">Breakfast</li>
                                <li class="service">Rotenburo</li>
                                <li class="service">Massage</li>
                            </ul>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <div class="service__content-body">Mon - Fri: 6:00 - 9:00 & 17:00 - 23:00
                                    Sat & Sun: 7:00 - 23:00
                                    Price: 120.000VND/1pax (Hai Ba Trung 1)
                                    150.000VND/1pax (Kim Ma 2, Linh Lang)</div>
                                <div class="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    ※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    Female customer also can use. Booking a day before is required.</div>
                            </div>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <table class="service__table">
                                    <tr>
                                        <th>Kim Ma 2's serving time</th>
                                        <th>Hai Ba Trung & Linh Lang's serving time</th>
                                        
                                    </tr>
                                    <tr>
                                        <td>Mon-Sat: 6:00 - 8:00 (Buffet) & 8:00 - 10:00 (Set Menu)
                                            Sun: 6:00 - 10:00 (Set Menu Only)
                                            Price: 200.000VND/1pax
                                            Combo Breakfast + Rotenburo: 300.000VND/1pax</td>
                                        <td>Mon-Sat: 6:00 ~ 10:00 (Buffet) & 8:00 - 10:00 (Set Menu)
                                            Sun: 6:00 - 10:00 (Set Menu Only)
                                            Price: 150.000VND/pax
                                            Azumaya Hai Ba Trung: Combo Breakfast + Rotenburo: 250.000VND/px
                                            Azumaya Linh Lang: Combo Breakfast + Rotenburo: 260.000VND/pax</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">
                                    Foot Massage service open daily at Azumaya Linh Lang, is also available for visitor.</div>
                                    <div class="service__content-body">Opening hour
                                        Monday ~ Friday 13:00 - 22:00 (last entry 21: 30)
                                        Sun & Sat 10:00 – 22:00(last entry 21: 30)
                                        
                                        The course and fee are as follows.
                                        ・40 minutes course 200,000 VND
                                        ・70 minutes course 250,000 VND (Hotel guest: 225,000 VND)
                                        ・100 minutes course 350,000 VND (Hotel guest: 315,000 VND)
                                        
                                        Rotenburo Set for Visitor
                                        ・Set Rotenburo + Massage 40' ：330,000 VND
                                        ・Set Rotenburo + Massage 70' : 370,000 VND
                                        ・Set Rotenburo + Massage 100' : 470,000 VND
                                        
                                        * 10% discount for Hotel guests
                                        * Tip is excluded, your satisfaction is our pleasure.
                                        * Advance reservation is highly recommended.
                                        Please call for booking Azumaya Linh Lang (024) 38620620</div>
                                </div>
                        </div>
                        <div class="service__list-container" style={{display:'none'}}>
                            <ul class="service__list">
                                <li class="service service__active">Breakfast</li>
                                <li class="service">Rotenburo</li>
                                <li class="service">Massage</li>
                            </ul>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <div class="service__content-body">AM: Mon - Fri: 6am - 9am (last entry 8:30am) / Sat - Sun : 7am - 12pm (last entry 11:30am)
                                    PM: Mon - Sun : 5:30pm - 11pm (last entry 10:30pm)</div>
                                <div class="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    ※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    Female customer also can use. Booking a day before is required.</div>
                            </div>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <table class="service__table" style={{marginLeft: '30%'}}>
                                    <tr>
                                        <th>Azumaya Hai Phong</th>
                                    </tr>
                                    <tr>
                                        <td>Open Hour: 6am~10am
                                            Mon-Sat:
                                            6am~8am: Buffet
                                            8am~10am: Set menu</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Sun: 6am~10am: Set menu
                                        </td>
                                </tr>
                                </table>
                                <div class="service__content-note" >Price for visitor is: 150.000 VND/pax
                                    Combo Breakfast + Rotenburo: 230.000 VND/pax</div>
                            </div>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">
                                    Sorry for the inconvenience</div>
                                    <div class="service__content-body">The massage business is also temporarily suspended
                                </div>
                                </div>
                        </div>
                        <div class="service__list-container" style={{display:'none'}}>
                            <ul class="service__list">
                                <li class="service service__active">Breakfast</li>
                                <li class="service">Rotenburo</li>
                                <li class="service">Massage</li>
                            </ul>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">Open-air Bathtub (Rotenburo) are open daily as Public timing For men only (Visitor are also welcome)</div>
                                <div class="service__content-body">AM: Mon - Fri: 6am - 9am (last entry 8:30am) / Sat - Sun : 7am - 10am (last entry 9:30am)
                                    PM: Sat - Sun : 5pm - 10:15pm (last entry 10pm)</div>
                                <div class="service__content-note">※Female can use Rotenburo at Azumaya Thai Van Lung 2, From Mon - Fri : 17:00 - 18:45, price is 150.000/pax
                                    ※Private - Rotenburo is available from Mon To Fri: 11:00 to 17:00 (last order 16:00)
                                    Price: 800.000vnd/hour for 1~4pax & 1.000.000vnd/hour for 5~8pax
                                    Female customer also can use. Booking a day before is required.</div>
                            </div>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">
                                    Azumaya Breakfast are open daily from 6am to 10am.
                                    Visitor are also welcoming. Price for visitor is as following</div>
                                <div class="service__content-body">Price for visitor is ： 120.000VND/ pax</div>
                            </div>
                            <div class="service__content" style={{display:'none'}}>
                                <div class="service__content-title">
                                    Foot massage is open daily at Azumaya Da Nang, are also available for visitor.</div>
                                    <div class="service__content-body">Opening hours:

                                        Mon ~ Fri: 14:00 - 22:30 (last entry: 22:15)
                                        Weekend: 12:00 - 22:30 (last entry: 22:15)
                                        The course and fee are as follows.
                                        * 40 minutes course: 200,000 VND
                                        * 70 minutes course: 250,000 VND (Hotel guest: 225,000 VND)
                                        * 100 minutes course: 350,000 VND (Hotel guest: 315,000 VND)
                                        
                                        * There is a 10% discount for Hotel guests.
                                        * The tip is excluded, your satisfaction is our pleasure.
                                        
                                        Advance reservation is highly recommend.
                                        Please call for booking: Azumaya Da Nang: (0236) 3743 888</div>
                                </div>
                        </div>
                     </div> 
                </div>*/}
            </div>
        </div>
    )
}