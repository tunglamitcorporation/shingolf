import React, { useState, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';;

import axios from 'axios';
// import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
// import { actModalChange, actModalIsOk, actResetModal } from '../../actions/modal';
import './login2.css'
// import { useDispatch,} from 'react-redux';
//import { actLogin, actGetPositions } from '../../actions/loginAction/login'
// import { authAction } from '../../redux/actions'
// import { hideLoading } from '../../actions/ui';
// import ModalSupportOption from '../../components/SupportComponents/Modal/ModalOption';

import logo from '../../image/logo.jpg'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function LoginContainer() {
    const [user, setUser] = useState(initialState);
    //  const token = useSelector(state => state.auth.token)
    // const dispatch = useDispatch();
    // const history = useHistory();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const firstLogin = localStorage.getItem('firstLogin');
    const { email, password, err, success } = user;

    useLayoutEffect(() => {
        if (firstLogin) {
           // navigate("/home")
        }  else setIsLoading(false)
    }, [firstLogin]);

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' })
    }

    const handleLogin = async e => {
        try {
            // dispatch(authAction.checkOnServer());
            // const URL = process.env.REACT_APP_HOTEL_API;
            const res = await axios.post(`/user/login`, { email, password });
            console.log("res", res)
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true);

            // dispatch(hideLoading())
            // dispatch(authAction.login())
       //     navigate("/home")
            

        } catch (error) {
            error.response.data.msg &&
                setUser({ ...user, err: error.response.data.msg, success: '' })
            // dispatch(hideLoading());
        }
    }

    function closeModal() {
        // const closeModal = actResetModal();
        // dispatch(closeModal);
    }

    return (
        <div class="login_container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src={logo} class="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="email" id="email" class="form-control input_user" placeholder="username"
                                value={user.email}
                                onChange={handleChangeInput}
                            ></input>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
                            <input type="password" name="password" id="password" class="form-control input_user" placeholder="username"
                                value={user.password}
                                onChange={handleChangeInput}
                            ></input>
							{/* <input type="password" name="passwprd" id="password" class="form-control input_pass" placeholder="password"
                                value={user.password}
                                onChange={handleChangeInput}
                            ></input> */}
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
                        <div style={{ fontSize: '1.3rem', color:"red"}}>
                            {err } 
                            {/* && showErrMsg(err) */}
                            {/* {success && showSuccessMsg(success)} */}
                        </div>
				   </div>

                   <div style={{textAlign:'center'}}>
                         <button  type="button" name="button" class="btn login_btn" 
                           onClick={()=>handleLogin()}>LOGIN</button>
                    </div>
					</form>
				</div>
		
				{/* <div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div> */}
			</div>
		</div>
	</div>
    )

    return (
       <div className="login">
        {/* <div className='d-flex'>
            <div className="header__logo">
            <Link to="/">
                <img
                    // style={{width:'100px'}}
                    src={logo}
                    alt="logo"
                />
            </Link>
            </div>

            <Link to="/" className="login__header">
                ***  SHIN GOLF ADMIN LOGIN ***
            </Link>
            <h1> LOGIN SYSTEM</h1>
        </div> */}

        <form className="login__form" onSubmit={handleSubmit}>

            <div className="login__form__group" >
                <label class="login__form__email--label col-md-2">E-Mail:</label>
                <input className="login__form__group--input col-md-4"
                    type="text" placeholder="Enter your email" id="email"
                    value={email} name="email"
                    onChange={handleChangeInput}
                ></input>
            </div>
            <div className="login__form__group">
                <label htmlFor="password" className="login__form__email--label col-md-2">Password:</label>
                <input className="login__form__group--input col-md-4"
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    value={password} name="password"
                    onChange={handleChangeInput} ></input>
            </div>

            <div style={{ fontSize: '1.5rem' }}>
                {err } 
                {/* && showErrMsg(err) */}
                {success && showSuccessMsg(success)}
            </div>
            <div style={{textAlign:'center'}}>
                <button type="submit" className="login__form__button">LOGIN</button>
            </div>
        </form>

    </div>

    );
}

export default LoginContainer;
