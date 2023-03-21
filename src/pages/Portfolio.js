import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function Portfolio () {
    const { t , i18n } = useTranslation();
    return (
        <div>    
            <header className="mastheadSingle d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/" target="_blank" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("portafolio.titulo")}
                    </h1>
                    <br/>
                    <h4 className="place violeta wow animate__animated animate__fadeInUp">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / {t("breadcrumbs.porfolio")}
                    </h4>
                </div>
            </header>

            <section className="section singlepage">
                <article className="skills" id="skills">
                    <div className="container text-center">
                        <div className="row text-center">

                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-end">
                                <a href="https://www.behance.net/gallery/165920723/Menu-digital-para-despachos-a-domicilio" className="boxSkills" target="_blank">
                                    <img src="../assets/images/uxcases/cases406.png" className="imgSkills hoverImg" alt="img01"/>
                                    <div className="infoBoxSkills text-start">
                                        <p className="definitionSkills green">{t("portafolio.linkBehance")}</p>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-end">
                                <a href="https://www.behance.net/gallery/165978309/Comunidad-de-ciclismo-en-Santiago-de-Chile" className="boxSkills" target="_blank">
                                    <img src="../assets/images/uxcases/cases405.png" className="imgSkills hoverImg" alt="img01"/>
                                    <div className="infoBoxSkills text-start">
                                        <p className="definitionSkills green">{t("portafolio.linkBehance")}</p>
                                    </div>
                                </a>
                            </div>
   

                            
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-end">
                                <a href="https://www.behance.net/gallery/165977975/Reclutamiento-Post-Pandemia" className="boxSkills" target="_blank">
                                    <img src="../assets/images/uxcases/cases401.png" className="imgSkills hoverImg" alt="img01"/>
                                    <div className="infoBoxSkills text-start">
                                        <p className="definitionSkills green">{t("portafolio.linkBehance")}</p>
                                    </div>
                                </a>
                            </div>


                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-end">
                                <a href="https://www.behance.net/gallery/165894227/Visualizador-de-comunas-para-Chile-por-Covid-19" className="boxSkills" target="_blank">
                                    <img src="../assets/images/uxcases/cases403.png" className="imgSkills hoverImg" alt="img01"/>
                                    <div className="infoBoxSkills text-start">
                                        <p className="definitionSkills green">{t("portafolio.linkBehance")} <img src="assets/images/arrow.svg" alt="" className="arrowgreen"/></p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-end">
                                <a href="https://www.behance.net/gallery/165977545/Interfaz-para-plataforma-de-eventos" target="_blank" className="boxSkills">
                                    <img src="../assets/images/uxcases/cases402.png" className="imgSkills hoverImg" alt="img01"/>
                                    <div className="infoBoxSkills text-start">
                                        <p className="definitionSkills green">{t("portafolio.linkBehance")} <img src="assets/images/arrow.svg" alt="" className="arrowgreen"/></p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-end">
                                <a href="https://www.behance.net/gallery/165894227/Visualizador-de-comunas-para-Chile-por-Covid-19" className="boxSkills" target="_blank">
                                    <img src="../assets/images/uxcases/cases404.png" className="imgSkills hoverImg" alt="img01"/>
                                    <div className="infoBoxSkills text-start">
                                        {/* <h2 className="nameCases">
                                            Visualizador de estado comunas para Chile COVID-19
                                        </h2> */}
                                        <p className="definitionSkills green">{t("portafolio.linkBehance")} <img src="assets/images/arrow.svg" alt="" className="arrowgreen"/></p>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </article>
            </section>

        </div>
    )
}
export default Portfolio