import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
export default function Policies(){
    const {t} = useTranslation()
    const policiesData = t('policy',{returnObjects:true})
    const data = t('policy.data',{returnObjects:true})
    return(
        <div> 
            <div className="policies__header">
                    <div classNameName="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{t('policy.title')}</h1>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="re__breadcrumb">
                        <ul className="breadcrumb__list">
                                   <li className = "breadcrumb__item">
                                       <Link  to="/Home">
                                           <i className="fa-solid fa-house"></i>
                                       </Link>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                       <Link className ="breadcrumb__title" to = '/Policies'>Hotel Policies</Link>
                                </li>
                       </ul>
                       </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <div className="content__policies">     
                            <table className="table__policies">
                             {data.map(item=>(
                            <tr>
                            <td style={{fontWeight: 600}}>{item.name}</td>
                            <td >{item.content}</td>
                            </tr>
                            ))}
                            </table>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
       
    )
}                   