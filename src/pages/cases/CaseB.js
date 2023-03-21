import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function CaseB () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            {/* Visualizador */}
            <header className="mastheadSingleArticle d-flex align-items-center">    
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/uxcases" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>                    
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("breadcrumbs.casesB")}
                    </h1>
                    <h3 className="undercharge fw-light wow animate__animated animate__fadeInUp">
                        {t("caseB.captionCase")}
                    </h3>
                    <h4 className="place violeta">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / 
                        <Link to="/uxcases" className="violeta"> {t("breadcrumbs.cases")}</Link> / {t("caseB.category")}
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
                                <img src="assets/images/single/visualizer/visualizer400.png" alt="" className="singleimage"/>
                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <br/>
                                <p dangerouslySetInnerHTML={{__html : t("caseB.behance")}} />
                                <br/>
                                <br/>
                            </div>      
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseB.paragraphA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseB.paragraphB")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseB.paragraphC")}} />
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseB.titleCasA")}} />
                                <ul className="list">
                                    <li className="paragraph" dangerouslySetInnerHTML={{__html : t("caseB.listA")}}/>
                                    <li className="paragraph" dangerouslySetInnerHTML={{__html : t("caseB.listB")}}/>
                                    <li className="paragraph" dangerouslySetInnerHTML={{__html : t("caseB.listC")}}/>
                                </ul>
                            </div>
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <img src="assets/images/single/visualizer/visualizer401.png" alt="" className="singleimage backgroundColorSingle"/>
                                <img src="assets/images/single/visualizer/visualizer403.gif" alt="" className="singleimage backgroundColorSingle"/>
                                <img src="assets/images/single/visualizer/visualizer402.png" alt="" className="singleimage backgroundColorSingle"/>
                                <img src="assets/images/single/visualizer/visualizer405.png" alt="" className="singleimage backgroundColorSingle"/>
                                <img src="assets/images/single/visualizer/visualizer404.gif" alt="" className="singlegif"/>
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
export default CaseB