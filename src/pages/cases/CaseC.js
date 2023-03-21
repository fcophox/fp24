import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function CaseC () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            {/* vesti */}
            <header className="mastheadSingleArticle d-flex align-items-center">    
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/uxcases" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("breadcrumbs.casesC")}
                    </h1>
                    <h3 className="undercharge fw-light wow animate__animated animate__fadeInUp">
                        {t("caseC.captionCase")}
                    </h3>
                    <h4 className="place violeta">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / 
                        <Link to="/uxcases" className="violeta"> {t("breadcrumbs.cases")}</Link> / {t("caseC.category")}
                    </h4>
                    <div className="category">
                        <a className="categoryA" target="_blank">UX Consultant</a>
                        <a className="categoryB" target="_blank">UI Designer</a>
                        <a className="categoryD" target="_blank">UX Writing</a>
                    </div>
                </div>
            </header>

            <section className="section singlepage">
                <article className="singleMargin" id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="../assets/images/single/events/events400.png" alt="" className="singleimage"/>
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <br/>
                                <p dangerouslySetInnerHTML={{__html : t("caseC.behance")}} />
                                <br/>
                                <br/>
                            </div>   
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseC.paragraphA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseC.paragraphB")}} />
                                <p className="paragraph paragraphRow violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseC.titleCasA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseC.paragraphC")}} />
                            </div>
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="../assets/images/single/events/events401.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="../assets/images/single/events/events402.gif" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="../assets/images/single/events/events403.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="../assets/images/single/events/events404.png" alt="" className="singleimagemiddle backgroundColorSingle"/>
                                <img src="../assets/images/single/events/events405.gif" alt="" className="singleimagemiddle backgroundColorSingle"/>
                            </div>
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
export default CaseC