import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import Collapsible from 'react-collapsible'
export default function Policies(){
    const {t} = useTranslation()
    const data = t('policy.data',{returnObjects:true})
    const faq = t('faq.data', {returnObjects:true})
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
                            <table className="table__policies pre-line">
                             {data.map(item=>(
                            <tr>
                            <td style={{fontWeight: 600, width:250}}>{item.name}</td>
                            <td >{item.content}</td>
                            </tr>
                            ))}
                            </table>
                    </div>
                    </div>
                    </div>
                </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content__policies">
                        {faq.map((item)=>(
                            <>
                            <div className='display-4 faq-title'>{item.title}</div>
                                <Collapsible className='mt-3' trigger={item.question}>
                                    <div className="contract-text pre-line">
                                    <p>{item.answer}</p>
                                </div>
                                </Collapsible>
                        </>
                                ))}
                        </div>
                    </div>
                </div>
                </div>    
            </div>
       
    )
}                   