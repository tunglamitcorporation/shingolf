import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import Collapsible from 'react-collapsible'
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function Policies(){
    const {t} = useTranslation()
    const data = t('policy.data',{returnObjects:true})
    const faq = t('faq.data', {returnObjects:true})
    return(
        <div> 
            <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
            {/* <Helmet>
            <meta name="description" content="This is the hotel overview page. We will solve short questions from the FAQ section. Please feel free to contact us for any other questions." />
            <meta name="robots" content="max-image-preview:large" />
            <link rel="canonical" href="https://azumayavietnam.com/q&a/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Hotel Q&A - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
            <meta property="og:description" content="This is the hotel overview page. We will solve short questions from the FAQ section. Please feel free to contact us for any other questions." />
            <meta property="og:url" content="https://azumayavietnam.com/q&a/" />
            <meta property="og:image" content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710146482/AzumayaWeb/PP/Promo/529888125-transformed_adalkk.jpg" />
            <meta property="article:published_time" content="2017-12-01T05:00:23+00:00" />
            <meta property="article:modified_time" content="2020-07-06T03:23:31+00:00" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Hotel Q&A - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
            <meta name="twitter:description" content="This is the hotel overview page. We will solve short questions from the FAQ section. Please feel free to contact us for any other questions." />\
            <script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/hotel-policies\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/hotel-policies\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/hotel-policies\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hotel-policies\/","name":"HOTEL POLICIES","description":"This is the hotel overview page. We will solve short questions from the FAQ section. Please feel free to contact us for any other questions.","url":"https:\/\/azumayavietnam.com\/hotel-policies\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hotel-policies\/#webpage","url":"https:\/\/azumayavietnam.com\/hotel-policies\/","name":"HOTEL POLICIES - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"This is the hotel overview page. We will solve short questions from the FAQ section. Please feel free to contact us for any other questions.","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/hotel-policies\/#breadcrumblist"},"datePublished":"2017-12-01T05:00:23+07:00","dateModified":"2020-07-06T03:23:31+07:00"}]`}
		</script>
            </Helmet> */}
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