import React  from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Blog from "../components/Blog/Blog";



function Article () {
    const { t , i18n } = useTranslation();

    return (
        <div>
            <header className="mastheadSingle d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-left">
                    <Link to="/" target="_self" className="volver wow animate__animated animate__fadeInUp">
                        <img src="assets/images/arrowvolver.svg" alt="" className="arrowgreen"/> {t("blog.return")}
                    </Link>
                    <h1 className="position fw-light wow animate__animated animate__fadeInUp">
                        {/* {t("blog.titulo")} */} Artículos
                    </h1>
                    <br/>
                    <h4 className="place violeta wow animate__animated animate__fadeInUp">
                        <img src="assets/images/icons/place.svg" alt="place"/>
                        <Link to="/" className="violeta">{t("breadcrumbs.home")}</Link> / Artículos
                        {/* {t("breadcrumbs.blog")} */}
                    </h4>
                </div>
            </header>

            <section className="section blog wow animate__animated animate__fadeIn">
                <article className="skills" id="skills">

                    <Blog/>

                </article>
            </section>
        </div>
    )
}
export default Article