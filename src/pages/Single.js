import React  from 'react'
import { Link } from 'react-router-dom'
// import { useTranslation } from "react-i18next";


function Single () {
    // const { t , i18n } = useTranslation();
    return (
        <div>
            <header class="mastheadSingleArticle d-flex align-items-center">
                <div class="container px-4 px-lg-5 text-left">
                    <Link to="/" target="_self" class="volver">
                        <img src="assets/images/arrowvolver.svg" alt="" class="arrowgreen"/> Volver
                    </Link>
                    <h1 class="position fw-light">
                        Comunidad digital para ciclistas
                    </h1>
                    <h3 class="undercharge fw-light">Proyecto Freelance</h3>
                    <h4 class="place violeta">
                        <img src="assets/img/icons/place.svg" alt="place"/>
                        <Link to="/" class="violeta">Inicio</Link> / UX Cases / Comunidad digital para ciclistas
                    </h4>
                    <div class="category">
                        <a href="#" class="categoryA" target="_blank">UX Consultant</a>
                        <a href="#" class="categoryB" target="_blank">UI Designer</a>
                        <a href="#" class="categoryC" target="_blank">UX Writing</a>
                    </div>
                </div>
            </header>

            <section class="section singlepage">
                <article class="singleMargin" id="">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <img src="assets/images/single/single02.png" alt="" class="singleimage"/>
                            </div>
                            <a href="https://www.linkedin.com/in/fcophox/" target="_blank"
                                class="enlace text-center paragraphRow">
                                Ver en Behance <img src="assets/images/arrow.svg" alt="" class="arrowgreen"/>
                            </a>
                            <div class="col-lg-8 offset-2 col-md-12 mb-12 mb-md-12">
                                <p class="paragraph paragraphRow">
                                    Proyecto freelance realizado en modadlida de Consultor UX y diseñador UI con la finalidad de
                                    disponer un ambientes seguro e informativo para las diferentes personas usuarias que use la
                                    bicicleta a un nivel.
                                </p>
                                <p class="paragraph paragraphRow">
                                    El negocio comenta que actualmente muchos ruteros amantes de movilizarse en bicicleta,
                                    carecen de una comunidad formal, no cuentan con datos seguros para crear o seguir rutas,
                                    tampoco un circulo de seguridad para practicar de manera grupal o invisdivual esta
                                    actividad, en base a una necesidad nace esta aplicacion entregando datos reales para los
                                    diferentes usuarios, soporte en ruta y acompañamiento de mas entusiastas de una ruta en
                                    bicicleta por la cuidad.
                                </p>
                                <p class="paragraph paragraphRow violeta fw-bold">
                                    Cosas importanes a considerar
                                </p>
                                <ul>
                                    <li>
                                        Escenarios de los diferentes usuarios y sus estados al momento de montar una bicicleta.
                                    </li>
                                    <li>
                                        Visualización de datos en tiempo real de los avances sin distrar el foco de la ruta.
                                    </li>
                                </ul>
                                <p class="paragraph paragraphRow">
                                    Algo interesante de este proyecto es la visualizacion de datos que se podria explotar
                                    para mejora continua y algun tipo de metodo de analisis de datos para mejorar la
                                    experiencias de cada rutero.
                                </p>
                            </div>
                            <div class="col-lg-12 col-md-12 mb-12 mb-md-12">
                                <img src="assets/images/single/single01.png" alt="" class="singleimage"/>
                                <img src="assets/images/single/single02.png" alt="" class="singleimage"/>
                                <img src="assets/images/single/single03.png" alt="" class="singleimage"/>
                                <img src="assets/images/single/single01.png" alt="" class="singleimage"/>
                            </div>
                            <div class="col-lg-8 offset-2 col-md-12 mb-12 mb-md-12 text-center">
                                <br />
                                <br />
                                <a href="https://www.linkedin.com/in/fcophox/" target="_blank" class="enlace paragraphRow">
                                    <img src="assets/images/arrowvolver.svg" alt="" class="arrowgreen"/> Volver a Casos UX
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Single