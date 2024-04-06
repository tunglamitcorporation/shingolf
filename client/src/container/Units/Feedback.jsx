import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function Feedback() {
function LineModal(props) {
    return (
      <>
        <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         backdrop="static"
         keyboard={false}
        >
          <Modal.Header className="justify-content-end">
            <Button variant="light right" onClick={props.onHide}>
            <i class="fa-solid fa-xmark purple"></i>
          </Button>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <img width={"100%"} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710388651/AzumayaWeb/img-ads_qlzhfp.jpg" alt="azumaya hotel line ads" />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
    const {t} = useTranslation()
    const [selectedFile, setSelectedFile] = useState(null);
    const [issue, setIssue ] = useState('');
    const [urlIssue, setUrlIssue] = useState('')
    const [reproduce, setReProduce] = useState('')
    const [browser, setBrowser] = useState('')
    const [additional, setAdditional] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    const handleSubmit = (e) => {
        const dataObject = {
            selectedFile,
            issue,
            urlIssue,
            reproduce,
            browser,
            additional
        }
        console.log(dataObject);    
        e.preventDefault();
    }
    return(
        <>
         <div className="policies__header">
                    <div classNameName="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{t('header.feedback')}</h1>
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
                                       <Link  to="/">
                                           <i className="fa-solid fa-house"></i>
                                       </Link>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                       <Link className ="breadcrumb__title" to = '/feedback'>{t('header.feedback')}</Link>
                                </li>
                       </ul>
                       </div>
                    </div>
                </div>
            </div>
            <div className="container pre-line">
                <div className="row">
                    <h1 className='center mb-5' style={{fontWeight: 'bold', fontSize:'3rem', color:'#482979'}}>{t("error.feedback_title")}</h1>
                    <p style={{fontSize:'1.4rem'}}> {t("error.feedback_content")}</p>
                    <ul style={{fontSize:'1.3rem'}}>{t("error.feedback_instruction")}
                        <li>{t("error.feedback_instruction1")}</li>
                        <li>{t("error.feedback_instruction2")}</li>
                        <li>{t("error.feedback_instruction3")}</li>
                    </ul>
                </div>
            </div>
         <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="name__title mb-3">{t('error.feedback_1')}</div>
                            <textarea 
                            style={{fontSize: '1.4rem'}}
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            className='form_content feedback_form'/>
                        <div className="name__title mb-3">{t('error.feedback_2')}</div>
                            <textarea
                            style={{fontSize: '1.4rem'}} 
                            value={urlIssue}
                            onChange={(e) => setUrlIssue(e.target.value)}
                            className='form_content feedback_form'/>
                        <div className="name__title mb-3">{t('error.feedback_3')}</div>
                            <textarea
                            style={{fontSize: '1.4rem'}}
                            value={reproduce} 
                            onChange={(e) => setReProduce(e.target.value)}
                            className='form_content feedback_form'/>
                    <div className="name__title mb-3">{t('error.feedback_4')}</div>
                            <textarea
                            style={{fontSize: '1.4rem'}} 
                            value = {browser}
                            onChange={(e) => setBrowser(e.target.value)}
                            className='form_content feedback_form'/>
                    <div className="name__title mb-3">{t('error.feedback_5')}</div>
                            <textarea
                            style={{fontSize: '1.4rem'}} 
                            value={additional}
                            onChange={(e) => setAdditional(e.target.value)}
                            className='form_content feedback_form'/>
                        <div>
                            <label className='name__title' htmlFor="imageUpload">{t('error.feedback_6')}</label>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            </div>
                            <div>
                            </div>
                        {selectedFile && (
                            <div>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                            </div>
                              )}
                    </div>
                    <div className="col-md-4" style={{marginTop: '80px'}}>
                    <div className="content__qr">
                        <img
                        className="content__qr-img"
                        src={t("home.line_link")}
                        alt="qr line azumaya hotel"
                        />
                        <button 
                        onClick={() => setModalShow(true)
                        }
                        className="base__btn btn--detail">
                        {t("home.line_btn")}
                        </button>
                    <LineModal
                    show = {modalShow}
                    onHide = {()=> setModalShow(false)}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <button
                    style={{width: '300px'}}
                        id="send"
                        className="base__btn btn__send"
                        type="submit"
                    >
                        {t("reservation.send")}
                    </button>
                    </div>
                    </form>
                    </>

    )
}