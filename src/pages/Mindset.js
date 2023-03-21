import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function Mindset () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            <header className="mastheadSingle d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("mindset.title")}
                    </h1>
                    <br/>
                    <h4 className="place violeta wow animate__animated animate__fadeInUp">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / {t("breadcrumbs.mindset")}
                    </h4>
                </div>
            </header>
            <section className="section singlepage" >
                <article className="facetas" id="facetas">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <p className="titleSingle text-start fw-light green wow animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{__html : t("mindset.titleA")}} />
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="boxSkills" dangerouslySetInnerHTML={{__html : t("mindset.esquemaA")}} />
                            </div>
                            <div className="col-lg-6 offset-lg-6 col-md-12 mb-12 mb-md-12">
                                <p/>
                                <p/>
                                <p/>
                                <p className="caption text-start" dangerouslySetInnerHTML={{__html : t("mindset.paragraphA")}}/>
                                <p className="paragraph text-start" dangerouslySetInnerHTML={{__html : t("mindset.captionA")}}/>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="usercenter" id="usercenter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <p className="titleSingle text-start fw-light green wow animate__animated animate__fadeInUp"  dangerouslySetInnerHTML={{__html : t("mindset.titleB")}} />
                                    {/* User Centered Design
                                </p> */}
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="boxSkills" dangerouslySetInnerHTML={{__html : t("mindset.esquemaB")}} />
                                {/* <img src="assets/images/mindset/dcu-en.svg" alt="mindset" title="mindset" className="mindsetImg"/> */}
                            </div>
                            <div className="col-lg-6 offset-lg-6 col-md-12 mb-12 mb-md-12">
                                <p className="caption text-star" dangerouslySetInnerHTML={{__html : t("mindset.paragraphB")}} />
                                <p className="paragraph text-star" dangerouslySetInnerHTML={{__html : t("mindset.captionB")}} />
                                {/* <p className="caption text-start">
                                    Iterative process focused on each <span className="destaque">user, their needs and
                                        scenarios</span>, applied to the development of digital products.
                                </p>
                                <p className="paragraph  text-start">
                                    Depending on the characteristics of the project, othe r frameworks such as <span
                                        className="destaque">can be used</span>.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </article>

                <article className="optimization" id="optimization">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <p className="titleSingle text-start fw-light green wow animate__animated animate__fadeInUp" dangerouslySetInnerHTML={{__html : t("mindset.titleC")}} /> 
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-12 mb-md-12 text-start">
                                <div className="boxSkills" dangerouslySetInnerHTML={{__html : t("mindset.esquemaC")}} />
                                {/* <img src="assets/images/mindset/cro-en.svg" alt="mindset" title="mindset" className="mindsetImg"/> */}
                            </div>
                            <div className="col-lg-6 offset-lg-6 col-md-12 mb-12 mb-md-12">
                                <p className="caption text-star" dangerouslySetInnerHTML={{__html : t("mindset.paragraphC")}} />
                                <p className="caption text-star" dangerouslySetInnerHTML={{__html : t("mindset.captionC")}} />
                                {/* <p className="caption text-start">
                                    There may be different methods, this model helps me understand a problem and carry out
                                    experiments for <span className="destaque">conversion optimization</span> and maintain a cycle
                                    of continuous improvement.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </div>
    )
}
export default Mindset