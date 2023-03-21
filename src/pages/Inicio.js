import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import CasesBox from "../components/CasesBox"


function Inicio() {
    const { t , i18n } = useTranslation();
    return (  
        <div>
            <header className="masthead d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-left">
                    <h2 className="greet wow animate__animated animate__fadeInUp">
                        <img src="assets/images/fcophox.png" alt="" className="avatar"/>
                        <span className="fw-light" dangerouslySetInnerHTML={{__html : t("header.saludos" , { name : "francisco" })}} />
                    </h2>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{__html : t("header.cargo")}}/>
                    <h3 className="undercharge fw-light green wow animate__animated animate__fadeInUp">{t("header.subcargo")}</h3>
                    <h4 className="place violeta wow animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{__html : t("header.ubicacion")}}/>
                </div>
            </header>
            <section>
                <article className="biography" id="biography">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-3 col-md-12 mb-12 mb-md-12 wow animate__animated animate__fadeInUp">
                                <p className="title text-end fw-light green" dangerouslySetInnerHTML={{__html : t("biography.title")}} />
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-12 mb-12 mb-md-12 text-center colCasesUX">
                                <a className="boxSkills wow animate__animated animate__fadeInUp">
                                    <img src="../assets/images/profile.png" className="imgSkills" alt="img01" />
                                    <div className="infoBoxSkills text-end">
                                        <h2 className="nameSkills">@fcophox</h2>
                                        <p className="definitionSkills">UX Product Designer</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-12 mb-12 mb-md-12 text-center colCasesUX"></div>
                            <div className="col-lg-5  col-md-12 mb-12 mb-md-12 wow animate__animated animate__fadeInUp">
                                <p className="caption text-start"  dangerouslySetInnerHTML={{__html : t("biography.caption")}} />
                                <p className="paragraph text-start" dangerouslySetInnerHTML={{__html : t("biography.paragraphA")}} />
                                <p className="paragraph paragraphCol text-start"> {t("biography.paragraphB")}</p>
                                <p className="enlace" dangerouslySetInnerHTML={{__html : t("biography.linkedin")}} />
                            </div>
                        </div>
                    </div>
                </article>

                <article className="skills" id="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center wow animate__animated animate__fadeInUp">
                                <p className="title fw-light green" dangerouslySetInnerHTML={{__html : t("cases.title")}} />
                               <br/>
                               <br/>
                               <br/>
                            </div>
                            <CasesBox/>
                        </div>
                    </div>
                </article>

                <article className="skills" id="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center wow animate__animated animate__fadeInUp">
                                <p className="title fw-light green" dangerouslySetInnerHTML={{__html : t("skills.title")}} />
                                {/* <p className="title fw-light green">
                                    Skills
                                </p> */}
                            </div>
                            <div className="row">
                                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                                    <a className="boxSkills">
                                        <img src="assets/images/skills/ux.png" className="imgSkills hoverImg" alt="img01" />
                                        <div className="infoBoxSkills text-start">
                                            <h2 className="nameSkills">UX</h2>
                                            <p className="definitionSkills">
                                                 {t("skills.skillA")}
                                                {/* Experiencia de usuarios */}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                                    <a className="boxSkills">
                                        <img src="assets/images/skills/ui.png" className="imgSkills hoverImg" alt="img01" />
                                        <div className="infoBoxSkills text-start">
                                            <h2 className="nameSkills">UI</h2>
                                            <p className="definitionSkills">
                                                 {t("skills.skillB")}
                                                {/* Interfaz de usuario */}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                                    <a className="boxSkills">
                                        <img src="assets/images/skills/cro.png" className="imgSkills hoverImg" alt="img01" />
                                        <div className="infoBoxSkills text-start">
                                            <h2 className="nameSkills">CRO</h2>
                                            <p className="definitionSkills">
                                                 {t("skills.skillC")}
                                                {/* Conversion optimization rate */}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                                    <a className="boxSkills">
                                        <img src="assets/images/skills/code.png" className="imgSkills hoverImg" alt="img01" />
                                        <div className="infoBoxSkills text-start">
                                            <h2 className="nameSkills">CODE</h2>
                                            <p className="definitionSkills">
                                                 {t("skills.skillD")}
                                                {/* Front-end Develop */}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


     
            
                <article className="section blog wow animate__animated animate__fadeIn">
                    <article className="skills" id="skills">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-center wow animate__animated animate__fadeInUp">
                                    <p className="title fw-light green">
                                        Artículos
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center">
                            <div className="row text-center">
                            
                                <Link to="/blog" target="_self" className="">
                                    Revisa los otros artículos 
                                    <img src="assets/images/arrow.svg" alt="" className="arrowgreen"/> 
                                </Link>
                            </div>
                        </div>
                    </article>
                </article>



            </section>
        </div>
      )
}

export default Inicio