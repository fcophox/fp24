import React from 'react'
import { useTranslation } from "react-i18next";

function Footer () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            <article className="conection" id="conection">
                <div className="container">
                    <div className="block">
                        <div className="row">
                            <div className="col-lg-1 col-md-12 mb-12 mb-md-12"></div>
                            <div className="col-lg-10 col-md-12 mb-12 mb-md-12">
                                <p className="title text-start fw-light green connect wow animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{__html : t("footer.titulo")}}/>
                                    {/* Let's <br />
                                    connect
                                </p> */}
                            </div>
                            <div className="col-lg-1 col-md-12 mb-12 mb-md-12"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12"></div>
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12">
                                <p className="caption text-start" dangerouslySetInnerHTML={{__html : t("footer.caption")}} />
                                    {/* ¿Algún proyecto en mente o necesitas una <span className="violeta">consultoría</span>?
                                </p> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-12 mb-md-12"></div>
                            <div className="col-lg-8 col-md-12 mb-12 mb-md-12">
                                <p className="paragraph text-start cien">
                                    {t("footer.paragraphA")}    
                                    {/* En tiempos complicados y de adversidad, podemos apoyarnos para un mejor futuro. */}
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12 text-start">
                                <a href="mailto:hi@fcophox.com" className="fw-bold mail" dangerouslySetInnerHTML={{__html : t("footer.mail")}}/>
                                    {/* hi@<br /> <span className="fw-light">fcophox.com</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mb-12 mb-md-12">
                            <div className="boxAvatar">
                                <div className="containerboxAvatar">
                                    <div className="avatarboxAvatar">
                                        <img src="assets/images/fcophox.png" alt="" className="avatar" />
                                    </div>
                                    <div className="infoboxAvatar">
                                        <p className="nameProfile fw-bold">
                                            {t("footer.nameProfile")}
                                        </p>
                                        <p className="positionProfile fw-bold">
                                            {t("footer.positionProfile")}
                                        </p>
                                        <p className="placeProfile violeta" dangerouslySetInnerHTML={{__html : t("footer.placeProfile")}} />
                                        <p className="placeProfile" dangerouslySetInnerHTML={{__html : t("footer.linkinProfile")}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy">
                        <p className="copyright text-center">
                            {t("footer.copyright")}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer