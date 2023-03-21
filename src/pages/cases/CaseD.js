import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function CaseD () {
    const { t , i18n } = useTranslation();
    return (
        <div>
{/* cyclists */}
            <header className="mastheadSingleArticle d-flex align-items-center">    
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/uxcases" target="_self" className="volver">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light">
                        {t("breadcrumbs.casesD")}
                    </h1>
                    <h3 className="undercharge fw-light">
                        {t("caseD.captionCase")}
                    </h3>
                    <h4 className="place violeta">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / 
                        <Link to="/uxcases" className="violeta"> {t("breadcrumbs.cases")}</Link> / {t("caseD.category")}
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
                                <img src="assets/images/single/cyclists/cyclists400.png" alt="" className="singleimage"/>
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <br/>
                                <p dangerouslySetInnerHTML={{__html : t("caseD.behance")}} />
                                <br/>
                                <br/>
                            </div> 
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseD.paragraphA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseD.paragraphB")}} />
                            </div>

                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/cyclists/cyclists401.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/single/cyclists/cyclists402.png" alt="" className="singleimagemiddle"/>
                            </div>

                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseD.titleCasA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseD.paragraphC")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseD.paragraphD")}} />
                            </div>
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/cyclists/cyclists403.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/single/cyclists/cyclists404.gif" alt="" className="singlegif"/>
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
export default CaseD