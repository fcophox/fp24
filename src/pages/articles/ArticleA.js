import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function ArticleA () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            {/* ArticleA */}
            <header className="mastheadSingleArticle d-flex align-items-center">    
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/blog" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <div className="category">
                        <a className="categoryA" target="_blank">Experiencias</a>
                        {/* <a className="categoryD" target="_blank">Design Sprint</a> */}
                        {/* <a className="categoryB" target="_blank">UI Designer</a> */}
                    </div>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {/* {t("breadcrumbs.casesF")} */}
                        Diseño UX en Canadá: conoce a los miembros de UX Alliance

                    </h1>
                    {/* <h3 className="undercharge fw-light wow animate__animated animate__fadeInUp">
                        {t("caseF.captionCase")}
                    </h3> */}
                    {/* <h4 className="place violeta">
                        <img src="../assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / 
                        <Link to="/uxcases" className="violeta"> {t("breadcrumbs.cases")}</Link> / {t("caseF.category")}
                    </h4> */}

                </div>
            </header>


            <section className="section singlepage">
                <article className="singleMargin" id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                            <img src="../assets/images/img.png" className="imgBlog" alt="" />

                            </div>

                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphA")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphB")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphC")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphD")}} />
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphE")}} />

                            </div>
                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12 ">
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseF.titleCasA")}} />
                                <ul>
                                    <li className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphF")}} />
                                </ul>
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseF.titleCasB")}} />
                                <ul>
                                    <li className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphG")}} />
                                </ul>
                                <p className="paragraph violeta fw-bold" dangerouslySetInnerHTML={{__html : t("caseF.titleCasC")}} />
                                <ul>
                                    <li className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("caseF.paragraphH")}} />
                                </ul>
                            </div>

                            <div className="col-lg-8 offset-lg-2 col-md-12 mb-12 mb-md-12 text-center">
                                <br />
                                <br />
                                <Link to="/uxcases" target="_self" className="enlace paragraphRow">
                                    <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> 
                                    {/* {t("breadcrumbs.volver")} */}
                                    Volver al Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            
        </div>
    )
}
export default ArticleA