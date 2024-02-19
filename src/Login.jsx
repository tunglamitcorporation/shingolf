import { Link } from "react-router-dom"
export default function Login() {
    return(
<div className="container_login container">
  <div className="left_login">
     <div className="login_header">
     <div className="login_title animation a0">
          <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1704960124/AzumayaWeb/AzLogo_soh6hr.png">
          </img>
          </div>
      <h2 className=" mt-3 animation a1">Welcome Back</h2>
      <h4 className="animation a2">Log in to your account using email and password</h4>
     </div>
		<form className="login_card-form">
						<div className="login_input animation a4">
				<input type="text" className="login_input-field" required/>
				<label className="login_input-label ml-0">Email</label>
			</div>
						<div className="login_input animation a5">
				<input type="password" className="login_input-field" required/>
				<label className="login_input-label ml-0">Password</label>
        
			</div>
			<div className="mt-3 animation a6">
				<button className="action-button">Sign In</button>
			</div>
      <div className="login__footer d-flex mt-3 justify-content-between align-items-center animation a7">
          <div className="d-flex">
          <input id = "purple-checkbox" type ="checkbox" ></input>
          <label className="login__label mb-0" htmlFor="remember">Remember me</label>
           </div>
         <a className="forgot-pass" href="#">Forgot Password ?</a>
          </div>
		</form>
		<div className="login_card-info animation a8">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
    <div className="row justify-content-center">
                <img className="login_method" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1704961664/AzumayaWeb/Google_Logo_lmsdq7.png" alt="" />
                <img className="login_method" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1704961663/AzumayaWeb/Facebook_Logo_tkito8.webp" alt="" />
                <img className="login_method" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1704962396/AzumayaWeb/Line_Logo_iccfnp.png" alt="" />
    </div>
		</div>
    <div className="animation a9">
			<p  style={{fontSize:"1.4rem"}}>Have not account ? <Link to ="/News" style={{color:"#482979", fontWeight:600}}>Sign Up here</Link></p>
  </div>
  </div>
  <div className="right_login"></div>
</div>
    )
}