import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.jpg'
import './adminManage.css'
import HomePage from '../../components/Admin/HomePage';
import ProducManage from '../../components/Admin/ProductManage';
import Option from '../../components/Admin/Option';
import LoginContainer from './LoginContainer';

function AdminManage() {
    const [isLogin, setIsLogin] = useState(false);
    const [selectMenu, setSelectMenu] = useState(0);

    useEffect(()=>{
        const isLoginCheck = localStorage.getItem('firstLogin');

        if(!isLoginCheck || isLoginCheck === null) setIsLogin(false);
        else setIsLogin(isLoginCheck)
    },[]);

    const listMenu = ["Product", "Home Page", "Oder Manage","News", "Option"]

    function renderListMenu() {
        return listMenu.map((item, index) => {
            return <li key={index} className={'list-menu-item mr-2 '+(selectMenu===index ?" active":"")}
            onClick={()=>setSelectMenu(index)}>{item}</li>
        })
    }

    function renderLayoutWithListMenu() {
        switch(selectMenu) {
            case 0:
                return <ProducManage />
            case 1:
                return <HomePage />
            case 2:
                return <h1>Oder Manage</h1>
            case 3:
                return <Option />
            default:
                return <h1></h1>
        }
    }

    return (
        <>
            {
                isLogin ? <div className='d-flex'>
                    <div>
                        <div class="brand_logo_container" style={{position:"unset"}}>
                            <img src={logo} class="brand_logo" alt="Logo"/>
                        </div>
                        <div className="mt-3">
                                <h4>Hi Admin</h4>
                            </div>
                        {renderListMenu()}
                    </div>

                    {renderLayoutWithListMenu()}
                </div> : <h1>Test</h1>
                //<LoginContainer />
            }
        </>
    );
}

export default AdminManage
