import { Link } from "react-router-dom"
export default function SignUp() {
    return(
<div className="container_login container d-flex justify-content-center">
    <div className="left_login">
     <div className="login_header">
     <div className="login_title animation a0 d-flex justify-content-center">
     <img style={{width:"30%", height:"35%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1704960124/AzumayaWeb/AzLogo_soh6hr.png"/>
     </div>
     <h2 className="center mt-3 animation a1">Sign Up Information</h2>
     </div>
		<form className="login_card-form">
			<div className="login_input animation a3">
				<input type="text" className="login_input-field" required/>
				<label className="login_input-label ml-0">Family Name</label>
			</div>
						<div className="login_input animation a4">
				<input type="text" className="login_input-field" required/>
				<label className="login_input-label ml-0">Given Name</label>
			</div>
						<div className="login_input animation a5">
				<input type="text" className="login_input-field" required/>
				<label className="login_input-label ml-0">Gender</label>
			</div>
            <div className="login_input animation a5">
				<input type="text" className="login_input-field" required/>
				<label className="login_input-label ml-0">DOB</label>
			</div>
            <div className="login_input animation a5">
				<input type="email" className="login_input-field" required/>
				<label className="login_input-label ml-0">Email</label>
			</div>
            <div className="login_input animation a5">
				<input type="text" className="login_input-field" required/>
				<label className="login_input-label ml-0">Phone Number</label>
			</div>
            <div className="login_input animation a5">
				<input type="password" className="login_input-field" required/>
				<label className="login_input-label ml-0">Password</label>
			</div>
            <div className="login_input animation a5">
				<input type="password" className="login_input-field" required/>
				<label className="login_input-label ml-0">Confirm Password</label>
			</div>
            <div className="mt-4 animation a6">
				<button className="action-button">Sign Up</button>
			</div>
            <div className="login_card-info animation a8">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
    </div>
    <div className="animation a9">
			<p  style={{fontSize:"1.4rem"}}>Have account ? <Link to ="/Login" style={{color:"#482979", fontWeight:600}}>Sign In here</Link></p>
  </div>
		</form>
  </div>
  <div className="right_login" style={{backgroundImage:`url("https://res.cloudinary.com/dtdfsaaei/image/upload/v1705053648/AzumayaWeb/Entrance_2_eesxzq.heic")`}}></div>
   </div>
    )
}