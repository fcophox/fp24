import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function CaseA () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            {/* allergias */}
            <header className="mastheadSingleArticle d-flex align-items-center">    
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/uxcases" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("breadcrumbs.casesA")}
                    </h1>
                    <h3 className="undercharge fw-light wow animate__animated animate__fadeInUp">
                        {t("caseA.captionCase")}
                    </h3>
                    <h4 className="place violeta">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / 
                        <Link to="/uxcases" className="violeta"> {t("breadcrumbs.cases")}</Link> / {t("caseA.category")}
                    </h4>
                    <div className="category">
                        <a className="categoryA" target="_blank">UX Designer</a>
                        <a className="categoryB" target="_blank">UI Designer</a>
                        {/* <a className="categoryD" target="_blank">UX Writing</a> */}
                    </div>
                </div>
            </header>

            <section className="section singlepage">
                <article className="singleMargin" id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/allergies/allergies400.png" alt="" className="singleimage"/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <br/>
                                <p dangerouslySetInnerHTML={{__html : t("caseA.behance")}} />
                                <br/>
                                <br/>
                            </div>   
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseA.paragraphA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseA.paragraphB")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseA.paragraphC")}} />
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseA.titleCasA")}} />
                            </div>
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/allergies/allergies01.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/single/allergies/allergies02.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/singleallergies//allergies03.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/single/allergies/allergies04.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/single/allergies/allergies05.png" alt="" className="singleimagemiddle"/>
                                <img src="assets/images/single/allergies/allergies06.png" alt="" className="singleimage"/>
                                <img src="assets/images/single/allergies/allergies401.png" alt="" className="singleimage"/>
                                <img src="assets/images/single/allergies/allergies402.png" alt="" className="singleimage"/>
                                <img src="assets/images/single/allergies/allergies403.png" alt="" className="singleimage"/>
                                <img src="assets/images/single/allergies/allergies404.gif" alt="" className="singlegif"/>
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
export default CaseA