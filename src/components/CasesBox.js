import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function CasesBox () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            <div className="row">


                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                    <Link to="/delivery" target="_self" className="boxSkills">
                        <img src="../assets/images/uxcases/cases406.png" className="imgSkills hoverImg" alt="img01"/>
                        <div className="infoBoxSkills text-start">
                            <h2 className="nameCases" dangerouslySetInnerHTML={{__html : t("cases.definitioncasesUxF")}} />
                            <p className="definitionCases">2023</p>
                        </div>
                    </Link>
                </div>
                
                <div className="col-lg-6 text-end  colSkills wow animate__animated animate__fadeInUp">
                    <Link to="/recruitment" target="_self" className="boxSkills">
                        <img src="assets/images/uxcases/cases401.png" className="imgSkills hoverImg" alt="img01"/>
                        <div className="infoBoxSkills text-start">
                            <h2 className="nameCases" dangerouslySetInnerHTML={{__html : t("cases.definitioncasesUxE")}} />
                            <p className="definitionCases">2023</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                    <Link to="/event" target="_self" className="boxSkills">
                        <img src="assets/images/uxcases/cases402.png" className="imgSkills hoverImg" alt="img01"/>
                        <div className="infoBoxSkills text-start">
                            <h2 className="nameCases" dangerouslySetInnerHTML={{__html : t("cases.definitioncasesUxB")}} />
                            <p className="definitionCases">2021</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                    <Link to="/cyclists" target="_self" className="boxSkills">
                        <img src="assets/images/uxcases/cases405.png" className="imgSkills hoverImg" alt="img01"/>
                        <div className="infoBoxSkills text-start">
                            <h2 className="nameCases" dangerouslySetInnerHTML={{__html : t("cases.definitioncasesUxD")}} />
                            <p className="definitionCases">2022</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                    <Link to="/allergies" target="_self" className="boxSkills">
                        <img src="assets/images/uxcases/cases404.png" className="imgSkills hoverImg" alt="img01"/>
                        <div className="infoBoxSkills text-start">
                            <h2 className="nameCases" dangerouslySetInnerHTML={{__html : t("cases.definitioncasesUxA")}} />
                            <p className="definitionCases">2019</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-6 text-end colSkills wow animate__animated animate__fadeInUp">
                    <Link to="/visualizer" target="_self" className="boxSkills">
                        <img src="assets/images/uxcases/cases403.png" className="imgSkills hoverImg" alt="img01"/>
                        <div className="infoBoxSkills text-start">
                            <h2 className="nameCases" dangerouslySetInnerHTML={{__html : t("cases.definitioncasesUxC")}} />
                            <p className="definitionCases">2020</p>
                        </div>
                    </Link>
                </div>


            </div>                  
        </div>
    )
}
export default CasesBox