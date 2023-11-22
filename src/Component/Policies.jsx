import {Link} from 'react-router-dom'
export default function Policies(){
    return(
        <div> 
            <div className="policies__header">
                    <div classNameName="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Hotel  Policies</h1>
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
                                       <Link  to="/Component/Home">
                                           <i className="fa-solid fa-house"></i>
                                       </Link>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                       <Link className ="breadcrumb__title" to = '/Component/Policies'>Hotel Policies</Link>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
        <div className="content__policies">
        <div className="reservation__container">
        <table className="table__policies">
                <tr>
                    <td style={{fontWeight: 600}}>Check-in</td>
                    <td>After 15:00</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 600}}>Check-out</td>
                    <td>Until 12:00</td>
                </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Early check-in</td>
                    <td>Will be subject to the availability of hotel room status<br />

                        - Check in early until 10:00 : 100% charged of one night room rate <br />
                        
                        - Check in early from 10:00 and before 15:00 : 50% charged of one night room rate</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Late check-out</td>
                    <td>Will be subject to the availability of hotel room status<br />

                        -   Check out late until 18:00 : 50% charged of the one night<br />
                        
                        -    Check out late from 18:00 : 100% charged of the one night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Early check-out</td>
                    <td>- In 48 hours prior to 15:00 of new check out date: 50% charged of one last night<br />

                        - In 24 hours prior to 15:00 of new check out date: 100% charged of one last night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Late cancelation</td>
                    <td>In 48 hours prior to 15:00 of check in date : 50% charged of onenight <br />
                        In 24 hours prior to 15:00 of check in date: 100% charged ofone night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>No show</td>
                    <td>100% charged one night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Exchange rate is based on</td>
                    <td>The guest with Corporate Contract: the hotel rate on check in date is applied.<br />
                        The guest without Corporate Contract: the selling rate from Vietcombank at 6pm on check in date is applied</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Please be noted</td>
                    <td>The Booking Confirmation (we will send you by e-mail) should be showed to Reception upon Check-in<br />
                        The valid Passport ( non Vietnamese ) or ID ( Vietnamese ) is required for guest registration as Vietnamese laws</td>
                 </tr>
            </table>
        </div>
    </div>
</div>
    )
}                   