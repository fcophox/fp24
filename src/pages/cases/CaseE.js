import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function CaseE () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            {/* Reclutamiento */}
            <header className="mastheadSingleArticle d-flex align-items-center">    
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/uxcases" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("breadcrumbs.casesE")}
                    </h1>
                    <h3 className="undercharge fw-light wow animate__animated animate__fadeInUp">
                        {t("caseE.captionCase")}
                    </h3>
                    <h4 className="place violeta">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / 
                        <Link to="/uxcases" className="violeta"> {t("breadcrumbs.cases")}</Link> / {t("caseE.category")}
                    </h4>
                    <div className="category">
                        <a className="categoryA" target="_blank">UX Consultant</a>
                        <a className="categoryB" target="_blank">UI Designer</a>
                        <a className="categoryD" target="_blank">UX Research</a>
                    </div>
                </div>
            </header>


            <section className="section singlepage">
                <article className="singleMargin" id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/recruitment/recruitment400.png" alt="" className="singleimagemiddle"/>
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <br/>
                                <p dangerouslySetInnerHTML={{__html : t("caseE.behance")}} />
                                <br/>
                                <br/>
                            </div> 

                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <a href='https://www.fcophox.com/assets/pdf/informe-reclutamiento-post-pandemia-2023.pdf?utm_source=website&utm_medium=banner&utm_campaign=download-pdf-recruitment&utm_id=download-recruitment' target="_blank" className='download-datadrivendesign'>
                                    <div className='download'>
                                        <img src='assets/images/single/recruitment/download.svg' alt='' className='download-icon'/>
                                        <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseE.paragraphE")}} />
                                    </div>                                
                                </a>
                            </div>


                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseE.paragraphA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseE.paragraphB")}} />
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseE.titleCasA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseE.paragraphC")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseE.paragraphD")}} />
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseE.titleCasB")}} />
                            </div>
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/recruitment/recruitment05.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseE.titleCasC")}} />
                            </div>
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/recruitment/recruitment401.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="assets/images/single/recruitment/recruitment402.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="assets/images/single/recruitment/recruitment403.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="assets/images/single/recruitment/recruitment404.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="assets/images/single/recruitment/recruitment406.gif" alt="" className="singleimagemiddle backgroundColorSingle"/>

                            </div>


                            {/* <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <iframe className="figma" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVgEQjU4mHWcedfM6kB1sp7%2F%25F0%259F%258E%25A7-Design-Sprint-%253A%253A--DBD-Product-Design%3Fpage-id%3D6%253A6%26node-id%3D37%253A106188%26starting-point-node-id%3D37%253A106188" allowfullscreen></iframe>
                            </div> */}
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12 text-center">
                                <br />
                                <br />
                                <Link to="/uxcases" target="_self" className="enlace paragraphRow">
                                <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("breadcrumbs.volver")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            
        </div>
    )
}
export default CaseE