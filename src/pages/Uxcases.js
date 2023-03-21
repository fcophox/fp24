import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import CasesBox from "../components/CasesBox"


function Uxcases () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            <header className="mastheadSingle d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("portafolio.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {t("cases.title")}
                    </h1>
                    <br/>
                    <h4 className="place violeta wow animate__animated animate__fadeInUp">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / {t("breadcrumbs.cases")}
                    </h4>
                </div>
            </header>
            <section className="section singlepage">
                <article className="skills" id="skills">
                    <div className="container">
                        <CasesBox/>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Uxcases