import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function Studies () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            <header className="mastheadSingle d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("studies.title")}
                    </h1>
                    <br/>
                    <h4 className="place violeta wow animate__animated animate__fadeInUp">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / {t("breadcrumbs.studies")}
                    </h4>
                </div>
            </header>
            <section className="section singlepage">
                <article className="advance" id="advance">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <p className="titleSingle text-start fw-light green wow animate__animated animate__fadeInUp">
                                    {t("studies.titleStudieA")}
                                </p>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2021</p>
                                        <p className="title">
                                            {t("studies.nameStudieAA")}
                                        </p>
                                    </div>
                                    <div className="studyBoxLogo">
                                        <img src="assets/images/logos/unir.png" alt="Aprende UX" title="Aprende UX"
                                            className="studyBoxImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <p className="paragraph paragraphRow" dangerouslySetInnerHTML={{__html : t("studies.paragraphStudieAA")}} />
                            </div>
                        </div>
                    </div>
                </article>

                <article className="certifications" id="certifications">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 wow animate__animated animate__fadeInUp">
                                <p className="titleSingle text-end fw-lighter green minortext" dangerouslySetInnerHTML={{__html : t("studies.titleStudieB")}} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyFull">
                                    <div className="studyBoxBack FullimgA"></div>
                                    <div className="studyBoxInfo">
                                        <p className="years">
                                            <span className="yearsData">2022</span>
                                        </p>
                                        <div dangerouslySetInnerHTML={{__html : t("studies.nameStudieBA")}} />                                     
                                        {/* <p className="title">Certificación <br />Profesional de Diseño UX de Google</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <img src="../assets/images/logos/google.png" alt="Aprende UX" title="Aprende UX"
                                            className="studyBoxImg" />
                                        <img src="../assets/images/logos/cousera.png" alt="Aprende UX" title="Aprende UX"
                                            className="studyBoxImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyFull">
                                    <div className="studyBoxBack FullimgB"></div>
                                    <div className="studyBoxInfo">
                                        <p className="years">
                                            <span className="yearsData">2018</span>
                                        </p>
                                        <div dangerouslySetInnerHTML={{__html : t("studies.nameStudieBB")}} />
                              
                                        {/* <p className="title">Certificación <br />Internacional UX-PM 3 Niveles
                                        </p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <img src="../assets/images/logos/ayerviernes.png" alt="Aprende UX" title="Aprende UX"
                                            className="studyBoxImg" />
                                        <img src="../assets/images/logos/uxalliance.png" alt="Aprende UX" title="Aprende UX"
                                            className="studyBoxImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="studies" id="studies">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center">
                                <p className="titleSingle text-center fw-lighter green wow animate__animated animate__fadeInUp">
                                    {t("studies.titleStudieC")}
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                    <div className="studyBox">
                                        <div className="studyBoxInfo">
                                            <p className="years violeta">2022</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieCE")}} />
                                            {/* <p className="title">
                                                Diplomado <br />
                                                Diseño Basado en Datos</p> */}
                                        </div>
                                        <div className="studyBoxLogo">
                                            <img src="assets/images/logos/udd.png" alt="UDD" title="UDD" className="studyBoxImg" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                    <div className="studyBox">
                                        <div className="studyBoxInfo">
                                            <p className="years violeta">2020</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieCA")}} />
                                                {/*<p className="title">
                                                Diplomado<br />
                                                Discovery UX &amp; ResearchOps</p> */}
                                        </div>
                                        <div className="studyBoxLogo">
                                            <img src="assets/images/logos/aprendeux.png" alt="Aprende UX" title="Aprende UX"
                                                className="studyBoxImg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">

                                    <div className="studyBox">
                                        <div className="studyBoxInfo">
                                            <p className="years violeta">2019</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieCB")}} />

                                            {/* <p className="title">
                                                Diplomado<br />
                                                UX Design</p> */}
                                        </div>
                                        <div className="studyBoxLogo">
                                            <img src="assets/images/logos/finisterra.png" alt="Aprende UX" title="Aprende UX"
                                                className="studyBoxImg" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                    <div className="studyBox">
                                        <div className="studyBoxInfo">
                                            <p className="years violeta">2014</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieCC")}} />
                                            {/* <p className="title">
                                                Diplomado
                                                Gestión y Desarrollo de Proyectos Digitales</p> */}
                                        </div>
                                        <div className="studyBoxLogo">
                                            <img src="assets/images/logos/puc.png" alt="Aprende UX" title="Aprende UX"
                                                className="studyBoxImg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">

                                    <div className="studyBox">
                                        <div className="studyBoxInfo">
                                            <p className="years violeta">2011</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieCD")}} />
                                            {/*<p className="title">Diseño Gráfico</p> */}
                                        </div>
                                        <div className="studyBoxLogo">
                                            <img src="assets/images/logos/duoc.png" alt="Aprende UX" title="Aprende UX"
                                                className="studyBoxImg"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </article>

                <article className="bootcamps" id="certifications">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <p className="titleSingle  text-start fw-lighter green minortext wow animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{__html : t("studies.titleStudieD")}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2022</p>
                                        <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieDA")}} />
                                        {/* <p className="title">Curso CRO gratuito</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <p className="place">Conviértete &amp; Webpositer Academy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2021</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieDB")}} />
                                        {/* <p className="title">Curso Product Design</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <p className="place">Sol Mesz</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2021</p>
                                            <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieDC")}} />
                                        {/* <p className="title">Bootcamp UX Writing</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <p className="place">DesignCore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2020</p>
                                        <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieDD")}} />
                                        {/* <p className="title">CX: Customer Experience</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <p className="place">MEDU Escuela de Innovación</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2020</p>

                                        <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieDE")}} />

                                        {/* <p className="title">Machine Learning en el contexto UX</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <p className="place">Aprende UX</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">

                                <div className="studyBox">
                                    <div className="studyBoxInfo">
                                        <p className="years violeta">2019</p>
                                        <div className="" dangerouslySetInnerHTML={{__html : t("studies.nameStudieDF")}} />
                                        {/* <p className="title">Arquitectura de la Información para ambientes digitales</p> */}
                                    </div>
                                    <div className="studyBoxLogo">
                                        <p className="place">Universidad de Chile</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>

            </section>

        </div>
    )
}
export default Studies